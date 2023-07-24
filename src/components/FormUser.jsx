import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./styles/formUser.css";

const FormUser = ({
  postNewUser,
  updateInfo,
  updateUserById,
  setUpdateInfo,
  clouseForm,
  handleOpenForm,
}) => {
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const sumit = (data) => {
    if (updateInfo) {
      // ACTUALIZAR
      updateUserById("/users", updateInfo.id, data);
      setUpdateInfo();
    } else {
      // CREAR
      postNewUser("/users", data);
    }
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
  };

  const handleClear = () => {
    reset();
  };

  return (
    <div className={`formuser-container ${clouseForm && "close-form"}`}>
      <form className="formuser" onSubmit={handleSubmit(sumit)}>
        <h2 className="formuser_title">
          {updateInfo ? "Actualizar" : "Nuevo usuario"}
        </h2>
        <div onClick={handleOpenForm} className="formuser_x">
          x
        </div>
        <div className="formuser_div">
          <label className="formuser_label" htmlFor="first_name">
            Nombre
          </label>
          <input
            required
            className="formuser_input"
            {...register("first_name")}
            type="text"
            id="first_name"
          />
        </div>
        <div className="formuser_div">
          <label className="formuser_label" htmlFor="last_name">
            Apellidos
          </label>
          <input
            required
            className="formuser_input"
            {...register("last_name")}
            type="text"
            id="last_name"
          />
        </div>
        <div className="formuser_div">
          <label className="formuser_label" htmlFor="email">
            Correo
          </label>
          <input
            required
            className="formuser_input"
            {...register("email")}
            type="email"
            id="email"
          />
        </div>
        <div className="formuser_div">
          <label className="formuser_label" htmlFor="password">
            Contraseña
          </label>
          <input
            required
            className="formuser_input"
            {...register("password")}
            type="password"
            id="password"
          />
        </div>
        <div className="formuser_div">
          <label className="formuser_label" htmlFor="birthday">
            Cumpleaños
          </label>
          <input
            required
            className="formuser_input"
            {...register("birthday")}
            type="date"
            id="birthday"
          />
        </div>

        <button className="formuser_button">
          {updateInfo ? "Actualizar" : "Crear nuevo usuario"}
        </button>
        <button onClick={handleClear} className="formuser_button  clear">
          Borrar
        </button>
      </form>
    </div>
  );
};

export default FormUser;
