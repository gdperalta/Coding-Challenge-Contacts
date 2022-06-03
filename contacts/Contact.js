/*
Used by ContactOptions class to create a new Contact Class
*/
import {personalEmails} from '../utils/data/personalEmails'

class Contact {
    constructor(contact) {
        const {name, email, introsOffered} = contact
        this.name = name
        this.email = email

        const {free, vip} = introsOffered
        this.freeIntros = free
        this.vipIntros = vip
        this.baseRanking = 3
    }

    firstName(){
        return this.name.split(' ')[0]
    }

    lastName(){
        return this.name.split(' ')[1]
    }

    /*
    Checks if email is personal
    Returns true if contact used personal email, else fall will be returned
    */
    isPersonalEmail(){
        let emailDomain = this.email.split('@')[1]
        return personalEmails.includes(emailDomain)         
    }

    emailRank(){
        return this.isPersonalEmail() ? 0 : 2
    }

    ranking(){
        const ranking = this.baseRanking + this.freeIntros + this.emailRank()

        return ranking
    }
}

export default Contact;