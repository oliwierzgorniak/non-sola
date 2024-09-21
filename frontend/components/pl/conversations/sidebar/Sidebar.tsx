import chatsFetcher from "@/fetchers/chatsFetcher";
import useSWR from "swr";
import styles from "./sidebar.module.css";
import { Chat } from "../../../../fetchers/chatsFetcher";
import { Dispatch, SetStateAction } from "react";
import useIsSmallViewport from "./hooks/useIsSmallViewport";

type SidebarProps = {
  setSelectedChat: Dispatch<SetStateAction<Chat | null>>;
};

export default function Sidebar({ setSelectedChat }: SidebarProps) {
  const { data, isLoading } = useSWR("/messaging/chats", chatsFetcher);
  const isSmallViewport = useIsSmallViewport();

  if (isLoading || data?.result == "error") return null;

  const users = data?.content as Chat[];
  // const users = [
  //   { id: 1, name: "a" },
  //   { id: 1, name: "a" },
  //   { id: 1, name: "a" },
  //   { id: 1, name: "a" },
  //   { id: 1, name: "a" },
  //   { id: 1, name: "a" },
  //   { id: 1, name: "a" },
  //   { id: 1, name: "a" },
  //   { id: 1, name: "a" },
  //   { id: 1, name: "a" },
  //   { id: 1, name: "a" },
  //   { id: 1, name: "a" },
  // ];

  return (
    <div className={styles.container}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => setSelectedChat(user)}>
              {isSmallViewport ? user.name[0] : user.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
