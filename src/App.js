import { React } from 'react';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
	return (
		<div className='App'>
			<Wrapper>
				<LeftSide />
				<RightSide />
			</Wrapper>
		</div>
	);
}

export default App;
