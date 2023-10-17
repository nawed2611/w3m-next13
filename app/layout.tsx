"use client";
import "../styles/globals.css";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { ReactNode } from "react";

import { WagmiConfig } from "wagmi";
import { useEffect, useState } from "react";
import {
	arbitrum,
	avalanche,
	bsc,
	fantom,
	gnosis,
	mainnet,
	optimism,
	polygon,
} from "wagmi/chains";

const chains = [
	mainnet,
	polygon,
	avalanche,
	arbitrum,
	bsc,
	optimism,
	gnosis,
	fantom,
];

// 1. Get projectID at https://cloud.walletconnect.com

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

const metadata = {
	name: "Next 13 Starter Template",
	description: "A Next.js 13 starter template with Web3Modal v3 + Wagmi",
	url: "https://web3modal.com",
	icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<WagmiConfig config={wagmiConfig}>
			<html lang="en" suppressHydrationWarning>
				<body>
					<>{children}</>
				</body>
			</html>
		</WagmiConfig>
	);
}
