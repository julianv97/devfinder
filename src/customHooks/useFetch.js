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
          console.log(data);
          setMessageError("No Results");
        } else {
          setUserInfo(data);
          setMessageError("");
          console.log("all good");
        }
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { userInfo, isLoading, messageError };
};

export default useFetch;

/* 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 */
