import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
	const resp = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await resp.json();

	return {
		props: { ninjas: data },
	};
};

const Ninjas = ({ ninjas }) => {
	console.log(ninjas);
	return (
		<>
			<Head>
				<title>Ninja List | Ninjas</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<h1 className={styles.red}>All Ninjas</h1>
			{ninjas.map(ninja => (
				<Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
					<a className={styles.single}>
						<h3>{ninja.name}</h3>
					</a>
				</Link>
			))}
		</>
	);
};

export default Ninjas;
