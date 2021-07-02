import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Home.css";

const Home = () => (
	<Card className="text-center">
		<Card.Body>
			<Card.Title>
				What is a ToDo List?
			</Card.Title>
			<Card.Text>
				What is a ToDo List? The definition is a simple one. It’s a list of
				tasks you need to complete, or things that you want to do. Most
				typically, they’re organised in order of priority. Traditionally,
				they’re written on a piece of paper or post it notes and acts as a
				memory aid. As technology has evolved we have been able to create a todo
				lists with excel spreadsheets, word documents, email lists, todo list
				apps, microsoft to do and google to do list to name a few. You can use a
				to do list in your home and personal life, or in the workplace. Having a
				list of everything you need to do written down in one place means you
				shouldn’t forget anything important. By prioritising the tasks in the
				list you plan the order in which you’re going to do them and can quickly
				see what needs your immediate attention and what tasks you can leave
				until a little later.
			</Card.Text>
			<Button variant="primary" href='/todo'>Go</Button>
		</Card.Body>
		<Card.Footer className="text-muted">
			Copyright © 2021 ToDo List Free, All rights reserved.
		</Card.Footer>
	</Card>
);

export default Home;
