/*
Tests the details of the created Class, Ranking, and checking of email if personal
*/

import Contact from '../Contact';

describe('Class: Contact', () => {
	let John = new Contact({
		name: 'John Wick Doe',
		email: 'john@company.app',
		introsOffered: { free: 5, vip: 0 },
	});
	describe('Contact details', () => {
		test('returns correct contact details', () => {
			expect(John).toEqual(
				expect.objectContaining({
					name: 'John Wick Doe',
					firstName: 'John',
					lastName: 'Doe',
					email: 'john@company.app',
					ranking: 10,
					contactOption: 'free',
				})
			);
		});

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

	describe('Ranking', () => {
		test('not personal email', () => {
			expect(John.emailRank()).toBe(2);
			expect(John.ranking).toBe(10);
		});

		test('personal email', () => {
			let Peter = new Contact({
				name: 'Peter Quill',
				email: 'peter@gmail.com',
				introsOffered: { free: 5, vip: 0 },
			});
			expect(Peter.emailRank()).toBe(0);
			expect(Peter.ranking).toBe(8);
		});
	});
});
