import {ChatRoomClient} from "./grpc/ChatsServiceClientPb";
import {ChatMessage, ChatRequest, GetChatsRequestDto} from "./grpc/chats_pb";
import {MessageDto} from "./grpc/chats_pb";

const chatRoomClient = new ChatRoomClient("");

interface ICallbacks {
    onData: (message: MessageDto.AsObject) => void,
    onEnd: () => void
}

export abstract class ChatsApi {
    static joinToChat(chatId: string, token: string, callbacks: ICallbacks) {
        const chatRequest = new ChatRequest();
        chatRequest.setChatid(chatId);
        const metadata = token ? {'Authorization': `Bearer ${token}`} : {};

        const clientReadableStream = chatRoomClient.joinChat(chatRequest, metadata as any);

        clientReadableStream.on("data", (message: MessageDto) => {
            console.log(message.toObject());
            callbacks.onData(message.toObject())
        });

        clientReadableStream.on("end", () => callbacks.onEnd());
        return clientReadableStream;
    }

    static async getChats(token: string) {
        const getChatsRequestDto = new GetChatsRequestDto();

        const metadata = token ? {'Authorization': `Bearer ${token}`} : {};

        const chats = await chatRoomClient.getChats(getChatsRequestDto, metadata as any)
            .then(x => x.toObject().chatsList);

        return chats;
    }

    static async send(token: string, chatId: string, textBody: string) {
        const chatMessage = new ChatMessage();
        chatMessage.setIdChat(chatId);
        chatMessage.setMessage(textBody);
        const metadata = token ? {'Authorization': `Bearer ${token}`} : {};

        await chatRoomClient.send(chatMessage, metadata as any)
            .then(x => x.toObject());

        return;
    }
}