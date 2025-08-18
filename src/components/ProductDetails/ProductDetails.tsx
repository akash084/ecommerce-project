import { Icon } from "@iconify/react";

const ProductDetails = () => {
	return (
		<>
			<div className="productDetails tertiaryFont mx-[120px]">
				<div className="detailsMain grid grid-cols-2 gap-[40px]">
					<div className="detailsLeft flex flex-col gap-[80px]">
						<div className="detailsTop flex flex-row gap-4">
							<div className="subImages flex flex-col justify-between">
								<img
									src="https://placehold.co/100x100.png"
									alt="Product Image"
									className="size-[50px] rounded-md"
								/>
								<img
									src="https://placehold.co/100x100.png"
									alt="Product Image"
									className="size-[50px] rounded-md"
								/>
								<img
									src="https://placehold.co/100x100.png"
									alt="Product Image"
									className="size-[50px] rounded-md"
								/>
								<img
									src="https://placehold.co/100x100.png"
									alt="Product Image"
									className="size-[50px] rounded-md"
								/>
								<img
									src="https://placehold.co/100x100.png"
									alt="Product Image"
									className="size-[50px] rounded-md"
								/>
								<img
									src="https://placehold.co/100x100.png"
									alt="Product Image"
									className="size-[50px] rounded-md"
								/>
							</div>
							<img
								src="https://placehold.co/400x400.png"
								alt="Product Image"
								className="size-[400px] rounded-md"
							/>
						</div>
						<div className="detailsBottom flex flex-col gap-[80px]">
							<div className="productFeatures text-xs">
								<div className="title secondaryFont font-bold text-[20px] mb-[20px]">
									Product Details
								</div>
								<div className="collapse collapse-arrow bg-base-100 border border-base-300">
									<input type="radio" name="my-accordion-2" defaultChecked />
									<div className="collapse-title font-semibold">Design</div>
									<div className="collapse-content text-xs">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Beatae, obcaecati!
									</div>
								</div>
								<div className="collapse collapse-arrow bg-base-100 border border-base-300">
									<input type="radio" name="my-accordion-2" />
									<div className="collapse-title font-semibold">Style </div>
									<div className="collapse-content text-xs">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Dignissimos, quae!
									</div>
								</div>
								<div className="collapse collapse-arrow bg-base-100 border border-base-300">
									<input type="radio" name="my-accordion-2" />
									<div className="collapse-title font-semibold">
										Connectivity
									</div>
									<div className="collapse-content text-xs">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Deleniti, nisi!
									</div>
								</div>
							</div>
							<div className="productReviews flex flex-col gap-[20px]">
								<span className="title secondaryFont font-bold text-[20px]">
									Reviews
								</span>
								<div className="flex flex-row gap-[20px]">
									<div className="flex flex-col items-center w-fit">
										<span className="font-bold text-[16px]">5</span>
										<span className="flex flex-col">
											<div className="flex flex-row">
												<Icon
													icon="material-symbols:star-rounded"
													width="18"
													height="18"
												/>
												<Icon
													icon="material-symbols:star-rounded"
													width="18"
													height="18"
												/>
												<Icon
													icon="material-symbols:star-rounded"
													width="18"
													height="18"
												/>
												<Icon
													icon="material-symbols:star-rounded"
													width="18"
													height="18"
												/>
												<Icon
													icon="material-symbols:star-rounded"
													width="18"
													height="18"
												/>
											</div>
											<span className="text-xs">(1,789 Reviews)</span>
										</span>
									</div>
									<div className="flex flex-col">
										<div className="flex flex-row items-center gap-2 justify-between">
											<span className="text-xs">1,789</span>
											<div className="span bg-black w-[300px] h-1.5 rounded-md"></div>
										</div>
										<div className="flex flex-row items-center gap-2 justify-between">
											<span className="text-xs">0</span>
											<div className="span bg-gray-400 w-[300px] h-1.5 rounded-md"></div>
										</div>
										<div className="flex flex-row items-center gap-2 justify-between">
											<span className="text-xs">0</span>
											<div className="span bg-gray-400 w-[300px] h-1.5 rounded-md"></div>
										</div>
										<div className="flex flex-row items-center gap-2 justify-between">
											<span className="text-xs">0</span>
											<div className="span bg-gray-400 w-[300px] h-1.5 rounded-md"></div>
										</div>
										<div className="flex flex-row items-center gap-2 justify-between">
											<span className="text-xs">0</span>
											<div className="span bg-gray-400 w-[300px] h-1.5 rounded-md"></div>
										</div>
									</div>
								</div>
								<div className="flex flex-col text-xs gap-[20px]">
									<div className="comment border-1 rounded-md p-4 flex flex-col gap-2">
										<span className="name">John Smith</span>
										<div className="flex flex-row">
											<Icon
												icon="material-symbols:star-rounded"
												width="14"
												height="14"
											/>
											<Icon
												icon="material-symbols:star-rounded"
												width="14"
												height="14"
											/>
											<Icon
												icon="material-symbols:star-rounded"
												width="14"
												height="14"
											/>
											<Icon
												icon="material-symbols:star-rounded"
												width="14"
												height="14"
											/>
											<Icon
												icon="material-symbols:star-rounded"
												width="14"
												height="14"
											/>

											<span className="postDate text-gray-400 ml-2">
												2 days ago
											</span>
										</div>
										<div className="description">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
											Voluptatibus laudantium iste excepturi nobis ad. Quia nemo
											expedita aliquid labore vel?
										</div>
									</div>
									<div className="comment border-1 rounded-md p-4 flex flex-col gap-2">
										<span className="name">John Smith</span>
										<div className="flex flex-row">
											<Icon
												icon="material-symbols:star-rounded"
												width="14"
												height="14"
											/>
											<Icon
												icon="material-symbols:star-rounded"
												width="14"
												height="14"
											/>
											<Icon
												icon="material-symbols:star-rounded"
												width="14"
												height="14"
											/>
											<Icon
												icon="material-symbols:star-rounded"
												width="14"
												height="14"
											/>
											<Icon
												icon="material-symbols:star-rounded"
												width="14"
												height="14"
											/>

											<span className="postDate text-gray-400 ml-2">
												{" "}
												2 days ago
											</span>
										</div>
										<div className="description">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
											Voluptatibus laudantium iste excepturi nobis ad. Quia nemo
											expedita aliquid labore vel?
										</div>
									</div>

									<button className="buyButton text-white text-lg bg-[#636ae8] w-full h-[40px] rounded-md hover:bg-white hover:text-[#636ae8] hover:border-2">
										See All Reviews
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="detailsRight flex flex-col gap-2">
						<div className="title secondaryFont font-bold text-[30px]">
							Product Title
						</div>
						<div className="description text-xs text-gray-600">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
							libero cum hic. Illum dolorum itaque aliquid adipisci quae nulla
							hic?
						</div>

						<a
							href="#"
							className="productDetailsNav underline decoration-2 font-bold text-xs">
							View product details
						</a>

						<span className="font-bold text-xs">$245</span>
						<span className="flex flex-row">
							<Icon
								icon="material-symbols:star-rounded"
								width="18"
								height="18"
							/>
							<Icon
								icon="material-symbols:star-rounded"
								width="18"
								height="18"
							/>
							<Icon
								icon="material-symbols:star-rounded"
								width="18"
								height="18"
							/>
							<Icon
								icon="material-symbols:star-rounded"
								width="18"
								height="18"
							/>
							<Icon
								icon="material-symbols:star-rounded"
								width="18"
								height="18"
							/>
							<span className="text-xs">(1,789)</span>
						</span>
						<button className="buyButton text-white text-lg bg-[#636ae8] w-full h-[40px] rounded-md hover:bg-white hover:text-[#636ae8] hover:border-2">
							Buy Now
						</button>
						<button className="buyButton text-[#636ae8] text-lg w-full h-[40px] border-2 rounded-md hover:bg-[#636ae8] hover:text-white">
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetails;
