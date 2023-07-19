import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

export default function ChatHeader() {
    return (
        <View style={styles.ChatHeader}>
            <Pressable style={({ pressed }) => ([{ opacity: pressed ? 0.5 : 1 }])}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>User Name</Text>
            </Pressable>
            <Pressable style={({ pressed }) => ([{ marginLeft: "auto", opacity: pressed ? 0.5 : 1 }])}>
                <Text style={{ fontSize: 18 }}>Camera</Text>
            </Pressable>
            <Pressable style={({ pressed }) => ([{ marginHorizontal: 20, opacity: pressed ? 0.5 : 1 }])}>
                <Text style={{ fontSize: 18 }}>Video</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    ChatHeader: {
        backgroundColor: "#c5c5c5",
        padding: 14,
        flexDirection: "row",
    }
});