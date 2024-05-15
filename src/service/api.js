import axios from "axios";

export const Api_Url ="https://653cab1bd5d6790f5ec82824.mockapi.io/patientRegistration/"


export const fetchData = async () => {
  const res = await axios({
    method: "GET",
    url: Api_Url,
  });
  return res;
}

export const postData = async (data) => {
  const res = await axios({
    method: "POST",
    url: Api_Url,
    data:data
  });
  return res;
}

export const deletedata=async(id)=>{
  const res= await axios({
      method:"DELETE",
      url:Api_Url + id,
      data : id
  })
  return res;
}


export const getApidata = async (id) => {
  const res = await axios({
    method: "GET",
    url: Api_Url + id,
  
  });
  return res;
  
}

export const putdata = async (data,id) => {
  const res = await axios({
    method: "PUT",
    url: Api_Url + id,
    data:data
  });
  return res;
}

  