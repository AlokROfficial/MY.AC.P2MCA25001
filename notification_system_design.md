# Notification System Design

## Frontend Stack
- Next.js
- TypeScript
- Tailwind CSS

## Features
- Notification dashboard
- Read/unread toggle
- Notification filtering
- Mark all notifications as read
- Reusable notification cards
- Logging middleware integration

## Logging Middleware
A reusable logging middleware was created using fetch API.

Logs are sent securely using:
- Bearer token authentication
- External evaluation logging API

## Architecture
- Reusable React components
- State management using React hooks
- Modular folder structure
- Centralized logging utility

## Logging Events
- Dashboard loaded
- Notification toggled
- Filter changed
- Mark all notifications as read

## Folder Structure

MY.AC.P2MCA25001/
│
├── logging_middleware/
│   └── logger.ts
│
├── notification_app_fe/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── types/
│   └── package.json
│
└── notification_system_design.md
