import {AuthClient} from "./grpc/UsersServiceClientPb";
import {CheckRequestDto, LoginRequestDto} from "./grpc/users_pb";
import {ChatRoomClient} from "./grpc/GreetServiceClientPb";
import {ChatRequest} from "./grpc/greet_pb";

const authClient = new AuthClient("");

export const login = async (login, password, token) => {
    const loginRequestDto = new LoginRequestDto();
    loginRequestDto.setLogin(login);
    loginRequestDto.setPassword(password);

    const metadata = token ? {'Authorization': `Bearer ${token}`} : {};

    const resp = await authClient.login(loginRequestDto, metadata)
        .then(x => x.toObject());

    if(resp.error)
        throw Error(resp.error);

    return resp;
}

export const checkLogin = async (token) => {
    const checkRequestDto = new CheckRequestDto();
    const metadata = token ? {'Authorization': `Bearer ${token}`} : {};

    const resp = await authClient.check(checkRequestDto, metadata)
        .then(x => x.toObject());

    return resp;
}


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
