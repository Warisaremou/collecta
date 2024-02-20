import { motion } from "framer-motion";

export default function NavBar() {
	return (
		<motion.div className="flex items-center justify-between">
			<div>
				<h1 className="text-xl">Collecta</h1>
			</div>

			<ul className="text-gray-400 flex items-center gap-14 [&>li:first-of-type]:text-gray-800 ">
				<li className="relative before:content-[''] before:absolute before:-bottom-1 before:w-4 before:h-1 before:bg-gray-800 before:right-1/2 before:translate-x-1/2 before:rounded-full">
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">Community</a>
				</li>
				<li>
					<a href="#">Collection</a>
				</li>
			</ul>
			<div className="border-2 border-[#e3e3e3] rounded-full p-3">
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
		</motion.div>
	);
}
