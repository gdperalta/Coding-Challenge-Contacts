/*
Returns an array of a class instance of Contact sorted alphabetically
Offers a VIP introduction to the highest ranker among the contacts given
*/

import Contact from './Contact.js';
class ContactOptions {
	constructor(contacts) {
		this.contacts = this.handleContacts(contacts);
	}

	handleContacts(contacts) {
		let newContacts = contacts.map(this.createContact);
		let sortedRanks = this.sortByRanking(newContacts);
		this.assignVip(sortedRanks[0], sortedRanks[1]);

		return this.sortByName(newContacts);
	}

	createContact(contact) {
		return new Contact(contact);
	}

	sortByRanking(contacts) {
		let noVipOffers = this.findNoVIPOffers(contacts);
		return noVipOffers
			.sort((contactA, contactB) =>
				this.compare(contactA.ranking, contactB.ranking)
			)
			.reverse();
	}

	assignVip(firstRanker, secondRanker) {
		if (firstRanker.ranking !== secondRanker.ranking) {
			firstRanker.contactOption = 'VIP';
		}
	}

	sortByName(contacts) {
		return contacts.sort((contactA, contactB) => {
			return this.compareName(contactA, contactB);
		});
	}

	compareName(contactA, contactB) {
		if (contactA.lastName === contactB.lastName) {
			return this.compare(contactA.firstName, contactB.firstName);
		} else {
			return this.compare(contactA.lastName, contactB.lastName);
		}
	}

	findNoVIPOffers(contacts) {
		return contacts.filter((contact) => contact.introsOffered.vip === 0);
	}

	compare(x, y) {
		return x < y ? -1 : 1;
	}
}

export default ContactOptions;
