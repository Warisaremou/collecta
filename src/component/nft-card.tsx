import { NftInterface } from "../types";

export default function NftCard({ nftInfo }: { nftInfo: NftInterface }) {
	return (
		<div className="rounded-[32px] w-80 bg-white shadow-xl shadow-gray-900/10 last:absolute last:rotate-[-15deg] last:-z-20 last:-top-14 last:left-16	last:w-[16rem] [&>div:first-of-type>img]:last:h-[16rem]">
			<div className="p-5 space-y-8">
				<div className="w-full h-72 overflow-hidden rounded-[32px]">
					<img src={nftInfo.image} alt={`nft-${nftInfo.id}`} className="object-cover size-full" />
				</div>

				<div className="flex items-center justify-between">
					<div className="">
						<h1 className=" font-bold text-xl">{nftInfo.title}</h1>
						<p className="text-[#b2b5bb] font-medium">{nftInfo.artist}</p>
					</div>

					<div className="h-14 w-14 bg-gray-300 rounded-full"></div>
				</div>
			</div>
			<div className="bg-gray-950 rounded-b-[32px] py-6 px-8 flex justify-between">
				<div className="text-white space-x-3">
					<span>{nftInfo.date}</span>
					<span>{nftInfo.time}</span>
				</div>

				<div className="h-8 w-8 rounded-full bg-gray-700"></div>
			</div>
		</div>
	);
}
