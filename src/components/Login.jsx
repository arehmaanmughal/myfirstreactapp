import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const { user, setUserid } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(user);
  return (
    <div>
      <div className="container">
        <h1>Users</h1>
        <div className="row gy-4">
          {user?.map((users, index) => (
            <div className="col " key={index}>
              <Card
                style={{ width: "16rem" }}
                onClick={() => {
                  setUserid(users?.id);
                  navigate("/Profile");
                }}
              >
                <Card.Body>
                  <Card.Title>{users?.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {users?.username}
                  </Card.Subtitle>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
