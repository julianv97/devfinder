import React, { useState } from "react";
import useFetch from "./customHooks/useFetch";

import Header from "./components/Header";
import FormSearch from "./components/FormSearch";
import GitUser from "./components/GitUser";

function App() {
  const [user, setUser] = useState("julianv97");
  let url = `https://api.github.com/users/${user}`;
  const { userInfo, isLoading, messageError } = useFetch(url);

  const handleSearchUser = (e) => {
    setUser(e);
  };

  return (
    <div className="font-spacemono bg-white-back w-full h-full min-h-screen flex justify-center">
      <div className=" w-11/12 h-auto">
        <Header />
        <FormSearch
          handleSearchUser={handleSearchUser}
          messageError={messageError}
        />
        {!isLoading && <GitUser userInfo={userInfo} />}
      </div>
    </div>
  );
}

export default App;
