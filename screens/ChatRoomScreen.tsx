import React from "react";
import { View, Text, ImageBackground } from "react-native";

import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

import chartRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
import InputBox from "../components/InputBox";

import BG from "../assets/images/BG.png";
// import Emma from "../assets/images/Emma.png";

const ChatRoomScreen = () => {
  const route = useRoute();
  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
      <FlatList
        data={chartRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />

      <InputBox />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
