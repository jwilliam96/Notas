import React from "react";
import "./styles/userClear.css";

const UserClear = ({ userClear, setUserClear, deleteUserById, clearId }) => {
  const handleDelete = () => {
    deleteUserById("/users", clearId.id);
    setUserClear(true);
  };

  const handleClear = () => {
    setUserClear(true);
  };

  return (
    <div className={`container-userclear ${userClear && "open_clearuser"}`}>
      <div className="userclear-container">
        <div className="userclear-x" onClick={handleClear}>
          x
        </div>
        <h2>Eliminar usuario</h2>
        <p className="userclear_p">
          Deseas eliminar el usuario{" "}
          <span className="userclear_name">
            {`${clearId?.name} ${clearId?.first}`}
          </span>{" "}
          ?
        </p>
        <button className="userclear_button" onClick={handleDelete}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default UserClear;
