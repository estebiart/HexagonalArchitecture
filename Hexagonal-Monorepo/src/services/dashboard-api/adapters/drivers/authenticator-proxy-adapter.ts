import { DashboardApi } from "../../app/dashboard-api";
import { AuthenticatedUser, User } from "../../app/schemas";
import  {ForAuthenticating } from "../../ports/drivers/for-authenticating";

export class AuthenticatorProxyApadter implements ForAuthenticating {
    constructor(private readonly dashboardApi: DashboardApi){
    }
    async login(email: string, password: string): Promise<AuthenticatedUser> {
        return this.dashboardApi.login(email, password );
    };
    async register(user: User, password: string): Promise<AuthenticatedUser> {
        return this.dashboardApi.register(user, password );
    };
}   