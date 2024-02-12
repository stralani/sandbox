import { ApiUrl } from "../common";
import axios from "axios";

// export async function updateUserDetails(id, data) {
//   const response = await fetch(`${ApiUrl}${id}`, {
//     method: "PUT",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   if (response.ok) {
//     const responseData = await response.json();
//     return responseData;
//   } else throw new Error("api failed");
// }

export async function updateUserDetails(id, data) {
  // Define an async function to make the PUT request

  // Define the URL endpoint you want to send the PUT request to
  const url = `${ApiUrl}${id}`;

  // Define the data you want to update
  const newData = {
    body: JSON.stringify(data),
  };

  // Make a PUT request to the specified URL using await
  const response = await axios.put(url, newData);

  return response.data;
}
