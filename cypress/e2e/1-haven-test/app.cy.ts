context('Home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('title tag', () => {
        cy.title().should('eq', 'haven')
    })
})