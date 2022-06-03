import Contact from './Contact.js';
import { CONTACTS } from '../utils/data/Contacts.js';
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

	sortByName(contacts) {
		return contacts.sort((contactA, contactB) => {
			if (contactA.lastName === contactB.lastName) {
				return this.compare(contactA.firstName, contactB.firstName);
			} else {
				return this.compare(contactA.lastName, contactB.lastName);
			}
		});
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

	findNoVIPOffers(contacts) {
		return contacts.filter((contact) => contact.introsOffered.vip === 0);
	}

	compare(x, y) {
		return x < y ? -1 : 1;
	}
}

export default ContactOptions;

let x = new ContactOptions(CONTACTS);
console.log(x.contacts);
