import {AuthClient, UsersClient} from "./grpc/UsersServiceClientPb";
import {CheckRequestDto, CreateUserRequestDto, LoginRequestDto} from "./grpc/users_pb";

const authClient = new AuthClient("");
const usersClient = new UsersClient("");

export default abstract class UsersApi {
    static async login(login: string, password: string, token?: string | null) {
        const loginRequestDto = new LoginRequestDto();
        loginRequestDto.setLogin(login);
        loginRequestDto.setPassword(password);

        const metadata = token ? {'Authorization': `Bearer ${token}`} : {};

        const resp = await authClient.login(loginRequestDto, metadata as any)
            .then(x => x.toObject());

        if (resp.error)
            throw Error(resp.error);

        return resp;
    }

    static async checkLogin(token: string) {
        const checkRequestDto = new CheckRequestDto();
        const metadata = token ? {'Authorization': `Bearer ${token}`} : {};

        const resp = await authClient.check(checkRequestDto, metadata as any)
            .then(x => x.toObject());

        return resp;
    }

    static async create(login: string, password: string) {
        const createUserRequestDto = new CreateUserRequestDto();
        createUserRequestDto.setLogin(login);
        createUserRequestDto.setPassword(password);

        const resp = await usersClient.createUser(createUserRequestDto, {})
            .then(x => x.toObject());

        return resp;
    }
}