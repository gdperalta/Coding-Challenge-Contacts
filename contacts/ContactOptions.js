/**
 * Returns an array of a class instance of Contact sorted alphabetically
 * Offers a VIP introduction to the highest ranker among the contacts given
 * @param { Object[] } contacts - The list of contacts to be evaluated
 * See ../utils/data/Contact.js for sample contacts
 * @returns {Object[]} - Returns the list of contacts with their rankings and contact option
 */

import Contact from './Contact.js';
import { compare } from '../utils/helpers/compare.js';
class ContactOptions {
	constructor(contacts) {
		this.contacts = this.handleContacts(contacts);
	}

	handleContacts(contacts) {
		let processedContacts = contacts.map(this.createContact);
		let sortedRanks = this.sortByRanking(processedContacts);
		this.assignVip(sortedRanks[0], sortedRanks[1]);

		return this.sortByName(processedContacts);
	}

	createContact(contact) {
		return new Contact(contact);
	}

	sortByRanking(contacts) {
		let noVipOffers = this.findNoVIPOffers(contacts);
		return noVipOffers
			.sort((contactA, contactB) => compare(contactA.ranking, contactB.ranking))
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
			return compare(contactA.firstName, contactB.firstName);
		} else {
			return compare(contactA.lastName, contactB.lastName);
		}
	}

	findNoVIPOffers(contacts) {
		return contacts.filter((contact) => contact.introsOffered.vip === 0);
	}
}

export default ContactOptions;
