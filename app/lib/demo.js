// Shared demo data for the interactive request previews.
// Change BASE_URL or a response here and every preview updates.

export const BASE_URL = "https://usedragonfly.xyz/";

export const METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"];

// Hardcoded response per HTTP method. `path` is appended to BASE_URL.
export const RESPONSES = {
  GET: {
    path: "api/collections/42",
    status: "200 OK",
    time: "38 ms",
    body: `{
  "id": 42,
  "name": "Payments API",
  "requests": 18,
  "environment": "staging"
}`,
  },
  POST: {
    path: "api/collections",
    status: "201 Created",
    time: "54 ms",
    body: `{
  "id": 91,
  "name": "New collection",
  "requests": 0
}`,
  },
  PUT: {
    path: "api/collections/42",
    status: "200 OK",
    time: "44 ms",
    body: `{
  "id": 42,
  "name": "Payments API v2",
  "requests": 18
}`,
  },
  PATCH: {
    path: "api/collections/42",
    status: "200 OK",
    time: "31 ms",
    body: `{
  "id": 42,
  "environment": "production"
}`,
  },
  DELETE: {
    path: "api/collections/42",
    status: "204 No Content",
    time: "22 ms",
    body: "// 204 No Content — the collection was removed.",
  },
};

export function urlFor(method) {
  return BASE_URL + RESPONSES[method].path;
}
