import { Icon } from "@iconify/react";
import logo from "../../assets/Logo.svg";

const Footer = () => {
	return (
		<>
			<div className="primaryFont flex flex-col items-center gap-[40px] mx-[120px] mt-[80px] mb-[20px]">
				<div className="logo flex flex-row gap-2 items-center">
					<img src={logo} alt="Logo" className="size-[36px]" />
					<div className="font-bold text-2xl">Ecommerce</div>
				</div>
				<div className="subscription flex flex-col items-center gap-2">
					<span className="font-bold">Subscribe to our newsletter</span>

					<div className="flex flex-row items-center text-xs">
						<div className="flex flex-row bg-[#EAECEF] gap-1 p-1 rounded-l-sm pl-2 pr-3">
							<Icon
								className="self-center"
								icon="material-symbols-light:mail-outline-rounded"
								width="16"
								height="16"
							/>
							<input
								type="text"
								className="outline-none text-gray-500 placeholder:text-gray-500"
								placeholder="Input your email"
							/>
						</div>
						<button className="bg-[#636AE8] text-white p-1 pr-3 pl-3 rounded-r-sm cursor-pointer">
							Subscribe
						</button>
					</div>
				</div>
				<div className="footerLinks flex flex-row gap-20">
					<ul className="flex flex-col gap-2">
						<li className="font-bold text-md">Product</li>
						<div className="text-xs text-gray-600 flex flex-col gap-2">
							<li>Features</li>
							<li>Pricing</li>
						</div>
					</ul>
					<ul className="flex flex-col gap-2">
						<li className="font-bold text-md">Resources</li>
						<div className="text-xs text-gray-600 flex flex-col gap-2">
							<li>Blog</li>
							<li>User guides</li>
							<li>Webinars</li>
						</div>
					</ul>
					<ul className="flex flex-col gap-2">
						<li className="font-bold text-md">Company</li>
						<div className="text-xs text-gray-600 flex flex-col gap-2">
							<li>About us</li>
							<li>Contact us</li>
						</div>
					</ul>
					<ul className="flex flex-col gap-2">
						<li className="font-bold text-md">Plans & Pricing</li>
						<div className="text-xs text-gray-600 flex flex-col gap-2">
							<li>Personal</li>
							<li>Start up</li>
							<li>Organization</li>
						</div>
					</ul>
				</div>

				<div className="footerEnd w-full flex justify-between items-center">
					<div className="languageSelect text-xs py-1.5 px-2 rounded-sm text-gray-600">
						<select
							defaultValue="English"
							className="select w-26 h-7 text-xs focus:outline-none">
							<option disabled={true}>English</option>
							<option>Nepali</option>
							<option>Hindi</option>
						</select>
					</div>
					<div className="copyright text-xs text-gray-600 flex flex-row">
						<span>&copy; 2025 Brand, Inc.</span>
						<Icon icon="mdi:dot" width="20" height="20" />
						<span> Privacy </span>
						<Icon icon="mdi:dot" width="20" height="20" />
						<span>Terms</span>
						<Icon icon="mdi:dot" width="20" height="20" />
						<span>Sitemap</span>
					</div>
					<div className="footerIcons flex flex-row items-center gap-4">
						<Icon icon="garden:twitter-fill-16" width="12" height="12" />
						<Icon icon="ic:baseline-facebook" width="20" height="20" />
						<Icon icon="mdi:linkedin" width="20" height="20" />
						<Icon icon="mdi:youtube" width="20" height="20" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
