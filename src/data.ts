import { NftInterface } from "./types";
import nft1 from "./assets/images/nft-1.png";
import nft2 from "./assets/images/nft-2.jpg";

export const nftList = [
	{
		id: 1,
		title: "Degan Monkey",
		artist: "Nael G",
		date: "24 Feb",
		time: "2:10 AM",
		image: nft1,
		artistAvatar: "avatar.jpg",
	},
	{
		id: 2,
		title: "Space Jam",
		artist: "Wallace",
		date: "18 Jan",
		time: "11:30 PM",
		image: nft2,
		artistAvatar: "avatar.jpg",
	},
] satisfies NftInterface[];
