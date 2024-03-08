import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { Card } from "react-bootstrap";

const Profile = () => {
  const { userid } = useContext(UserContext);
  const [user, setUser] = useState([]);
  console.log(userid, "userid");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
      .then((result) => result.json())
      .then((resp) => setUser(resp));
  }, []);

  if (!user) return <div>User Not found</div>;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {user.username}
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
