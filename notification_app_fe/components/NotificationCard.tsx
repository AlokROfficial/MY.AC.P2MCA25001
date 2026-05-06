import { Notification } from "../types/notification";

interface Props {
  notification: Notification;
}

export default function NotificationCard({
  notification,
}: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-lg w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          {notification.title}
        </h2>

        <span
          className={`text-xs px-2 py-1 rounded-full ${
            notification.type === "success"
              ? "bg-green-500"
              : notification.type === "warning"
              ? "bg-yellow-500"
              : notification.type === "error"
              ? "bg-red-500"
              : "bg-blue-500"
          }`}
        >
          {notification.type}
        </span>
      </div>

      <p className="text-zinc-300 mt-3">
        {notification.message}
      </p>

      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-zinc-500">
          {notification.timestamp}
        </span>

        <span
          className={`text-sm ${
            notification.read
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {notification.read ? "Read" : "Unread"}
        </span>
      </div>
    </div>
  );
}