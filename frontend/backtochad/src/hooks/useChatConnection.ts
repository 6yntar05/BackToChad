import {useAuth} from "../contexts/authContext";
import {useEffect, useState} from "react";
import {MessageDto} from "../api/grpc/chats_pb";
import {ChatsApi} from "../api/chats";


const useChatConnection = (chatId: string) => {
    const authContext = useAuth();
    const [messages, setMessages] = useState([] as MessageDto.AsObject[])

    useEffect(() => {
        const stream = ChatsApi.joinToChat(chatId, authContext.token!, {
            onData: (message) => setMessages(mess => [...mess, message]),
            onEnd: () => {},
        })

        return () => {
            try {
                stream.cancel()
            }
            catch (e) {

            }
        }
    }, [chatId])

    return messages;
}