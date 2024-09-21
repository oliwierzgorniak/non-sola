"use client";

import Sidebar from "@/components/pl/conversations/sidebar/Sidebar";
import Chat from "@/components/pl/conversations/chat/Chat";
import ChatNotSelected from "@/components/pl/conversations/chatNotSelected/ChatNotSelected";
import Navbar from "@/components/pl/search/navbar/Navbar";
import { useState } from "react";
import { Chat as ChatType } from "@/fetchers/chatsFetcher";
import styles from "./conversations.module.css";
import useSocketHandler from "@/components/pl/conversations/chat/hooks/useSocketHandler";
import { Message } from "@/fetchers/messagesFetcher";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState<null | ChatType>(null);
  const [moreMessages, setMoreMessages] = useState<Message[]>([]);
  useSocketHandler(moreMessages, setMoreMessages, selectedChat);

  return (
    <div className={styles.container}>
      <Navbar />
      <article className={styles.chatContainer}>
        <Sidebar setSelectedChat={setSelectedChat} />
        {selectedChat ? (
          <Chat
            selectedChat={selectedChat}
            moreMessages={moreMessages}
            setMoreMessages={setMoreMessages}
          />
        ) : (
          <ChatNotSelected />
        )}
      </article>
    </div>
  );
}
