
export declare const isString: (v) => v is string;

export declare const isNumber: (v) => v is number;

export declare const isBoolean: (v) => v is boolean;

export function isArray<T>(value: unknown): value is Array<T> {
    return Array.isArray(value);
}

export function isNotEmpty<T>(value: Array<T> | null | undefined): value is Array<T> {
    return Array.isArray(value) && value.length > 0;
}

export function isNullOrEmpty(value: string | null | undefined): value is "" | null | undefined {
    return !value || value.trim() === "";
}

export function isValidString(value: unknown): value is string {
    return isString(value) && !isNullOrEmpty(value);
}
