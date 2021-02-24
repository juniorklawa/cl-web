import React, {useEffect, useState} from 'react';
import {SocketContext} from '../../context/socket';
import {Editor} from '@tinymce/tinymce-react';
import _ from 'lodash';

const CustomEditor = ({response, setResponse}) => {
	const socket = React.useContext(SocketContext);

	const [, setSearchQuery] = useState('');

	const handleEditorChange = (content) => socket.emit('content', content);

	useEffect(() => {
		const send = _.debounce(handleEditorChange, 1500);

		setSearchQuery((prevSearch) => {
			if (prevSearch.cancel) prevSearch.cancel();
			return send;
		});

		send(response);
	}, [response]);

	return (
		<Editor
			init={{
				height: 500,
				menubar: true,
				plugins: [
					'advlist autolink lists link image charmap print preview anchor',
					'searchreplace visualblocks code fullscreen',
					'insertdatetime media table paste code help wordcount',
				],
				toolbar:
					'undo redo | formatselect | bold italic underline | forecolor backcolor |' +
					'alignleft aligncenter alignright alignjustify |' +
					'bullist numlist outdent indent | removeformat | help',
			}}
			value={response}
			onEditorChange={(content) => setResponse(content)}
		/>
	);
};

export default CustomEditor;
