import React from "react";

import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    
    //limpiar campos
    e.target.reset();

    // agregar usuario
    props.addUser(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Escriba su nombre"
        {...register("name", {
          required: true,
          maxLength: 30,
        })}
      />
      <div>{errors.name?.type === "required" && "Este campo es obligatorio"}</div>

      <label>Username</label>
      <input
        type="text"
        name="username"
        placeholder="Escriba su username"
        {...register("username", {
          required: true,
          maxLength: 30,
        })}
      />
      <div>
        {errors.username?.type === "required" && "Este campo es obligatorio"}
      </div>
      <button
      class="btn btn-success"
      >Add new user</button>
    </form>
  );
};

export default AddUserForm;
