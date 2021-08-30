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
    <div className="font-spacemono bg-white-back dark:bg-dark-back w-full h-full min-h-screen flex justify-center transform duration-200">
      <div className=" w-11/12 md:w-4/5 lg:w-3/5  h-auto">
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
