import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam et qui
					distinctio ut nostrum eum hic nesciunt. Fugit, natus quas itaque
					repellat necessitatibus impedit enim illum sequi facere error tenetur,
					quibusdam eligendi aperiam consequatur corporis sunt doloremque esse
					ipsum saepe sit corrupti expedita dolor minima. Nobis alias vitae
					officiis accusantium eveniet doloremque ratione facere maiores
					voluptate, libero nisi quae labore.
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam et qui
					distinctio ut nostrum eum hic nesciunt. Fugit, natus quas itaque
					repellat necessitatibus impedit enim illum sequi facere error tenetur,
					quibusdam eligendi aperiam consequatur corporis sunt doloremque esse
					ipsum saepe sit corrupti expedita dolor minima. Nobis alias vitae
					officiis accusantium eveniet doloremque ratione facere maiores
					voluptate, libero nisi quae labore.
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	);
}
