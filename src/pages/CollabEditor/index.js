import React, {useEffect, useState} from 'react';
import 'draft-js/dist/Draft.css';
import {SocketContext, socket} from './context/socket';

// Components
import CustomEditor from './components/CustomEditor/CustomEditor';

const CollabEditor = () => {
	const [response, setResponse] = useState('');

	useEffect(() => {
		socket.on('newUser', (data) => {
			setResponse(data);
		});

		socket.on('content', (data) => {
			setResponse(data);
			console.log('exec');
		});
	}, []);

	return (
		<SocketContext.Provider value={socket}>
			<CustomEditor response={response} setResponse={setResponse} />
		</SocketContext.Provider>
	);
};

export default CollabEditor;
