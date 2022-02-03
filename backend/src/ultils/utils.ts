import { genSaltSync, hashSync } from 'bcryptjs';

export const encryptPassword = (password: string, numberRounds: number) => {
    const salt = genSaltSync(numberRounds);
    return hashSync(password, salt);
}

