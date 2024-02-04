import { ApiUrl } from "../common";

export async function updateUserDetails(id, data) {
  const response = await fetch(`${ApiUrl}${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  return responseData;
}
