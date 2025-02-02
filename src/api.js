import axios from "axios";

export const fetchQuizData = async () => {
  try {
    const response = await fetch("../data.json"); // Fetching the local data.json file from public folder
    const data = await response.json();  // Parsing the JSON response
    console.log("Fetched Quiz Data:", data);
    return data;  // Returning the parsed data
  } catch (error) {
    console.error("Error fetching quiz data, Navya:", error);
    return [];
  }
};


