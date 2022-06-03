/*
Runs the code 
Creates an instance of class ContactOptions using the data CONTACTS from Contacts.js
returns JSON format of created instance
*/

import ContactOptions from './contacts/ContactOptions.js';
import { CONTACTS } from './utils/data/Contacts.js';

function Index() {
	return new ContactOptions(CONTACTS);
}

console.log(JSON.stringify(Index(), null, 2));
