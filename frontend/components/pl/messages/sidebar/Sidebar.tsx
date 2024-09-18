import chatsFetcher from "@/fetchers/chatsFetcher";
import useSWR from "swr";
import styles from "./sidebar.module.css";
import { Chat } from "../../../../fetchers/chatsFetcher";
import { Dispatch, SetStateAction } from "react";

type SidebarProps = {
  setSelectedChat: Dispatch<SetStateAction<Chat | null>>;
};

export default function Sidebar({ setSelectedChat }: SidebarProps) {
  const { data, isLoading } = useSWR("/messaging/chats", chatsFetcher);

  if (isLoading || data?.result == "error") return null;

  const users = data?.content as Chat[];

  return (
    <div className={styles.container}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => setSelectedChat(user)}>{user.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
