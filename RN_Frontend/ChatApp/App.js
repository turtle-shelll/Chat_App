import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from './src/Screens/HomeScreen';
import ChatScreen from './src/Screens/ChatScreen';
// import ChatScreenTwo from "./src/Screens/ChatScreenTwo";
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <HomeScreen /> */}
      <ChatScreen />
      {/* <ChatScreenTwo /> */}
    </View>
  )
}