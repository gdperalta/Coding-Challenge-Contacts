/*
Used by ContactOptions class to create a new Contact Class
Returns the following value:
{
	name: string,
	firstName: string,
	lastName: string,
	email: string,
	introsOffered: {free: integer, vip: integer},
	ranking: integer,
	contactOption: string
}
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
    Checks if email is personal
    Returns true if contact used personal email, else fall will be returned
    */
	isPersonalEmail() {
		let emailDomain = this.email.split('@')[1];
		return personalEmails.includes(emailDomain);
	}

	emailRank() {
		return this.isPersonalEmail() ? 0 : 2;
	}

	computeRanking() {
		const baseRanking = 3;
		const ranking = baseRanking + this.introsOffered.free + this.emailRank();

		return ranking;
	}
}

export default Contact;
