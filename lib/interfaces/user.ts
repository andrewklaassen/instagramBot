export interface User {
    username: string;
    password: string;
    url: string;
    orders: Map<string, string>;
}
