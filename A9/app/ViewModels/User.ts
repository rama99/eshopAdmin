export interface User {
    userName: string;
    password: string;
    valid: boolean;
    grant_type?: string;
}