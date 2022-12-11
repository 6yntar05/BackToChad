import {useAuth} from "../contexts/authContext";
import {useEffect, useState} from "react";
import {MessageDto} from "../api/grpc/chats_pb";
import {ChatsApi} from "../api/chats";


const useChatConnection = (chatId: string | null) => {
    const authContext = useAuth();
    const [messages, setMessages] = useState([] as MessageDto.AsObject[])

    useEffect(() => {
        if(!chatId)
            return;

        const stream = ChatsApi.joinToChat(chatId, authContext.token!, {
            onData: (message) => setMessages(mess => [...mess, message]),
            onEnd: () => {},
        });

        return () => {
            try {
                setMessages([]);
                stream.cancel()
            }
            catch (e) {

            }
        }
    }, [chatId])

    return messages;
}

export default useChatConnection;