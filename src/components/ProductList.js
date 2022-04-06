import { useDeferredValue } from 'react';

function ProductList({ products }) {
	return (
		<ul>
			{products.map((product, idx) => (
				<li key={idx}>{product}</li>
			))}
		</ul>
	);
}

export default ProductList;
