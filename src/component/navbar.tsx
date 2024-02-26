import { motion } from "framer-motion";
import MobileNav from "./mobile-nav";

export default function NavBar() {
	const navBar = {
		hide: {
			y: -30,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				delayChildren: 1,
				staggerChildren: 0.3,
				delay: 0.2,
				duration: 0.5,
				ease: "easeInOut",
			},
		},
	};

	const link = {
		hide: {
			y: -30,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<motion.div variants={navBar} initial="hide" animate="show" className="flex items-center justify-between">
			<div>
				<h1 className="text-2xl">Collecta</h1>
			</div>

			<ul className="text-gray-400 lg:flex items-center gap-14 [&>li:first-of-type]:text-gray-800 hidden">
				<motion.li variants={link} className="nav-link">
					<a href="#" className="">
						Home
					</a>
				</motion.li>
				<motion.li variants={link} className="nav-link group">
					<a
						href="#"
						className=" flex flex-col relative [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-out overflow-hidden"
					>
						<span className="group-hover:-translate-y-6">Community</span>
						<span className="absolute translate-y-6 group-hover:translate-y-0 text-gray-800">Community</span>
					</a>
				</motion.li>
				<motion.li variants={link} className="nav-link group">
					<a
						href="#"
						className=" flex flex-col relative [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-out overflow-hidden"
					>
						<span className="group-hover:-translate-y-6">Collection</span>
						<span className="absolute translate-y-6 group-hover:translate-y-0 text-gray-800">Collection</span>
					</a>
				</motion.li>
			</ul>
			<div className="border border-[#e3e3e3] rounded-full p-3 max-lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path d="M17.5 17.5L22 22" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					<path
						d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
						stroke="#000000"
						strokeWidth="1.5"
						strokeLinejoin="round"
					/>
				</svg>
			</div>

			<MobileNav />
		</motion.div>
	);
}
