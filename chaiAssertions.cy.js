/// <reference types="cypress" />

describe('my suite', () =>
{
    // This hook runs once before all the tests in a test suite
    before(() => 
    {      
        cy.intercept('/').as('TAU')
        cy.visit('/')
        cy.wait('@TAU')

        // Chai Asserions
        cy.url().should('include', 'applitools')
        cy.url().then((url) => 
        {
            expect(url).to.include('applitools')
        })
        cy.url().then((url) => 
        {
            assert.include(url, 'applitools')
        })
        cy.get('.jumbotron-heading').invoke('text').then((text) =>
        {
            const title = text
            cy.log(title)
            // Chai Assertions
            assert.equal
            (
                title, 
                'Test Automation University', 
                "title is not 'Test Automation University'"
            )
            expect(title).to.equal
            (
                'Test Automation University', 
                "title is not 'Test Automation University'"
            )
            title.should.equal
            (
                'Test Automation University',
                "title is not title is not Test Automation University"
            )                  
        })
    })

    // Tis hook runs once after all the tests in a test suite have completed
    after(() => 
    {
        cy.log('after hook Executed')
    })

    it('Test Case 1', () => 
    {
        cy.log('Test Case 2')
    })

    // To group a set of related tests
    context('1st context Block', () =>
    {
        // This hook runs once before all the tests in this Context Block
        before(() => 
        {   
            cy.intercept('https://testautomationu.applitools.com/ranks.html').as('TAURanks')
            cy.visit('https://testautomationu.applitools.com/ranks.html')
            cy.wait('@TAURanks')

            cy.get('.container h1:eq(0)').should('be.visible').invoke('text').then((title) =>
            {
                const Rtitle = title
                cy.log(Rtitle)

                // Chai Assertions
                assert.isString(Rtitle, "title is not String")
                assert.equal
                (
                    Rtitle,                      // Actual Title which we're going to compare
                    'About Ranks',               // Expected Title
                    "title is not 'About Ranks'" // Error Message if title isn't 'About Ranks' MEANS if Actual Title != Expected Title
                )
                expect(Rtitle).to.be.a('string').and.equal
                (
                    'About Ranks', 
                    "title is not 'About Ranks'"  // Error Message if title isn't 'About Ranks'
                )
                Rtitle.should.be.a('string').and.equal
                (
                    'About Ranks',
                    "title is not title is not 'About Ranks'"  // Error Message if title isn't 'About Ranks'
                )    
            })
        })

        it('Test 1', () => 
        {
            cy.log('Test Case 1')
            
        })
        
        it('Test 2', () => 
        {
            cy.log('Test Case 2')
        })
    })
})