import {ChatRoomClient} from "./grpc/GreetServiceClientPb";
import {ChatRequest} from "./grpc/greet_pb";

const chatRoomClient = new ChatRoomClient("");

export const joinToChat = (token, onNewMessageReceived) => {
    const chatRequest = new ChatRequest();
    const metadata = token ? {'Authorization': `Bearer ${token}`} : {};

    const clientReadableStream = chatRoomClient.joinChat(chatRequest, metadata);

    clientReadableStream.on("metadata", status => console.log("Metadata", status))
    clientReadableStream.on("status", status => console.log("Status", status));
    clientReadableStream.on("error", err => console.error("Connection error", err))
    clientReadableStream.on("data", (message) => console.log("Message received", message.toObject()));
    clientReadableStream.on("end", () => console.log("Connection closed"));
}