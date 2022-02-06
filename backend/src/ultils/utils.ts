import { genSaltSync, hashSync } from 'bcryptjs';
import crypto from 'crypto';
export const encryptPassword = (password: string, numberRounds: number) => {
    const salt = genSaltSync(numberRounds);
    return hashSync(password, salt);
}

export const generateUniqueId = () => crypto.randomBytes(6).toString('hex');
