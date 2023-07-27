export function validateInputNumber(value: string) : string {
    return value.replace(/[^A-Za-z]/g, "");
}