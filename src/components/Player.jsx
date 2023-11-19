import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "10px ",
        
      }}
      className="shadow-lg p-3 mb-5 bg-body-tertiary rounded"
    >
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title className="fw-bold">{name}</Card.Title>
        <Card.Text>
          <p>
            <strong>Team:</strong> {team} <br />
          </p>
          <p>
            <strong>Nationality:</strong> {nationality} <br />
          </p>
          <p>
            <strong>Jersey Number:</strong> {jerseyNumber} <br />
          </p>
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};



export default Player;
