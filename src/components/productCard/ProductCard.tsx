import { Icon } from "@iconify/react";

interface Props {
	rating: string;
	name: string;
	price: string;
}

const ProductCard = ({ rating, name, price }: Props) => {
	return (
		<>
			<div className="flex flex-col text-xs gap-1 mx-[8px] mb-[40px]">
				<img
					src="https://placehold.co/200x200.png"
					alt="Product Image"
					className="size-[200px] rounded-md"
				/>
				<span className="flex flex-row font-bold">
					{rating}
					<Icon icon="material-symbols:star-rounded" width="18" height="18" />
				</span>
				<div className="text-[#4e4e4e] flex flex-col  gap-1">
					<span>{name}</span>
					<span>${price}</span>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
