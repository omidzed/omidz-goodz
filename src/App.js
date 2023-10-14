import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

//this my experiment to switch this project to tailwind from scss, the original vesion is still in the same form on main branch
const Shop = () => {
	return <h1>I am the shop page</h1>;
};

const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Navigation />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path='/Home'
					element={<Home />}
				/>
				<Route
					path='/shop'
					element={<Shop />}
				/>
				<Route
					path='/sign-In'
					element={<SignIn />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
