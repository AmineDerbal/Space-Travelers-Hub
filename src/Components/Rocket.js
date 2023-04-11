import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './styles/Rocket.css';

const Rocket = ({ rocket }) => (
  <div className="rocket-card">
    <img className="rocket-img" src={rocket.image} alt="rocket" />
    <div className="rocket-informations">
      <h3 className="rocket-name">{rocket.name}</h3>
      <p className="rocket-description">{rocket.description}</p>
      <Button className="reserve-rocket" variant="primary">
        Reserve Rocket
      </Button>
    </div>
  </div>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Rocket;
