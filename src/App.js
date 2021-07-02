import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/header/Header';

import Home from './pages/home/Home';
import Todo from './pages/todo/Todo';
import About from './pages/about/About';


const App = () => {
	return (
		<Container>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/todo" component={Todo} />
					<Route path="/about" component={About} />
				</Switch>
			</Router>
		</Container>
	);
};

export default App;
