import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setMessageError("No Results");
        } else {
          setUserInfo(data);
          setMessageError("");
        }
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { userInfo, isLoading, messageError };
};

export default useFetch;

