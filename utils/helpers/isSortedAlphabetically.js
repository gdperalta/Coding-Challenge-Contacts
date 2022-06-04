/**
 * Accepts array of objects with a firstName and lastName key
 * @param { Object[] } array - The array of objects to be check
 * @param { string } array[].firstName - The first name of the object
 * @param { string } array[].lastName - The last name of the object
 * @returns { boolean } - True if sorted. False if not
 */
export const isSortedAlphabetically = (array) => {
	let arrSize = array.length;

	let isSorted = array.every((item, i) => {
		if (i + 1 !== arrSize) {
			if (item.lastName === array[i + 1].lastName) {
				return item.firstName < array[i + 1].firstName;
			} else {
				return item.lastName < array[i + 1].lastName;
			}
		} else {
			return true;
		}
	});

	return isSorted;
};
