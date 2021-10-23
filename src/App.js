import './App.css';
import Home from './pages/HomePage/Home';
import ProductPreviewPage from './pages/ProductPreviewPage/ProductPreviewPage';
import SearchPage from './pages/SearchPage/SearchPage';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

function App() {
	return (
		<>
			{/* <Home /> */}
			<SearchPage />
			{/* <ProductPreviewPage /> */}
		</>
	);
}

export default App;
