import useSWR from "swr";
import Image from "next/image";
import styles from "./chat.module.css";
import messagesFetcher, { Message } from "@/fetchers/messagesFetcher";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import sendMessageFetcher from "@/fetchers/sendMessageFetcher";
import useSocketHandler from "./hooks/useSocketHandler";
import socket from "@/socket";

type ChatType = {
  id: number;
  name: string;
};

type ChatProps = {
  selectedChat: ChatType;
  moreMessages: Message[];
  setMoreMessages: Dispatch<SetStateAction<Message[]>>;
};

export default function Chat({
  selectedChat,
  moreMessages,
  setMoreMessages,
}: ChatProps) {
  const { data, isLoading } = useSWR("/messaging/messages", () =>
    messagesFetcher(selectedChat.id)
  );
  const inputRef = useRef(null);

  const bottomLiRef = useRef<null | HTMLLIElement>(null);
  useEffect(() => {
    bottomLiRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [moreMessages, data?.content]);

  if (isLoading || data?.result == "error") return null;

  const messages = data?.content as Message[];

  return (
    <div className={styles.container}>
      <div className={styles.nameContainer}>
        <h3>{selectedChat.name}</h3>
      </div>
      <div className={styles.messagesContainer}>
        <ul>
          {[...messages, ...moreMessages].map(({ isUsers, content }, i) => (
            <li
              className={isUsers ? styles.isUsers : styles.isNotUsers}
              key={`message-${i}`}
            >
              {content}
            </li>
          ))}
          <li className={styles.bottomLi} ref={bottomLiRef}></li>
        </ul>
      </div>
      <div className={styles.inputContainer}>
        <input ref={inputRef} placeholder="Wiadomość..." />
        <button
          onClick={() => {
            const $input = inputRef.current as unknown as HTMLInputElement;
            if ($input.value.length == 0) return;
            const newMessage = { content: $input.value, isUsers: true };
            setMoreMessages([...moreMessages, newMessage]);
            socket.emit("message", {
              receipient: selectedChat.id,
              content: $input.value,
            });
            $input.value = "";
          }}
        >
          <Image
            width={20}
            height={20}
            src={"/send.svg"}
            alt="ikonka wysyłania"
          />
        </button>
      </div>
    </div>
  );
}
