import { NftInterface } from "../types";

export default function NftCard({ nftInfo }: { nftInfo: NftInterface }) {
	return (
		<div className="rounded-[32px] w-64 md:w-80 bg-white shadow-xl shadow-gray-900/10 last:absolute last:rotate-[-15deg] last:-z-20 last:-top-[42px] last:left-5 last:md:left-1/4	last:w-[16rem] last:[&>div:last-of-type]:last:bg-[#969799]">
			<div className="p-5 space-y-8">
				<div className="w-full aspect-[2/2] overflow-hidden rounded-[32px]">
					<img src={nftInfo.image} alt={`nft-${nftInfo.id}`} className="object-cover size-full" />
				</div>

				<div className="flex items-center justify-between">
					<div className="">
						<h1 className=" font-bold md:text-xl">{nftInfo.title}</h1>
						<p className="text-[#b2b5bb] font-medium text-sm md:text-base">{nftInfo.artist}</p>
					</div>

					<div className="h-12 w-12 rounded-full overflow-hidden">
						<img src={nftInfo.artistAvatar} alt="avatar" className="object-cover size-full" />
					</div>
				</div>
			</div>
			<div className="bg-gray-950 rounded-b-[32px] py-4 px-8 flex justify-between">
				<div className="text-white space-x-3 text-sm md:text-base">
					<span>{nftInfo.date}</span>
					<span>{nftInfo.time}</span>
				</div>
				<div className="flex -space-x-3">
					<div className="h-8 w-8 rounded-full bg-gray-700 inline-block ring-2 ring-gray-500"></div>
					<div className="h-8 w-8 rounded-full bg-gray-600 inline-block ring-2 ring-gray-500"></div>
				</div>
			</div>
		</div>
	);
}
