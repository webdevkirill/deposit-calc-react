import { React } from 'react';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import Wrapper from './components/Wrapper/Wrapper';
import { useFetch } from './hooks/useFetch';

function App() {
	const { deposits, isLoading } = useFetch('db.json');

	if (isLoading) {
		return <p>Загрузка...</p>;
	}

	return (
		<div className='App'>
			<Wrapper>
				<LeftSide deposits={deposits} />
				<RightSide />
			</Wrapper>
		</div>
	);
}

export default App;
