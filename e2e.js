// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

before(() => 
{
    chai = require('chai');
    assert = chai.assert;
    expect = chai.expect;
    should = chai.should();

    // The first two, that is expect and should, are BDD styles, and assert is a TDD style assertion library
    // BDD, also known as behavior-driven development language, provides an expressive language and readable style, 
    // whereas TDD also known as test-driven development, provides more of a classical feel.
});
  
