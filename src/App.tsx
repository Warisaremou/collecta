import NavBar from "./component/navbar";
import NftCard from "./component/nft-card";
import { nftList } from "./data";

function App() {
	return (
		<div className="container py-6 min-h-screen">
			<NavBar />

			<main className="pt-20 lg:pt-32 grid lg:grid-cols-2 gap-20 xl:gap-32 w-full">
				<div className="space-y-5 md:space-y-10 py-5 flex flex-col items-center lg:items-start">
					<h1 className="text-[2.5rem] md:text-[3.8rem] xl:text-[4.5rem] tracking-wide max-lg:text-center">
						Collect your <br /> favorite avatar.
					</h1>
					<p className="md:text-lg xl:text-xl text-[#b2b5bb] tracking-wide max-lg:text-center">
						With collecta, you can get more than +1m avatar, <br /> From 120k visual artist easily!
					</p>
					<div className="relative bg-[#f4f5f6] py-3 px-5 max-w-md rounded-full flex items-center gap-x-2 md:gap-x-4 focus-within:ring-2 focus-within:ring-gray-300">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path
									d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"
									stroke="#b6b6c6"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
									stroke="#b6b6c6"
									strokeWidth="1.5"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<input
							type="text"
							placeholder="Enter your email adrdres"
							className="text-sm md:text-base text-gray-600 placeholder:text-[#b6b6c6] bg-transparent focus-visible::border-none w-full outline-none"
						/>
						<button
							type="button"
							className="text-sm py-4 px-8 bg-gray-900 hover:bg-gray-700 transition-colors ease-in-out duration-300 text-white rounded-full"
						>
							Submit
						</button>
					</div>
				</div>

				<div className="flex justify-center xl:justify-end relative">
					{nftList.map((nft) => (
						<NftCard key={nft.id} nftInfo={nft} />
					))}
				</div>
			</main>
		</div>
	);
}

export default App;
