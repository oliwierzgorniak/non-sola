import styles from "./chat.module.css";

type ChatType = {
  id: number;
  name: string;
};

type ChatProps = {
  selectedChat: ChatType;
};

export default function Chat({ selectedChat }: ChatProps) {
  return (
    <div className={styles.container}>
      <div>
        <h3>{selectedChat.name}</h3>
      </div>
      <ul></ul>
    </div>
  );
}
