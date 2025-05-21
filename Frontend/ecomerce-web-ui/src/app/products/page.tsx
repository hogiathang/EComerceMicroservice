import ItemMainComponent from "@/components/items/item-main";

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

export default function ProductPage() {


    return (
        <div className="flex flex-col min-h-screen py-2 bg-gray-100 text-black">
            <ItemMainComponent
                title="Product"
                description="Hello world"
                items={products}
            />
        </div>
    )
}