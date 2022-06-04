/**
 * Used for sort method to compare values
 * @param { string, number } x - The first value to be compared
 * @param { string, number } y - The second value to be compared
 * @returns { number } - Returns 1 or -1 depending on which is greater
 */
export const compare = (x, y) => {
	return x < y ? -1 : 1;
};
