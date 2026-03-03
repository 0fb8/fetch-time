export const handler = async (event) => {
  const path = event.rawPath || event.requestContext?.http?.path;
  const method = event.requestContext?.http?.method;

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const currentTime = new Date().toISOString();

  if (path === "/api/time" && method === "GET") {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ time: currentTime }),
    };
  }

  return {
    statusCode: 404,
    headers,
    body: JSON.stringify({ message: "Not Found" }),
  };
};
