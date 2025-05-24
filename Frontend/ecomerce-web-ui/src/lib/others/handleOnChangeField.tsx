export function HandleFieldChange<T extends Record<string, unknown>>(
    e: React.ChangeEvent<HTMLInputElement>,
    formData: T,
    setFormData: React.Dispatch<React.SetStateAction<T>>
) {
    e.preventDefault();
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    } as T);
}

export function HandleErrorChange<T extends Record<string, unknown>>(
    message: string,
    field: string,
    formData: T,
    setErrorForm: React.Dispatch<React.SetStateAction<T>>
) {
    setErrorForm({
        ...formData,
        [field]: message
    } as T);
}