import { motion } from "framer-motion";
import { useState } from "react";

export default function MobileNav() {
	const [showMenu, setShowMenu] = useState(false);

	const navBar = {
		hide: {
			x: -950,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: "linear",
			},
		},
		show: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: "linear",
				staggerChildren: 0.3,
				delayChildren: 0.5,
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
		<div>
			<div className="lg:hidden flex cursor-pointer" onClick={() => setShowMenu((prev) => !prev)}>
				<div
					className={`flex justify-center items-center h-5 w-8 transition-all ease-out duration-300 relative before:content-[''] before:absolute before:h-[3px] before:w-7 before:bg-gray-700 before:rounded-full before:transition-all before:duration-300 before:ease-in-out before:will-change-transform after:content-[''] after:absolute after:bg-gray-700 after:h-[3px] after:w-7 after:rounded-full after:transition-all after:duration-300 after:ease-in-out after:will-change-transform ${
						showMenu
							? "before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45"
							: "before:-translate-y-1 after:translate-y-1"
					}`}
				></div>
			</div>

			<motion.div
				variants={navBar}
				initial="hide"
				animate={showMenu ? "show" : "hide"}
				className="fixed lg:hidden bg-gray-900 top-20 left-0 right-0 h-screen w-screen z-50 will-change-transform pt-32"
			>
				<ul className="text-gray-400 flex flex-col items-center gap-14 [&>li:first-of-type]:text-gray-800">
					<motion.li variants={link} className="nav-link text-xl max-md:!text-white">
						<a href="#" className="">
							Home
						</a>
					</motion.li>
					<motion.li variants={link} className="nav-link group text-xl max-md:!text-white">
						<a
							href="#"
							className=" flex flex-col relative [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-out overflow-hidden"
						>
							<span className="group-hover:-translate-y-6">Community</span>
							<span className="absolute translate-y-6 group-hover:translate-y-0 text-gray-800">Community</span>
						</a>
					</motion.li>
					<motion.li variants={link} className="nav-link group text-xl max-md:!text-white">
						<a
							href="#"
							className=" flex flex-col relative [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-out overflow-hidden"
						>
							<span className="group-hover:-translate-y-6">Collection</span>
							<span className="absolute translate-y-6 group-hover:translate-y-0 text-gray-800">Collection</span>
						</a>
					</motion.li>
				</ul>
			</motion.div>
		</div>
	);
}
