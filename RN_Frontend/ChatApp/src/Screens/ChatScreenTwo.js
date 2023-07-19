import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Pressable } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import GlobalStyles from '../utils/GlobalStyles';
// import { useNavigation } from '@react-navigation/native';
// import Header from '../components/Header';
// import Global from './Global';
import { widthToDp } from "../Utils/Responsive";
import VectorIcons from '../ReuseableComponents/VectorIcons';
const GlobalStyles = {};
const Colors = {};
const Fonts = {};
const ChatScreen = ({ route }) => {
    // const navigation = useNavigation();
    const navigation = {};
    // const [userName, setUserName] = useState(route?.params?.userName);
    const [userName, setUserName] = useState("User Name");
    const [message, setMessage] = useState('');
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const flatListRef = useRef(null);
    const [setter, setSetter] = useState(true);
    const [messages, setMessages] = useState([]);
    setInterval(() => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;

        setTime(timeString);
    }, 1000);

    const handleSubmit = () => {
        if (messages == undefined) {
            // Global.messages[userName] = [];
            if (message.trim() != "") {
                setMessages([{
                    id: messages == undefined ? 1 : messages.length + 1,
                    message: `${message.trim()}`,
                    time: `${time}`,
                    senderId: "reciever",
                    viewed: false
                }]);
                setMessage('');
                // Global.messages[userName] = messages;
                setSetter(true);
            }
        } else {
            if (message.trim() != "") {
                setMessages([...messages, {
                    id: messages.length + 1,
                    message: `${message.trim()}`,
                    time: `${time}`,
                    senderId: "reciever",
                    viewed: false
                }]);
                setMessage('');
                // Global.messages[userName] = messages;
                setSetter(true);
            }
            scrollToIndex()
        }
    };
    const scrollToIndex = () => {
        let index = messages.length - 1;
        flatListRef.current.scrollToIndex({ animated: true, index: index });
    }
    useEffect(() => {
        // Global.messages[userName] = messages;
        setSetter(false);
    }, [setter])
    return (
        <View style={[GlobalStyles.mainBox, { marginBottom: widthToDp(2) }]}>
            <View style={[{ flex: 1, justifyContent: 'flex-end' }]}>
                <View>
                    <FlatList
                        ref={flatListRef}
                        data={messages}
                        renderItem={({ item }) => (
                            <View>
                                <View style={{ alignItems: "center", paddingHorizontal: widthToDp(4), width: "100%" }}>
                                    <Text style={[Fonts.Nunito_600SemiBold, GlobalStyles.extrasmallText]}>
                                        {item.time}
                                    </Text>
                                </View>
                                <View style={[item.senderId == "sender" ? styles.messageContainerSender : styles.messageContainerReciever, { maxWidth: "75%", position: "relative", borderRadius: message.length <= 50 ? 50 : 14 }]}>
                                    <Text style={[item.senderId == "sender" ? styles.messageTextSender : styles.messageTextReciever, Fonts.Nunito_600SemiBold]}>{item.message}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
            <View style={{ flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
                <VectorIcons groupName='AntDesign' iconName="smile-circle" iconsize={widthToDp(6)} />
                <View style={[styles.inputContainer, { flexDirection: "row", justifyContent: "space-between", width: "90%" }]}>
                    <TextInput
                        style={[styles.input, GlobalStyles.mediumText, Fonts.Nunito_600SemiBold, { width: message.length == 0 ? "63%" : "65%" }]}
                        value={message}
                        placeholderTextColor={Colors.placeholderTextColor}
                        multiline
                        editable
                        onChangeText={(text) => setMessage(text)}
                        placeholder="Type a message..."
                    />
                    {message.length == 0 ?
                        <View style={{ flexDirection: "row", width: widthToDp(25), justifyContent: "space-between", alignItems: "center" }}>
                            <VectorIcons groupName='FontAwesome' iconName="camera" />
                            <VectorIcons groupName='Entypo' iconName="attachment" />
                            <VectorIcons groupName='FontAwesome' iconName="microphone" />
                        </View> :
                        <View style={{ flexDirection: "row", width: widthToDp(15), justifyContent: "space-between", alignItems: "center" }}>
                            <VectorIcons groupName='Entypo' iconName="attachment" />
                            <Pressable onPress={handleSubmit}>
                                <VectorIcons groupName='Ionicons' iconName="ios-send" iconstyle={{ color: Colors.primaryButtonColor }} />
                            </Pressable>
                        </View>
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    messageContainerSender: {
        padding: 10,
        margin: 5,
        backgroundColor: Colors.textInputBorder,
        borderRadius: 50,
        alignSelf: "flex-start",
        paddingHorizontal: widthToDp(4),
        maxWidth: "80%",
    },
    messageContainerReciever: {
        padding: 10,
        margin: 5,
        backgroundColor: Colors.primaryButtonColor,
        borderRadius: 50,
        alignSelf: "flex-end",
        paddingHorizontal: widthToDp(4),
        maxWidth: "80%",
    },
    messageTextReciever: {
        fontSize: widthToDp(6),
        color: Colors.boxBackground,
        lineHeight: widthToDp(6),
    },
    messageTextSender: {
        fontSize: widthToDp(6),
        color: Colors.primaryTextColor,
        lineHeight: widthToDp(6),
    },
    inputContainer: {
        padding: widthToDp(4),
        borderRadius: 14,
        borderWidth: 1,
        borderColor: Colors.textInputBorder,
    },
    input: {
        padding: widthToDp(2),
        minHeight: 20,
        maxHeight: 50,
    },
});

export default ChatScreen;