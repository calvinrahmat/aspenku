export function priceLow(a, b) {
	const hargaA = a.sell_price;
	const hargaB = b.sell_price;

	let comparison = 0;
	if (hargaA > hargaB) {
		comparison = 1;
	} else if (hargaA < hargaB) {
		comparison = -1;
	}
	return comparison;
}

export function priceHigh(a, b) {
	const hargaA = a.sell_price;
	const hargaB = b.sell_price;

	let comparison = 0;
	if (hargaA < hargaB) {
		comparison = 1;
	} else if (hargaA > hargaB) {
		comparison = -1;
	}
	return comparison;
}
