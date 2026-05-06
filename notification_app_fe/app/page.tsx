"use client";

import { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";
import { Notification } from "../types/notification";
import { Log } from "../../logging_middleware/logger";

export default function Home() {
  useEffect(() => {
    Log(
      "frontend",
      "info",
      "page",
      "Notification dashboard loaded"
    );
  }, []);
  const toggleReadStatus = (id: number) => {
  setNotifications((prev) =>
    prev.map((notification) =>
      notification.id === id
        ? {
            ...notification,
            read: !notification.read,
          }
        : notification
    )
  );

  Log(
    "frontend",
    "info",
    "state",
    `Notification ${id} read status toggled`
  );
};

const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "System Update",
      message: "Your system update completed successfully.",
      type: "success",
      timestamp: "2 mins ago",
      read: true,
    },
    {
      id: 2,
      title: "Server Warning",
      message: "High memory usage detected on server.",
      type: "warning",
      timestamp: "10 mins ago",
      read: false,
    },
    {
      id: 3,
      title: "Login Alert",
      message: "New login detected from another device.",
      type: "info",
      timestamp: "30 mins ago",
      read: false,
    },
]);
const [filter, setFilter] = useState<
  "all" | "read" | "unread"
>("all");

const [title, setTitle] = useState("");
const [message, setMessage] = useState("");

const filteredNotifications = notifications.filter(
  (notification) => {
    if (filter === "read") {
      return notification.read;
    }

    if (filter === "unread") {
      return !notification.read;
    }

    return true;
  }
);

const markAllAsRead = () => {
  setNotifications((prev) =>
    prev.map((notification) => ({
      ...notification,
      read: true,
    }))
  );

  Log(
    "frontend",
    "info",
    "state",
    "All notifications marked as read"
  );
};
const addNotification = () => {
  if (!title || !message) {
    Log(
      "frontend",
      "warn",
      "component",
      "Attempted to add empty notification"
    );

    return;
  }

  const newNotification: Notification = {
    id: Date.now(),
    title,
    message,
    type: "info",
    timestamp: "Just now",
    read: false,
  };

  setNotifications((prev) => [
    newNotification,
    ...prev,
  ]);

  Log(
    "frontend",
    "info",
    "component",
    `Notification added: ${title}`
  );

  setTitle("");
  setMessage("");
};


  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Notification System Dashboard
      </h1>
<div className="flex gap-4 mb-6">
  <button
    onClick={() => {
      setFilter("all");

      Log(
        "frontend",
        "info",
        "component",
        "Viewing all notifications"
      );
    }}
    className={`px-4 py-2 rounded-lg ${
      filter === "all"
        ? "bg-blue-600"
        : "bg-zinc-800"
    }`}
  >
    All
  </button>
  <button
  onClick={markAllAsRead}
  className="px-4 py-2 rounded-lg bg-purple-600"
>
  Mark All Read
</button>

  <button
    onClick={() => {
      setFilter("read");

      Log(
        "frontend",
        "info",
        "component",
        "Viewing read notifications"
      );
    }}
    className={`px-4 py-2 rounded-lg ${
      filter === "read"
        ? "bg-green-600"
        : "bg-zinc-800"
    }`}
  >
    Read
  </button>

  <button
    onClick={() => {
      setFilter("unread");

      Log(
        "frontend",
        "info",
        "component",
        "Viewing unread notifications"
      );
    }}
    className={`px-4 py-2 rounded-lg ${
      filter === "unread"
        ? "bg-red-600"
        : "bg-zinc-800"
    }`}
  >
    Unread
  </button>
</div>
      <div className="grid gap-6">
        {filteredNotifications.map((notification) => (
  <div
    key={notification.id}
    onClick={() => toggleReadStatus(notification.id)}
    className="cursor-pointer"
  >
    <NotificationCard notification={notification} />
  </div>
))}
      </div>
    </main>
  );
}