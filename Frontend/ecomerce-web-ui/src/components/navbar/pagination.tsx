'use client';

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}
export default function Pagination(
    properties: PaginationProps
) {
    const totalPages = Math.ceil(properties.totalItems / properties.itemsPerPage);
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <button
                key={i}
                className={`px-4 py-2 mx-1 rounded ${properties.currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                onClick={() => properties.onPageChange(i)}
            >
                {i}
            </button>
        )
    }

    return (
        <div className="flex items-center justify-center mt-4">
            {pages}
        </div>
    )
}