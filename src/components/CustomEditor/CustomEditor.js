import React, {useCallback} from 'react';
import {SocketContext} from '../../context/socket';
import {Editor} from '@tinymce/tinymce-react';

const CustomEditor = ({response}) => {
	const socket = React.useContext(SocketContext);

	const handleEditorChange = useCallback(
		(content) => {
			socket.emit('content', content);
		},
		[socket]
	);

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
			onEditorChange={handleEditorChange}
		/>
	);
};

export default CustomEditor;
