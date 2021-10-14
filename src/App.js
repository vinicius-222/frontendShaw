import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { PageContainer } from './components/MainComponents';
import Home from './pages/home';

function App() {
  	return (
    	<BrowserRouter>
			<PageContainer>
				<Home/>
			</PageContainer>
    	</BrowserRouter>
  	);
}

export default App;
