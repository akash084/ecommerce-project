import { Icon } from "@iconify/react";
import ProductFilter from "../ProductFilter/ProductFilter";
import ProductCard from "../productCard/ProductCard";

const Products = () => {
	return (
		<>
			<div className="mx-[120px]">
				<div className="header flex justify-between items-center">
					<div className="title secondaryFont font-bold text-[30px]">
						Popular Products
					</div>
					<div className="flex flex-row gap-[8px]">
						<div>
							<button className="bg-[#4e4e4e] text-white p-1.5 flex flex-row gap-[8px] rounded-sm text-sm font-medium">
								<div className="filterText w-20">Hide Filter</div>
								<Icon icon="mage:filter-fill" width="16" height="16" />
							</button>
						</div>
						<select
							defaultValue="Sort By"
							className="select text-sm font-medium border-none h-8 focus:border-none focus:outline-none">
							<option disabled={true}>Sort By</option>
							<option>Nepali</option>
							<option>Hindi</option>
						</select>
					</div>
				</div>
				<div className="mainSection flex flex-row justify-between  my-[40px]">
					<div className="leftSection">
						<div className="flex flex-col text-sm gap-2 mb-[40px]">
							<a href="#">Latest</a>
							<a href="#">Hot Deals</a>
							<a href="#">Trending</a>
						</div>
						<ProductFilter
							title={"Category"}
							options={["Cloths", "Food", "Books", "Gadgets", "Shoes"]}
						/>
						<ProductFilter
							title={"Brand"}
							options={["Apple", "Samsung", "Sony", "Nike"]}
						/>
						<ProductFilter
							title={"Price"}
							options={[
								"$0 - $100",
								"$100 - $500",
								"$500 - $1,000",
								"More than $1,000",
							]}
						/>
					</div>
					<div className="rightSection w-[700px] justify-items-end">
						<div className="productCards grid grid-cols-3">
							<ProductCard rating="4.5" name="Sony WH-1000XM4" price="349.99" />
							<ProductCard rating="4.5" name="Sony WH-1000XM4" price="349.99" />
							<ProductCard rating="4.5" name="Sony WH-1000XM4" price="349.99" />
							<ProductCard rating="4.5" name="Sony WH-1000XM4" price="349.99" />
							<ProductCard rating="4.5" name="Sony WH-1000XM4" price="349.99" />
							<ProductCard rating="4.5" name="Sony WH-1000XM4" price="349.99" />
							<ProductCard rating="4.5" name="Sony WH-1000XM4" price="349.99" />
							<ProductCard rating="4.5" name="Sony WH-1000XM4" price="349.99" />
							<ProductCard rating="4.5" name="Sony WH-1000XM4" price="349.99" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Products;
