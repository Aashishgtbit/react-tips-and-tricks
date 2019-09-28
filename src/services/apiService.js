import fetch from "node-fetch";

const postRequestApi = async (url, requestBody) => {
  try {
    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify(requestBody),
      headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

const getRequestApi = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export { getRequestApi, postRequestApi };
