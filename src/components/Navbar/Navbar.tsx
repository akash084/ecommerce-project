import { Icon } from "@iconify/react";
import logo from "../../assets/Logo.svg";

const Navbar = () => {
	return (
		<>
			<div className="navBar primaryFont flex flex-row items-center justify-between mx-[120px] mt-2 mb-[80px]">
				<div className="logo">
					<img src={logo} alt="Logo" className="size-[36px]" />{" "}
				</div>
				<div className="navLinks flex flex-row gap-[16px] *:hover:text-[#636ae8]">
					<a href="#" className="font-bold text-[#636AE8]">
						Home
					</a>
					<a href="#">Products</a>
					<a href="#">About</a>
				</div>
				<div className="navIcons flex flex-row gap-[16px] *:hover:text-[#636ae8]">
					<Icon className="icon" icon="tabler:search" width="18" height="18" />
					<Icon
						// className="opacity-80"
						icon="solar:user-bold"
						width="18"
						height="18"
					/>
					<Icon icon="ion:cart" width="18" height="18" />
					<Icon icon="tabler:moon-filled" width="18" height="18" />
				</div>
			</div>
		</>
	);
};

export default Navbar;
