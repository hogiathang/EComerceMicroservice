'use client';
interface FieldProps {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

export default function Field(
    FieldProps: FieldProps
) {
    return (
        <div className="relative w-full mb-6">
            <label
                htmlFor={FieldProps.name}
                className="absolute -top-2 left-3 bg-white text-gray-500 text-xs px-1 z-10"
            >
                {FieldProps.label}
            </label>
            <input
                type={FieldProps.type}
                name={FieldProps.name}
                id={FieldProps.name}
                placeholder={FieldProps.placeholder}
                value={FieldProps.value}
                onChange={FieldProps.onChange}
                className={
                    `w-full border border-gray-300 rounded-xl py-4 px-4 text-gray-800 placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    ${FieldProps.error ? 'border-red-500' : ''}`
                }
            />
            {FieldProps.error && (
                <p className="text-red-500 text-xs italic mt-1">{FieldProps.error}</p>
            )}
        </div>
    );
}