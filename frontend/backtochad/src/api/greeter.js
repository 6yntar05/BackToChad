import {AuthClient} from "./grpc/GreetServiceClientPb";
import {LoginRequestDto} from "./grpc/greet_pb";

const authClient = new AuthClient("");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJMb2dpbiI6IlRlc3RMb2dpbiIsImV4cCI6MTY3MDk4Njk1OSwiaXNzIjoiRGV2QmFja2VuZCIsImF1ZCI6IkRldkF1ZGllbmNlIn0.Tm3_EN9OyA8oUl2lS7cNIa0Nykf7cwH0zrZO6YnBsEs";
const metadata = {'Authorization': `Bearer ${token}`};

export const login = async () => {

    const loginRequestDto = new LoginRequestDto();
    loginRequestDto.setLogin("Test login");
    loginRequestDto.setPassword("SecretPassword228+");

    try {
        const resp = await authClient.login(loginRequestDto, metadata)
        console.log("Response", resp.toObject());
    } catch (e) {
        console.error(e)
    }
}

