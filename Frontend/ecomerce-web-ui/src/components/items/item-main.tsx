'use client'
import ItemHorizontalFilter from "./item-horizontal-filter"
import ItemCard from "./item-card";
import VerticalFilter from "./item-vertical-filter";
import Pagination from "../navbar/pagination";

export default function ItemMainComponent(products: ItemsComponentProps) {
    return (
        <div className="flex flex-row bg-gray-100 w-[80%] mx-auto pt-10">
            <VerticalFilter />
            <div className="flex flex-col flex-1 bg-gray-100">
                <div className="bg-white shadow-sm">
                    <ItemHorizontalFilter
                        title={products.title}
                        description={products.description}
                        sortOrder={products.sortOrder}
                        sortBy={products.sortBy}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {products.items.map(product => (
                        <ItemCard
                            id={product.id}
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            brand={product.brand}
                            image={product.image}
                            description={product.description}
                            discount={product.discount}
                            quantity={product.quantity}
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-6">
                    <Pagination
                        totalItems={products.items.length}
                        itemsPerPage={9}
                        currentPage={1}
                        onPageChange={(page) => console.log(`Page changed to: ${page}`)}
                    />
                </div>
            </div>
        </div>
    )
}