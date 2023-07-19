import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import ChatHeader from '../Components/ChatHeader';
import { heightToDp, widthToDp } from '../Utils/Responsive';
import moment from 'moment';

export default function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            msgText: "hello user",
            time: "12:12 AM",
            sender: "me"
        },
        {
            msgText: "welcome",
            time: "12:12 AM",
            sender: "sender"
        },
        {
            msgText: "this is Hardik Mistry.",
            time: "12:12 AM",
            sender: "me"
        },
        {
            msgText: "whatsup dude.",
            time: "12:12 AM",
            sender: "me"
        },
        {
            msgText: "just fine what about you.",
            time: "12:12 AM",
            sender: "sender"
        },
        {
            msgText: "I am also good doing nothing then texting for time pass i am getting bore of this all things.",
            time: "12:12 AM",
            sender: "me"
        },
        {
            msgText: "hello user",
            time: "12:12 AM",
            sender: "me"
        },
        {
            msgText: "welcome",
            time: "12:12 AM",
            sender: "sender"
        },
        {
            msgText: "this is Hardik Mistry.",
            time: "12:12 AM",
            sender: "me"
        },
        {
            msgText: "whatsup dude.",
            time: "12:12 AM",
            sender: "me"
        },
        {
            msgText: "just fine what about you.",
            time: "12:12 AM",
            sender: "sender"
        },
        {
            msgText: "I am also good doing nothing then texting for time pass i am getting bore of this all things.",
            time: "12:12 AM",
            sender: "me"
        },
    ]);
    const [msgText, setMsgText] = useState("");

    function onSend() {
        if (msgText.trim() != "") {
            setMessages((preMesssages) => {
                return [...preMesssages, {
                    msgText: msgText.trim(),
                    time: moment().format("hh:mm A"),
                    sender: "me"
                }];
            });
        }
        setMsgText("");
    }
    return (
        <View style={{ flex: 1 }}>
            <ChatHeader />
            <View style={styles.ChatScreenContainer}>
                <ScrollView style={{ marginBottom:heightToDp(8) }}>
                    {messages.map((values, i) => {
                        return (
                            <View style={{ backgroundColor: "#09839e", margin: 5, padding: 14, borderRadius: 10, maxWidth: 300, alignSelf: values.sender == "me" ? "flex-end" : "flex-start" }}>
                                <Text style={{ textAlign: values.sender == "me" ? "right" : "left", fontSize: 16, fontWeight: "500" }}>{values.msgText}</Text>
                            </View>
                        );
                    })}
                </ScrollView>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter Text"
                        onChangeText={(text) => {
                            setMsgText(text);
                        }}
                        value={msgText}
                    />
                    <Pressable style={({ pressed }) => ([styles.sendBtn, { opacity: pressed ? 0.5 : 1 }])}
                        onPress={onSend}
                    >
                        <Text style={styles.sendBtnTxt}>Send</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ChatScreenContainer: {
        backgroundColor: "#f5f5f5",
        flex: 1
    },
    inputContainer: {
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "#c5c5c555",
        position: "absolute",
        bottom: 0
    },
    inputStyle: {
        borderWidth: 1,
        width: widthToDp(100),
        alignSelf: "center",
        borderColor: "grey",
        padding: 14,
        fontSize: 16,
        fontWeight: "500"
    },
    sendBtn: {
        position: "absolute",
        padding: 10,
        paddingHorizontal: 15,
        backgroundColor: "#a5a5a5",
        borderRadius: 10
    },
    sendBtnTxt: {
        fontSize: 16,
        fontWeight: "700",
    }
});