/**
 *Used by ContactOptions class to create a new Contact Class
 * @param { Object } contact
 * @param { string } contact.name
 * @param { string } contact.email
 * @param { Object } contact.introsOffered
 * @param { string } contact.introsOffered.free
 * @param { string } contact.introsOffered.vip
 * @returns {Object} - Returns the following object:
 * {
 *	name: string,
 *	firstName: string,
 *	lastName: string,
 *	email: string,
 *	introsOffered: {free: number, vip: number},
 *	ranking: number,
 *	contactOption: string
 * }
 */

import { personalEmails } from '../utils/data/personalEmails.js';

class Contact {
	constructor(contact) {
		const { name, email, introsOffered } = contact;
		this.name = name;
		this.firstName = this.firstName(name);
		this.lastName = this.lastName(name);
		this.email = email;
		this.introsOffered = introsOffered;
		this.ranking = this.computeRanking();
		this.contactOption = 'free';
	}

	firstName(name) {
		return name.split(' ')[0];
	}

	lastName(name) {
		let nameArray = name.split(' ');

		return nameArray[nameArray.length - 1];
	}

	/*
	 * Checks if email is personal
	 * Returns true if contact used personal email, else fall will be returned
	 */
	isPersonalEmail() {
		let emailDomain = this.email.split('@')[1];
		return personalEmails.includes(emailDomain);
	}

	emailRank() {
		return this.isPersonalEmail() ? 0 : 2;
	}

	/**
	 * ranking = baseRanking + number of free intros + email rank
	 */
	computeRanking() {
		const baseRanking = 3;
		const ranking = baseRanking + this.introsOffered.free + this.emailRank();

		return ranking;
	}
}

export default Contact;
