import { h } from 'preact';
import { useState } from 'preact/hooks';
import Chatbot from 'react-chatbot-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import config from '../config/chatbotConfig';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import style from './style.css';

const Bot = () => {
	const [chat, showChat] = useState(true);
	const loadMessages = () => {
		return JSON.parse(localStorage.getItem('chat_messages'));
	}
	const saveMessages = (messages) => {
		localStorage.setItem('chat_messages', JSON.stringify(messages));
	};

	return (
		<>
			<div class={style.chatContainer}>
				{chat && (
					<Chatbot
						config={config}
						messageParser={MessageParser}
						actionProvider={ActionProvider}
						messageHistory={loadMessages}
						saveMessages={saveMessages}
					/>
				)}
			</div>
			<div class={style.iconContainer}>
				<button onClick={() => showChat(!chat)} class={style.buttonContainer}>
					<FontAwesomeIcon icon={faRobot} />
				</button>
			</div>
		</>
	);
};

export default Bot;
