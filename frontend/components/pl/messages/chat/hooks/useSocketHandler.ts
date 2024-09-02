import { Dispatch, SetStateAction, useEffect } from "react";
import socket from "../../../../../socket";
import { Message } from "@/fetchers/messagesFetcher";
import { Chat } from "@/fetchers/chatsFetcher";

export default function useSocketHandler(
  moreMessages: Message[],
  setMoreMessages: Dispatch<SetStateAction<Message[]>>,
  selectedChat: Chat | null
) {
  socket.on("message", (message: { author: number; content: string }) => {
    console.log(selectedChat, message.author);
    if (!selectedChat) return;
    if (message.author != selectedChat.id) return;

    setMoreMessages([
      ...moreMessages,
      {
        content: message.content,
        isUsers: message.author != selectedChat.id,
      },
    ]);
  });
}
