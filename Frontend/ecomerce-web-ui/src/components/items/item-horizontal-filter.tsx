interface ItemHorizontalFilterProps {
    title: string,
    description: string,
    sortOrder?: string,
    sortBy?: string,
}

export default function ItemHorizontalFilter(
    properties: ItemHorizontalFilterProps
) {
    return (
        <div className="flex flex-col justify-center w-full p-4">
            <h1 className="text-3xl font-bold">
                {properties.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
                {properties.description}
            </p>
        </div>
    )
}