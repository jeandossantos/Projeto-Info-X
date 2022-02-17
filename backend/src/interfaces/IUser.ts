export interface IUser {
    id?: number;
    name?: string;
    email?: string;
    password: string;
    confirmPassword?: string;
    cpf?: string;
    whatsapp?: string;
    admin?: boolean;
}