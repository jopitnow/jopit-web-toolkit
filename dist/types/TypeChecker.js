function isString(v) {
    return typeof v === "string";
}
function isNumber(v) {
    return typeof v === "number";
}
function isBoolean(v) {
    return typeof v === "boolean";
}
export function isArray(value) {
    return Array.isArray(value);
}
export function isNotEmpty(value) {
    return Array.isArray(value) && value.length > 0;
}
export function isNullOrEmpty(value) {
    return !value || value.trim() === "";
}
export function isValidString(value) {
    return isString(value) && !isNullOrEmpty(value);
}
export function isValidNumber(value) {
    return isNumber(value);
}
export function isValidBoolean(value) {
    return isBoolean(value);
}
