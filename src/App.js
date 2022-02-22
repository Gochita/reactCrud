import React, { useState } from "react";
import UserTable from "./components/UserTable";
import { v4 as uuidv4 } from "uuid";
import AddUserForm from "./components/AddUserForm";

function App() {
  const usersData = [
    { id: uuidv4(), name: "Gochi", username: "tamagochita" },
    { id: uuidv4(), name: "Jacob", username: "blackwolf" },
    { id: uuidv4(), name: "Rose", username: "rosequartz" },
  ];

  //state

  const [users, setUsers] = useState(usersData);

  //Agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  //Eliminar usuarios
  const deleteUser = (id) => {
   setUsers(users.filter(user => user.id !== id))
  };

  return (
    <div className="container">
      <h1>CRUD APP with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
