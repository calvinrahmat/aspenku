import './App.css';
import SearchPage from './pages/SearchPage/SearchPage';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { Home, ProductPreviewPage } from './pages';

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route
						exact
						path="/product-detail/:name"
						render={() => <ProductPreviewPage />}
					/>
				</Switch>
			</Router>
		</>
	);
}

export default App;
