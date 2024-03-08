import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";


const Login = () => {
  // const [username, setusername] = useState(null);
  // const [password, setPassword] = useState(null);
  const { user, setUserid } = useContext(UserContext);
  const navigate = useNavigate()
  
  console.log(user);
  return (
    <div>
      <h1>Users</h1>
      <div className="container">
        <div className="row">
          {user?.map((users, index) => (
            <div className="col" key={index}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{users?.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{users?.username}</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button onClick={()=> {
                    setUserid(users?.id);
                    navigate("/Profile")
                  }} variant="primary">View Profile</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {/* <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={hanndleSubmit}>Submit</button> */}
    </div>
  );
};

export default Login;
