import React from "react";

import Card from "react-bootstrap/Card";

import './About.css';

const About = () => (
	<Card className="text-center">
		<Card.Header>About</Card.Header>
		<Card.Body>
			<Card.Title>Created by Lázaro Estrada</Card.Title>
		</Card.Body>
		<Card.Footer className="text-muted">Copyright © 2021 ToDo List Free, All rights reserved.</Card.Footer>
	</Card>
);

export default About;
