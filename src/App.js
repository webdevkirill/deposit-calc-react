import { React } from 'react';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import Wrapper from './components/Wrapper/Wrapper';
import { Provider } from 'react-redux';
import { store } from './store/index';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Wrapper>
					<LeftSide />
					<RightSide />
				</Wrapper>
			</div>
		</Provider>
	);
}

export default App;
