import useSWR from "swr";
import styles from "./chat.module.css";
import messagesFetcher from "@/fetchers/messagesFetcher";

type ChatType = {
  id: number;
  name: string;
};

type ChatProps = {
  selectedChat: ChatType;
};

export default function Chat({ selectedChat }: ChatProps) {
  const { data } = useSWR("/messaging/messages", () =>
    messagesFetcher(selectedChat.id)
  );

  return (
    <div className={styles.container}>
      <div>
        <h3>{selectedChat.name}</h3>
      </div>
      <ul>{JSON.stringify(data)}</ul>
    </div>
  );
}
