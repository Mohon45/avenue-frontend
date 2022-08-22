import axios from "axios";
import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UserFrom = ({ handleClose }) => {
  const { register, handleSubmit } = useForm();

  const onSubmitHandler = (data) => {
    axios
      .post("https://lit-savannah-40479.herokuapp.com/api/add-user", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        toast.success("User SuccessFully Added!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            {...register("name")}
            placeholder="enter your name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            {...register("email")}
            placeholder="enter your email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            {...register("phoneNumber")}
            placeholder="enter Phone number"
            required
          />
        </Form.Group>
        <Button onClick={handleClose} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserFrom;
