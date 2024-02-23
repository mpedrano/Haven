context('Home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('title tag', () => {
        cy.title().should('eq', 'haven')
    })

    it('haven icon', () => {
        cy.get('link[rel="icon"]').should('have.attr', 'href', '/assets/haven-favi.svg');
    })

    it('main tag', () => {
        cy.get('main').should('exist');
    });

    it('header', () => {
        cy.get('header').should('exist')
    })

    it('footer', () => {
        cy.get('footer').should('exist')
    })

    it('brown dog vector', () => {
        cy.get('img[src="/assets/browndog.svg"]').should('be.visible')
    })

    it('image widths', () => {
        cy.get('img[src="/assets/headericons.svg"]').should('have.attr', 'width')
        cy.get('img[src="/assets/browndog.svg"]').should('have.attr', 'width')
    })

    it('number of h1 tags', () => {
        cy.get('h1').should('have.length', 3)
    })

    it('featured pets heading', () => {
        cy.get('h1').contains('Find Your New Best Friend 🐾');
    })

    it('about description', () => {
        cy.get('p').contains('Here at Haven, we provide the basic necessities that every animal deserves, such as food, water, and shelter. We are a dedicated non-profit organization helping animals that are seeking for a safe, new family.').should('exist');
    })
})