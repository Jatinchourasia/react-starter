import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import close from "../assets/images/close.png";
import { createUser } from "../services/api-services/user.api.service";
import { Form, Input, Button, Checkbox } from "antd";
import styles from "../styles/header.module.scss";
import { v4 as uuidv4 } from "uuid";
const AddUser = () => {
  const history = useHistory();
  const performRedirect = () => {
    if (success) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  };
  const exitCreateHandler = () => {
    history.push("/");
  };
  const [user, setUser] = useState({
    id: "",
    name: "",
    profile: "",
    location: "",
    contact: "",
  });
  const [success, setSuccess] = useState(false);

  const { name, profile, location, contact } = user;

  const handleChange = (name: string, value: string | number) => {
    setUser({ ...user, [name]: value });
  };
  const onSubmit = () => {
    handleChange("id", uuidv4());
    console.log(user);

    createUser(user).then((data) => {
      if (data.error) {
        setSuccess(false);
      } else {
        setSuccess(true);
        console.log(data);
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.exit} onClick={exitCreateHandler}>
          <img src={close} alt="cancle" />
        </div>
        <h2>Create User</h2>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              onChange={(e) => {
                handleChange("name", e.target.value);
              }}
              placeholder="Name"
              value={name}
            />
          </Form.Item>{" "}
          <Form.Item
            label="profile"
            name="lprofile"
            rules={[{ required: true, message: "Please input your profile!" }]}
          >
            <Input
              onChange={(e) => {
                handleChange("profile", e.target.value);
              }}
              placeholder="Profile"
              value={profile}
            />
          </Form.Item>{" "}
          <Form.Item
            label="location"
            name="location"
            rules={[{ required: true, message: "Please input your location!" }]}
          >
            <Input
              onChange={(e) => {
                handleChange("location", e.target.value);
              }}
              placeholder="Location"
              value={location}
            />
          </Form.Item>{" "}
          <Form.Item
            label="contact"
            name="contact"
            rules={[{ required: true, message: "Please input your contact!" }]}
          >
            <Input
              onChange={(e) => {
                handleChange("contact", e.target.value);
              }}
              placeholder="Contact"
              value={contact}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={onSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
        {performRedirect()}
      </div>
    </div>
  );
};

export default AddUser;
