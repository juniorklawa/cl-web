import React, {useEffect, useState} from 'react';
import 'draft-js/dist/Draft.css';
import {SocketContext, socket} from './context/socket';

// Components
import CustomEditor from './components/CustomEditor/CustomEditor';

const App = () => {
	const [response, setResponse] = useState('');

	useEffect(() => {
		socket.on('newUser', (data) => {
			setResponse(data);
		});

		socket.on('content', (data) => {
			console.log('exec');
			setResponse(data);
			socket.off('content');
		});
	}, []);

	return (
		<SocketContext.Provider value={socket}>
			<CustomEditor response={response} />
		</SocketContext.Provider>
	);
};

export default App;
