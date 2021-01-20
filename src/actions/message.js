import * as URLS from '../const/url';

export const callChatApi = async (message) => {
    try {
        const resp = await fetch(`http://localhost:5000${URLS.CHATBOT_API}`, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                query: message,
            }),
        });
        return resp.json();
    } catch (err) {
        console.error(err);
    }
};
