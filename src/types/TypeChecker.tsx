
function isString(v: unknown): v is string {
    return typeof v === "string";
}

function isNumber(v: unknown): v is number {
    return typeof v === "number";
}

function isBoolean(v: unknown): v is boolean {
    return typeof v === "boolean";
}

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

export function isValidNumber(value: unknown): value is number {
    return isNumber(value);
}

export function isValidBoolean(value: unknown): value is boolean {
    return isBoolean(value);
}
