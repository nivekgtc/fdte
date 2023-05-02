/// <reference types="cypress" />

describe('renders the homepage and navigates to the map on button click', () => {
	it('passes', () => {
		cy.visit('http://localhost:5173');

		cy.get('button').click();

		cy.url().should('include', '/map');
	});
});
