import React from "react";

import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: props.currentUser,
  });

  //setValue
  setValue("name", props.currentUser.name);
  setValue("username", props.currentUser.username);

  const onSubmit = (data, e) => {
    //limpiar campos
    e.target.reset();

    data.id = props.currentUser.id;

    //Actulizar datos
    props.updateUser(props.currentUser.id, data);

   
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Ingrese nombre"
        {...register("name", {
          required: true,
          maxLength: 30,
        })}
      />
      <div>{errors.name?.type === "required" && "Campo requerido"}</div>

      <label>Username</label>
      <input
        type="text"
        name="username"
        placeholder="Ingrese username"
        {...register("username", {
          required: true,
          maxLength: 30,
        })}
      />
      <div>
        {errors.username?.type === "required" && "Campo requerido"}
      </div>
      <button
      className="btn btn-secondary"
      >Edit user</button>
    </form>
  );
};

export default EditUserForm;
