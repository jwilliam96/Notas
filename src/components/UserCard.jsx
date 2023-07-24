import React from "react";
import "./styles/userCard.css";

const UserCard = ({
  user,
  setUpdateInfo,
  handleOpenForm,
  setUserClear,
  setClearId,
}) => {
  const handleUpdate = () => {
    setUpdateInfo(user);
  };
  const handleClear = () => {
    setUserClear(false);
    setClearId([user.id, user.first_name, user.last_name]);
  };

  return (
    <article className="usercard-content">
      <h2 className="usercard_name">
        {" "}
        {`${user.first_name} ${user.last_name}`}
      </h2>

      <hr className="usercard_hr" />

      <ul className="usercard_list_ul">
        <li className="usercard_list_li">
          <span className="usercard_list_title">CORREO</span>
          <span className="usercard_list_icon">
            <i className="bx bx-envelope card-icon"></i> {user.email}
          </span>
        </li>

        <li className="usercard_list_li">
          <span className="usercard_list_title">CUMPLEAÑOS</span>
          <span className="usercard_list_icon">
            <i className="bx bx-gift card-icon"></i> {user.birthday}
          </span>
        </li>
      </ul>

      <hr className="usercard_hr" />

      <div className="usercard_content_btn">
        <button onClick={handleClear} className="usercard_button clear-btn">
          <i className="bx bx-trash"></i>
        </button>
        <button onClick={handleUpdate} className="usercard_button updata-btn">
          <i onClick={handleOpenForm} className="bx bx-edit"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
