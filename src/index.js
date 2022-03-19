import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './container/home/home.jsx';

ReactDOM.render(
	<BrowserRouter>
		<Home />
	</BrowserRouter>,
	document.getElementById('root')
);
