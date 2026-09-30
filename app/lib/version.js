
const EXTENSION_ID = "saurabhwankhade.dragonfly";
const QUERY_URL =
  "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery";

export async function getExtensionVersion() {
  try {
    const res = await fetch(QUERY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json;api-version=7.1-preview.1",
      },
      body: JSON.stringify({
        filters: [{ criteria: [{ filterType: 7, value: EXTENSION_ID }] }],
        flags: 1,
      }),
      cache: "force-cache",
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.results?.[0]?.extensions?.[0]?.versions?.[0]?.version ?? null;
  } catch {
    return null;
  }
}
