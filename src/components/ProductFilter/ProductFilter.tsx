interface Props {
	title: string;
	options: string[];
}

const ProductFilter = ({ title, options }: Props) => {
	return (
		<>
			<div className="filter flex flex-col gap-4 mb-[40px]">
				<div className="subTitle secondaryFont font-bold text-xl">{title}</div>
				<div className="options">
					<ul>
						{options.map((option: string) => (
							<li className="flex flex-row gap-2 text-sm">
								<input type="checkbox" className="" />
								<div className="label">{option}</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default ProductFilter;
