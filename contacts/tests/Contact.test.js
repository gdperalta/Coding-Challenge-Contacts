/*
Tests the details of the created Class, Ranking, and checking of email if personal
*/

import Contact from '../Contact';

let John = new Contact({
	name: 'John Wick Doe',
	email: 'john@company.app',
	introsOffered: { free: 5, vip: 0 },
});

describe('Class Contact', () => {
	describe('Contact details', () => {
		test('first name', () => {
			expect(John.firstName).toBe('John');
		});

		test('last name', () => {
			expect(John.lastName).toBe('Doe');
		});

		test('email', () => {
			expect(John.email).toBe('john@company.app');
		});

		test('introsOffered', () => {
			expect(John.introsOffered).toEqual(
				expect.objectContaining({
					free: 5,
					vip: 0,
				})
			);
		});

		test('contact option', () => {
			expect(John.contactOption).toBe('free');
		});
	});

	test('isPersonalEmail', () => {
		expect(John.isPersonalEmail()).toBe(false);
	});

	describe('Ranking', () => {
		test('emailRank', () => {
			expect(John.emailRank()).toBe(2);
		});

		test('ranking', () => {
			expect(John.ranking).toBe(10);
		});

		test('personal email', () => {
			let Peter = new Contact({
				name: 'Peter Quill',
				email: 'john@gmail.com',
				introsOffered: { free: 5, vip: 0 },
			});
			expect(Peter.ranking).toBe(8);
		});
	});
});
