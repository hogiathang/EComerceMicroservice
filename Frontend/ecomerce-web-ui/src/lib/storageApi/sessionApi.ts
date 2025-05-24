export function saveFieldToSession(field: string, value: string) {
    sessionStorage.setItem(field, value)
    return true;
}

export function getFieldFromSession(field: string) {
    const value = sessionStorage.getItem(field)
    return (value !== null) ? value : null;
}