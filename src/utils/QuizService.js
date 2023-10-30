import { getStartTime, saveStartTime } from "./LocalStorageManagement";

// gọi API
const API_URL = "https://server.nglearns.com/quizz/";

export const getQuiz = async (quizId) => {
  const response = await fetch(`${API_URL}${quizId}`);

  // check if the response is ok (disconnect from network, server is down, etc. )
  if (response.status === 200) {
    const data = await response.json();

    // Check if the response contains data
    if (Object.keys(data).length === 0) {
      console.log("Response does not contain data.");
      return null; // No data found
    }

    // console.log("Data:", data);
    return data;
  } else {
    console.log("Server returned an error:", response.statusText);
    return null;
  }
};
