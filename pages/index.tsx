import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

interface SearchCatImage {
	id: string;
	url: string;
	width: number;
	height: number;
}

const Home: NextPage = () => {

	const [catImageUrl, setCatImageUrl] = useState("");

	const fetchCatImage = async (): Promise<SearchCatImage> => {
		const res = await fetch("https://api.thecatapi.com/v1/images/search");
		const result = await res.json();
		//console.log("result=", result);
		return result[0];
	}

	const handleClick = async () => {
		const catImage = await fetchCatImage();
		console.log(catImage.url);
		setCatImageUrl(catImage.url);
	}

  return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh"
			}}
		>

			<h1>猫画像アプリ</h1>
			<img
				src={catImageUrl}
				width={500}
				height={"auto"} alt="" />
			<button
				style={{ marginTop: "18px;"}}
				onClick={handleClick}>今日の猫さん</button>

		</div>
  )
}

export default Home
