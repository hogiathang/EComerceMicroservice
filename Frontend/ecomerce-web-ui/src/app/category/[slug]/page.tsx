import ItemMainComponent from "@/components/items/item-main";

interface CategoryPageProps {
    params: Promise<{
        slug: string
    }>;
}

export async function generateStaticParams() {
    return []
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const title = replaceSpecialCharacter(slug)
    return (
        <div className="flex flex-col min-h-screen py-2 bg-gray-100 text-black">
            <ItemMainComponent
                title={title}
                description={title + " Hello world"}
                items={[]}
            />
        </div>
    )
}

const replaceSpecialCharacter = (slug: string) => {
    const slugTransform = slug.replace(/%26/g, 'and');
    console.log(slugTransform)

    return slugTransform
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}