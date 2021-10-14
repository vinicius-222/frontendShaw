import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { PageContainer } from './components/MainComponents';
import Route from './Route';
import Header from './components/partials/Header';

function App() {
  	return (
    	<BrowserRouter>
			<PageContainer>
				<Header/>
				<Route/>
			</PageContainer>
    	</BrowserRouter>
  	);
}

export default App;
