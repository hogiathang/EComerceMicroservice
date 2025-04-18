export default function HandleFieldChange<T extends Record<string, unknown>>(
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