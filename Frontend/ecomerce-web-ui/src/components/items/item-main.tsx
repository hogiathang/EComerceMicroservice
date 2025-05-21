'use client'
import ItemHorizontalFilter from "./item-horizontal-filter"
import ItemCard from "./item-card";
import VerticalFilter from "./item-vertical-filter";
import Pagination from "../navbar/pagination";

const products = [
    { id: "1", name: 'Product 1', price: 10.99, brand: 'Brand A', description: 'Description of Product 1', itemImage: 'https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif', discount: 30 },
    { id: "2", name: 'Product 2', price: 20.99, brand: 'Brand B', description: 'Description of Product 2', itemImage: 'https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif' },
    { id: "3", name: 'Product 3', price: 30.99, brand: 'Brand C', description: 'Description of Product 3', itemImage: 'https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif' },
    { id: "4", name: 'Product 4', price: 40.99, brand: 'Brand D', description: 'Description of Product 4', itemImage: 'https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif' },
    { id: "5", name: 'Product 5', price: 50.99, brand: 'Brand E', description: 'Description of Product 5', itemImage: 'https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif' },
    { id: "6", name: 'Product 6', price: 60.99, brand: 'Brand F', description: 'Description of Product 6', itemImage: 'https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif' },
    { id: "7", name: 'Product 7', price: 70.99, brand: 'Brand G', description: 'Description of Product 7', itemImage: 'https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif' },
    { id: "8", name: 'Product 8', price: 80.99, brand: 'Brand H', description: 'Description of Product 8', itemImage: 'https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif' },
    { id: "9", name: 'Product 9', price: 90.99, brand: 'Brand I', description: 'Description of Product 9', itemImage: 'https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif' },
]

export default function ItemMainComponent() {
    return (
        <div className="flex flex-row bg-gray-100 w-[80%] mx-auto pt-10">
            <VerticalFilter />
            <div className="flex flex-col flex-1 bg-gray-100">
                <div className="bg-white shadow-sm">
                    <ItemHorizontalFilter
                        title="Products"
                        description="List of products available for purchase."
                        sortOrder="asc"
                        sortBy="price"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {products.map(product => (
                        <ItemCard
                            id={product.id}
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            brand={product.brand}
                            itemImage={product.itemImage}
                            description={product.description}
                            discount={product.discount}
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-6">
                    <Pagination
                        totalItems={products.length}
                        itemsPerPage={9}
                        currentPage={1}
                        onPageChange={(page) => console.log(`Page changed to: ${page}`)}
                    />
                </div>
            </div>
        </div>
    )
}