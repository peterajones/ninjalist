export const getStaticPaths = async () => {
	const resp = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await resp.json();

	const paths = data.map(ninja => {
		return {
			params: { id: ninja.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async context => {
	const id = context.params.id;
	const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const data = await resp.json();

	return {
		props: { ninja: data },
	};
};

const Details = ({ ninja }) => {
	return (
		<div>
			<h1>{ninja.name}</h1>
			<p>{ninja.email}</p>
			<p>
				<strong>website:</strong> {ninja.website}
			</p>
			<p>
				<strong>city:</strong> {ninja.address.city}
			</p>
		</div>
	);
};

export default Details;
