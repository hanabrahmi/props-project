import React from "react";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    const cardStyle = {
        width: "18rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer",
        overflow: "hidden"
      };
    
      const imageStyle = {
        height: "200px",
        
      };
    
      const titleStyle = {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "0.5rem"
      };
    
      const textStyle = {
        fontSize: "1rem",
        color: "#666"
      };
    
     
    
    return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} style={imageStyle }/>
      <Card.Body>
        <Card.Title style={titleStyle}>{name}</Card.Title>
        <Card.Text  style={textStyle}>
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
