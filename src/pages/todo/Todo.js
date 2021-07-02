import React from 'react';

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Task from '../../components/task/Task';

import './Todo.css';

const Todo = () => (
	<Card className="text-center">
		<Card.Header>ToDo</Card.Header>
			<Card.Body>
				<Container>
					<Row>
						<Col>
							<Task />
						</Col>
						<Col>
						</Col>
					</Row>
				</Container>
			</Card.Body>
		<Card.Footer className="text-muted">Copyright © 2021 ToDo List Free, All rights reserved.</Card.Footer>
	</Card>
);

export default Todo;
