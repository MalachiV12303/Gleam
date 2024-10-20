
export function Item({
    id,
    name,
    brand,
    price,
}: {
    id: string;
    name: string;
    brand: string;
    price: number;
}) {
    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            {id}{name}{brand}{price}
        </div>
    );
}
