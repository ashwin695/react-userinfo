import React, { Fragment, useState } from "react";
import './App.css'
import AddUser from "./components/Users/AddUser";
import UserDataList from "./components/Users/UserDataList";

function App() {
  const [userData, setUserData] = useState([]);

  const handleAddUser = (uName, uAge, uCollege) => { // Update the function to accept college name
    setUserData((prevUsersData) => {
      return [
        ...prevUsersData,
        { name: uName, age: uAge, college: uCollege, id: Math.random().toString() }, // Include college name
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={handleAddUser} />
      <UserDataList users={userData} />
    </Fragment>
  );
}

export default App;
