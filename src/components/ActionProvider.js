import { callChatApi } from '../actions/message';

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    handleMessageParser() {
        const messages = this.createChatBotMessage(
            "The message parser controls how the bot reads input and decides which action to invoke.",
            { widget: "messageParser", withAvatar: true }
        );

        this.addMessageToBotState(messages);
    };

    handleDefault(message) {
        callChatApi(message)
        .then(resp => {
            console.log(resp);
            const reply = this.createChatBotMessage(resp.message, {
                withAvatar: true,
            });
            this.addMessageToBotState(reply);
            const nextQuestion = this.createChatBotMessage('How else can I help?', {
                withAvatar: true,
                delay: 1000,
            });
            this.addMessageToBotState(nextQuestion);
        });
    };

    addMessageToBotState(messages) {
        if (Array.isArray(messages)) {
            this.setState((state) => ({
                ...state,
                messages: [...state.messages, ...messages],
            }));
        } else {
            this.setState((state) => ({
                ...state,
                messages: [...state.messages, messages],
            }));
        }
    };
}

export default ActionProvider;
