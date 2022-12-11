import {ChatRoomClient} from "./grpc/ChatsServiceClientPb";
import {ChatRequest} from "./grpc/chats_pb";
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

        clientReadableStream.on("data", (message: MessageDto) => callbacks.onData(message.toObject()));
        clientReadableStream.on("end", () => callbacks.onEnd());
        return clientReadableStream;
    }
}