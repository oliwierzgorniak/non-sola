"use client";

import Sidebar from "@/components/pl/messages/sidebar/Sidebar";
import Chat from "@/components/pl/messages/chat/Chat";
import ChatNotSelected from "@/components/pl/messages/chatNotSelected/ChatNotSelected";
import Navbar from "@/components/pl/search/navbar/Navbar";
import { useState } from "react";
import { Chat as ChatType } from "@/fetchers/chatsFetcher";
import styles from "./messages.module.css";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState<null | ChatType>(null);

  return (
    <div className={styles.container}>
      <Navbar />
      <article className={styles.chatContainer}>
        <Sidebar setSelectedChat={setSelectedChat} />
        {selectedChat ? (
          <Chat selectedChat={selectedChat} />
        ) : (
          <ChatNotSelected />
        )}
      </article>
    </div>
  );
}
