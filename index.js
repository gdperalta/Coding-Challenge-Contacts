/*
Runs the code 
Creates an instance of class ContactOptions using the data CONTACTS from Contacts.js
Displays object result in JSON format in the terminal
*/

import ContactOptions from './contacts/ContactOptions.js';
import { CONTACTS } from './utils/data/Contacts.js';

const contactOptions = new ContactOptions(CONTACTS);

console.log(JSON.stringify(contactOptions, null, 2));
