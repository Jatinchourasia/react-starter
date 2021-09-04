import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import close from "../assets/images/close.png";
import {
  createUser,
  getUserById,
} from "../services/api-services/user.api.service";
import { Form, Input, Button, Checkbox } from "antd";
import styles from "../styles/header.module.scss";
import { History } from "history";

interface IProps {
  history: History;
  match: {
    isExact: boolean;
    params: {
      id: string;
    };
    path: string;
    url: string;
  };
}

const UpdateUser: React.FC<IProps> = ({ match }) => {
  const history = useHistory();
  const exitCreateHandler = () => {
    history.push("/");
  };
  const [user, setUser] = useState({
    id: "",
    name: "",
    role: "",
    email: "",
    contact: "",
  });
  const { name, role, email, contact } = user;

  useEffect(() => {
    getUserById(match.params.id).then((data) => {
      if (data.error) {
        console.log(Error);
      } else {
        console.log(data);

        setUser({ ...user, name: data.name });
      }
    });
  }, []);

  const handleChange = (name: string, value: string | number) => {
    setUser({ ...user, [name]: value });
  };
  const onSubmit = () => {
    setUser({
      id: "",
      name: "",
      role: "",
      email: "",
      contact: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.exit} onClick={exitCreateHandler}>
          <img src={close} alt="cancle" />
        </div>
        <h2>Update User</h2>
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
              value="heyyyy"
            />
          </Form.Item>{" "}
          <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
              placeholder="Email"
              value={email}
            />
          </Form.Item>{" "}
          <Form.Item
            label="role"
            name="role"
            rules={[{ required: true, message: "Please input your role!" }]}
          >
            <Input
              onChange={(e) => {
                handleChange("role", e.target.value);
              }}
              placeholder="Role"
              value={role}
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
      </div>
    </div>
  );
};

export default UpdateUser;
