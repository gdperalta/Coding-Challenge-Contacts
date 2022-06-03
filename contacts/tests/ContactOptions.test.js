import { CONTACTS } from '../../utils/data/Contacts';
import ContactOptions from '../ContactOptions';

describe('Class: ContactOptions', () => {
	let contactOptions = new ContactOptions(CONTACTS);
	let contacts = contactOptions.contacts;
	describe('Contacts', () => {
		test('returns correct contact details', () => {
			expect(contacts[0]).toEqual(
				expect.objectContaining({
					firstName: 'Jenny',
					lastName: 'Baggins',
					email: 'jeni@x.com',
					ranking: 10,
					contactOption: 'free',
				})
			);
		});

		describe('sorts contacts alphabetically', () => {
			test('first contact', () => {
				expect(contacts[0]).toEqual(
					expect.objectContaining({
						firstName: 'Jenny',
						lastName: 'Baggins',
					})
				);
			});

			test('fourth contact', () => {
				expect(contacts[3]).toEqual(
					expect.objectContaining({
						firstName: 'Billy',
						lastName: 'Jenkins',
					})
				);
			});

			test('fifth contact', () => {
				expect(contacts[4]).toEqual(
					expect.objectContaining({
						firstName: 'Adam',
						lastName: 'Johnson',
					})
				);
			});

			test('last contact', () => {
				let length = contacts.length;
				expect(contacts[length - 1]).toEqual(
					expect.objectContaining({
						firstName: 'Penny',
						lastName: 'Smith',
					})
				);
			});
		});

		describe('Introductions offered', () => {
			test('only the highest ranker gets VIP offer', () => {
				let highestRanker = contacts[6];
				let freeOfferContacts = contacts.map((contact, i) => i != 6);
				expect(highestRanker).toEqual(
					expect.objectContaining({
						firstName: 'BA',
						lastName: 'Lewis',
						contactOption: 'VIP',
					})
				);

				expect(freeOfferContacts).toEqual(
					expect.arrayContaining([
						expect.not.objectContaining({
							contactOptions: 'VIP',
						}),
					])
				);
			});

			test('no VIP if there are 2 or more highest rankers', () => {
				let newContacts = [
					{
						name: 'BA Lewis',
						email: 'ba.lewis@outlook.com',
						introsOffered: { free: 6, vip: 0 },
					},
					{
						name: 'John Johnson',
						email: 'jj@z.com',
						introsOffered: { free: 6, vip: 0 },
					},
					{
						name: 'Lloyd Banks',
						email: 'lloyd@banks.com',
						introsOffered: { free: 4, vip: 0 },
					},
				];

				let equalContacts = new ContactOptions(newContacts);

				expect(equalContacts.contacts).toEqual(
					expect.arrayContaining([
						expect.not.objectContaining({
							contactOptions: 'VIP',
						}),
					])
				);
			});
		});

		describe('Unit tests', () => {
			describe('findNoVipOffers', () => {
				test('returns array of contacts with no vip offers', () => {
					expect(contacts).toEqual(
						expect.arrayContaining([
							expect.not.objectContaining({
								introsOffered: {
									vip: 0,
								},
							}),
						])
					);
				});
			});
		});
	});
});
