import { CustomException } from '../exceptions/CustomException';

export function existsOrError(value: unknown, msg: string) {
    if (!value) throw new CustomException(msg);
    if (Array.isArray(value) && value.length === 0)
        throw new CustomException(msg);
    if (typeof value === 'string' && !value.trim())
        throw new CustomException(msg);
}

export function notExistsOrError(value: unknown, msg: string) {
    try {
        existsOrError(value, msg);
    } catch (e) {
        return;
    }
    throw new CustomException(msg);
}

export function equalsOrError(valueA: unknown, valueB: unknown, msg: string) {
    if (valueA !== valueB) throw new CustomException(msg);
}