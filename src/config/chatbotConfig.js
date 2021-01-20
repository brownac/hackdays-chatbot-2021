import { h } from 'preact';
import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
    botName: 'Sailthru Support Bot',
    initialMessages: [createChatBotMessage('Hi there! How can I help?')],
    widgets: [
    ],
};

export default config;
