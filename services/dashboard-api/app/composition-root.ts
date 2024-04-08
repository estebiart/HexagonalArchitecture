import { ControlAuthenticatorStub } from "../adapters/drivens/control-authenticator-stub-adapter";
import { RepoQUerierStub } from "../adapters/drivens/repo-querier-stub-adapter";
import { AuthenticatorProxyApadter } from "../adapters/drivers/authenticator-proxy-adapter";
import { DashboardApi } from "./dashboard-api";

const compisitionMock = () => {
    const controlAuthenticatorStub = new ControlAuthenticatorStub();
    const repoQuerierStub = new RepoQUerierStub();
    const dashboardApiMock = new DashboardApi(
        controlAuthenticatorStub,
        repoQuerierStub);

    const authenticatorProxyApadter = new AuthenticatorProxyApadter(dashboardApiMock);

    return{
        authenticatorProxyApadter
    };
};

export const {
    authenticatorProxyApadter
} = compisitionMock();

const registerMock = {
    name: 'John Doe',
    email: 'john.doe@example.com'
}
authenticatorProxyApadter.login('jhon@gmail.com', '1234');

