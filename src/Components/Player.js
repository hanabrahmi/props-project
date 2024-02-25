import React from "react";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  
    return (
    <Card style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
      <Card.Img variant="top" src={imageUrl} style={{height: "200px"}}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}<br />
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Player Name",
  team: "Team",
  nationality: "Nationality",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://example.com/default.jpg"
};

export default Player;
