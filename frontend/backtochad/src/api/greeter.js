import {AuthClient} from "./grpc/UsersServiceClientPb";
import {CheckRequestDto, LoginRequestDto} from "./grpc/users_pb";

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

