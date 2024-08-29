import chatsFetcher from "@/fetchers/chatsFetcher";
import useSWR from "swr";
import styles from "./sidebar.module.css";
import { Chat } from "../../../../fetchers/chatsFetcher";

export default function Sidebar() {
  const { data, isLoading } = useSWR("/messaging/chats", chatsFetcher);

  if (isLoading || data?.result == "error") return;

  const users = data?.content as Chat[];

  return (
    <div className={styles.container}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button>Karol</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
