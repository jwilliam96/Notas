import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import UserCard from "./components/UserCard";
import FormUser from "./components/FormUser";
import UserClear from "./components/UserClear";

function App() {
  const [updateInfo, setUpdateInfo] = useState();
  const [clouseForm, setClouseForm] = useState(true);
  const [userClear, setUserClear] = useState(true);
  const [clearId, setClearId] = useState({});

  const baseUrl = "https://users-crud.academlo.tech";
  const [users, getAllUsers, postNewUser, deleteUserById, updateUserById] =
    useFetch(baseUrl, setClouseForm);

  useEffect(() => {
    getAllUsers("/users");
  }, []);

  const handleOpenForm = () => {
    setClouseForm(!clouseForm);
  };

  return (
    <div className="container">
      <div className="content">
        <button onClick={handleOpenForm} className=" button_open">
          + Crear nuevo usuario
        </button>
        <h1 className="container-title">Usuarios</h1>
        <FormUser
          postNewUser={postNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          clouseForm={clouseForm}
          handleOpenForm={handleOpenForm}
        />
        <div className="container_usercard">
          {users?.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              handleOpenForm={handleOpenForm}
              setUserClear={setUserClear}
              setClearId={setClearId}
            />
          ))}
        </div>
      </div>
      <UserClear
        userClear={userClear}
        setUserClear={setUserClear}
        deleteUserById={deleteUserById}
        users={users}
        clearId={clearId}
      />
    </div>
  );
}

export default App;
