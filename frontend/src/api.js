import axios from "axios";
let URL = "https://21wsp3pw.course.tamk.cloud/api";

export const postData = async () => {
  return await axios.post(URL);
};

export const getAllData = async () => {
  return await axios.get(URL);
};
