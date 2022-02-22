import React, { useState } from "react";
import UserTable from "./components/UserTable";
import { v4 as uuidv4 } from "uuid";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

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
    setUsers(users.filter((user) => user.id !== id));
  };

  //editar usuarios
  const [editUser, setEditUser] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: "",
  });

  const editRow = (user) => {
    setEditUser(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  // actualizar
  const updateUser = (id, updateUser) => {
    setEditUser(false);

    setUsers(
      users.map((user) => {
        return user.id === id ? updateUser : user;
      })
    );
  };

  return (
    <div className="container">
      <h1>CRUD APP with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editUser ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm 
              currentUser={currentUser} 
              updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
