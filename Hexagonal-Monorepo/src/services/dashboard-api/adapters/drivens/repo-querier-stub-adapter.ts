import { User as RepoUser} from "../../../repository/app/schemas";
import { ForRepoQuerying } from "../../ports/drivens";

const userMock: RepoUser ={
    id:'1212',
    name:'kja sjai',
    email:'email@email.com'
}

export class RepoQUerierStub implements ForRepoQuerying {
    getUser(_email: string): Promise<RepoUser> {
        return  Promise.resolve(userMock);
    }

    createUser(_user: any, _password: string): Promise<RepoUser> {
        return  Promise.resolve(userMock);
    }
}