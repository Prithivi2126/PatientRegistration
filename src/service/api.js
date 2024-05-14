import axios from "axios";

export const Api_url ="https://653cab1bd5d6790f5ec82824.mockapi.io/patientRegistration/"

export const postData = async (data) => {
    const res = await axios({
      method: "POST",
      url: Api_url,
      data:data
    });
    return res;
  }
  