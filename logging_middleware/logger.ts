const BASE_URL = "/api/logs";

export const Log = async (
  stack: string,
  level: string,
  packageName: string,
  message: string
) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });

    const data = await response.json();

    console.log("Log created:", data);
  } catch (error) {
    console.error("Logging failed:", error);
  }
};