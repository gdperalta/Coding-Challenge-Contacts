# **Javascript Coding Challenge**

## **Challenge: Contact Options**

- Return all contacts, ordered alphabetically by their **last** name, and then by their **first** name
- For each contact, also include their calculated ranking and contact option (`VIP` or `free`)

## **Getting Started**

These instructions will get you a copy of the code up and running on your local machine.

- Clone the repository and navigate to main app directory

```bash
git clone https://github.com/gdperalta/Coding-Challenge-Contacts.git
cd Coding-Challenge-Contacts
```

- Install packages

```bash
npm install
```

## **Running the program**

### **Sample contact list**

Run the program with a sample contact list in the app

```javascript
[
	{
		name: 'John Doe',
		email: 'john@brdg.app',
		introsOffered: { free: 3, vip: 0 },
	},
	{
		name: 'Billy Ray Jenkins',
		email: 'billy.jenkins@gmail.com',
		introsOffered: { free: 5, vip: 0 },
	},
	{
		name: 'Jenny Baggins',
		email: 'jeni@x.com',
		introsOffered: { free: 5, vip: 1 },
	},
	{
		name: 'Lloyd Banks',
		email: 'lloyd@banks.com',
		introsOffered: { free: 0, vip: 0 },
	},
	{
		name: 'BA Lewis',
		email: 'ba.lewis@outlook.com',
		introsOffered: { free: 8, vip: 0 },
	},
	{
		name: 'John Johnson',
		email: 'jj@z.com',
		introsOffered: { free: 4, vip: 0 },
	},
	{
		name: 'Adam Johnson',
		email: 'aj@z.com',
		introsOffered: { free: 4, vip: 0 },
	},
	{
		name: 'Joey Simpson',
		email: 'joey@hotmail.com',
		introsOffered: { free: 9, vip: 1 },
	},
	{
		name: 'Penny Smith',
		email: 'penny@smith.com',
		introsOffered: { free: 2, vip: 0 },
	},
];
```

Run `node index.js` to execute the program

**Response**

```javascript
{
  "contacts": [
    {
      "name": "Jenny Baggins",
      "firstName": "Jenny",
      "lastName": "Baggins",
      "email": "jeni@x.com",
      "introsOffered": {
        "free": 5,
        "vip": 1
      },
      "ranking": 10,
      "contactOption": "free"
    },
    {
      "name": "Lloyd Banks",
      "firstName": "Lloyd",
      "lastName": "Banks",
      "email": "lloyd@banks.com",
      "introsOffered": {
        "free": 0,
        "vip": 0
      },
      "ranking": 5,
      "contactOption": "free"
    },
    {
      "name": "John Doe",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@brdg.app",
      "introsOffered": {
        "free": 3,
        "vip": 0
      },
      "ranking": 8,
      "contactOption": "free"
    },
    {
      "name": "Billy Ray Jenkins",
      "firstName": "Billy",
      "lastName": "Jenkins",
      "email": "billy.jenkins@gmail.com",
      "introsOffered": {
        "free": 5,
        "vip": 0
      },
      "ranking": 8,
      "contactOption": "free"
    },
    {
      "name": "Adam Johnson",
      "firstName": "Adam",
      "lastName": "Johnson",
      "email": "aj@z.com",
      "introsOffered": {
        "free": 4,
        "vip": 0
      },
      "ranking": 9,
      "contactOption": "free"
    },
    {
      "name": "John Johnson",
      "firstName": "John",
      "lastName": "Johnson",
      "email": "jj@z.com",
      "introsOffered": {
        "free": 4,
        "vip": 0
      },
      "ranking": 9,
      "contactOption": "free"
    },
    {
      "name": "BA Lewis",
      "firstName": "BA",
      "lastName": "Lewis",
      "email": "ba.lewis@outlook.com",
      "introsOffered": {
        "free": 8,
        "vip": 0
      },
      "ranking": 11,
      "contactOption": "VIP"
    },
    {
      "name": "Joey Simpson",
      "firstName": "Joey",
      "lastName": "Simpson",
      "email": "joey@hotmail.com",
      "introsOffered": {
        "free": 9,
        "vip": 1
      },
      "ranking": 12,
      "contactOption": "free"
    },
    {
      "name": "Penny Smith",
      "firstName": "Penny",
      "lastName": "Smith",
      "email": "penny@smith.com",
      "introsOffered": {
        "free": 2,
        "vip": 0
      },
      "ranking": 7,
      "contactOption": "free"
    }
  ]
}
```

## **Tests**

The program uses _Jest_ to test the logic of the program.

The ContactOptions and Contact classes are tested.

To run the tests, run `npm test` on the terminal.

To run specific tests, input the the file you want to test. For example:

```bash
npm test contacts/tests/ContactOptions.test.js
```

Replace ContactOptions with the file you want to test.

## **Dependencies**

- Jest - For testing the program
