module.exports = function getZerosCount(number, base) {

	const dividers = [];
	let remainder = base,
		argNum = number,
		count = 0;

	for (let div = 2; remainder > 1; div++) { 
		if (remainder % div == 0) {
			remainder /= div;
			dividers.push(div);
		}
		if ( div == base ) div = 1;
	}
	
	const sortedDividers = dividers.sort((a,b) => a < b );
	
	while (argNum > 0) {
		argNum = Math.floor(argNum / sortedDividers[0]);
		count += argNum;
	}

	return count;

}