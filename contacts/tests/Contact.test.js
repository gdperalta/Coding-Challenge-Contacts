import Contact from '../Contact'

let John = new Contact({
    name: 'John Doe',
    email: 'john@company.app',
    introsOffered: {free: 5, vip: 0}
})

describe('Class Contact', () => {
    describe('Contact details', () => {
        test('first name', () => {
            expect(John.firstName()).toBe('John')
        })
        
        test('last name', () => {
            expect(John.lastName()).toBe('Doe')
        })
        
        test('email', () => {
            expect(John.email).toBe('john@company.app')
        })
        
        test('freeIntros', () => {
            expect(John.freeIntros).toBe(5)
        })
        
        test('vipIntros', () => {
            expect(John.vipIntros).toBe(0)
        })
    })

    test('isPersonalEmail', () => {
        expect(John.isPersonalEmail()).toBe(false)
    })

    describe('Ranking', () => {
        test('baseRank', () => {
            expect(John.baseRanking).toBe(3)
        })

        test('emailRank', () => {
            expect(John.emailRank()).toBe(2)
        })

        test('ranking', () => {
            expect(John.ranking()).toBe(10)
        })

        test('used personal email', () => {
            John.email = 'john@gmail.com'
            expect(John.ranking()).toBe(8)
        })
    })
})

