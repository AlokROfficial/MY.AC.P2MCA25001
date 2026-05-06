import { NextResponse } from "next/server";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJteS5hYy5wMm1jYTI1MDAxQG15LnN0dWRlbnRzLmFtcml0YS5lZHUiLCJleHAiOjE3NzgwNTk4NjQsImlhdCI6MTc3ODA1ODk2NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjUzNTlmZDk0LTU4ZjQtNDZhMS05NzAxLWNiZmM0OGUyZDU5OCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFsb2sgciIsInN1YiI6IjE1NmQ4YTZiLWYzZDUtNDA1Yy05ZWViLWIyMDc4MDQ5Njk4ZSJ9LCJlbWFpbCI6Im15LmFjLnAybWNhMjUwMDFAbXkuc3R1ZGVudHMuYW1yaXRhLmVkdSIsIm5hbWUiOiJhbG9rIHIiLCJyb2xsTm8iOiJteS5hYy5wMm1jYTI1MDAxIiwiYWNjZXNzQ29kZSI6IlBUQk1tUSIsImNsaWVudElEIjoiMTU2ZDhhNmItZjNkNS00MDVjLTllZWItYjIwNzgwNDk2OThlIiwiY2xpZW50U2VjcmV0IjoieFZwREVGQWFYWUVuQ3NudCJ9.Lnwwhwse8cz6_Nc8rZ_qG6FnKSpOQJ66S28NvhX3S2M";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(
      "http://20.207.122.201/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Logging failed",
      },
      { status: 500 }
    );
  }
}