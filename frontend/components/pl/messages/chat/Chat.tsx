import useSWR from "swr";
import Image from "next/image";
import styles from "./chat.module.css";
import messagesFetcher, { Message } from "@/fetchers/messagesFetcher";

type ChatType = {
  id: number;
  name: string;
};

type ChatProps = {
  selectedChat: ChatType;
};

export default function Chat({ selectedChat }: ChatProps) {
  const { data, isLoading } = useSWR("/messaging/messages", () =>
    messagesFetcher(selectedChat.id)
  );

  if (isLoading || data?.result == "error") return null;

  const messages = data?.content as Message[];

  return (
    <div className={styles.container}>
      <div className={styles.nameContainer}>
        <h3>{selectedChat.name}</h3>
      </div>
      <div className={styles.messagesContainer}>
        <ul>
          {messages.map(({ isUsers, content }, i) => (
            <li className={isUsers ? styles.isUsers : ""} key={`message-${i}`}>
              {content}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.inputContainer}>
        <input placeholder="Wiadomość..." />
        <button>
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
