/// <reference types="cypress" />

describe('MapPage', () => {
	it('should render the sidebar and the AshAvatar', () => {
		cy.visit('http://localhost:5173/map');
		// cy.visit('/map');

		cy.get('[data-cy="sidebar"]').should('be.visible');
		cy.get('[data-cy="ash-avatar"]').should('be.visible');
	});

	it('should render the tooltip when hover ash', () => {
		cy.visit('http://localhost:5173/map');

		cy.get('[data-cy="ash-avatar"]').trigger('mouseenter');

		cy.get('[data-cy="ash-tooltip"').should('be.visible');
	});

	it('should render the capture modal component when click at ash avatar', () => {
		cy.visit('http://localhost:5173/map');

		cy.get('[data-cy="ash-image"]').click();

		cy.wait(2000);

		cy.get('[data-cy="modal-layout"]').should('be.visible');
	});

	it('should capture pokemon from api to pokeball', () => {
		cy.visit('http://localhost:5173/map');

		cy.get('[data-cy="ash-image"]').click();

		cy.wait(2000);

		cy.get('[data-cy="modal-layout"]').should('be.visible');

		cy.get('[data-cy="capture-button"]').scrollIntoView().wait(500);

		cy.get('[data-cy="capture-button"]').click();
	});

	it('should edit name of a pokemon', () => {
		cy.visit('http://localhost:5173/map');

		cy.wait(1000);

		cy.get('[data-cy="ash-image"]').click();

		cy.wait(2000);

		cy.get('[data-cy="modal-layout"]').should('be.visible');

		cy.get('[data-cy="capture-button"]').scrollIntoView().wait(500);

		cy.get('[data-cy="capture-button"]').click().wait(1000);

		cy.get('[data-cy="sidebar"] ul')
			.first()
			.within(() => {
				cy.get('li').first().click();
			});

		cy.wait(1000);
		// .click();

		cy.get('[data-cy="modal"]').should('be.visible');

		cy.get('[data-cy="modal"] .name image')
			.should('be.visible')
			.click()
			.wait(500);

		cy.get('[data-cy="modal"] .edit input')
			.should('be.visible')
			.clear()
			.type('FDTEMON')
			.wait(300);

		cy.get('[data-cy="modal"] .edit button')
			.first()
			.should('be.visible')
			.click()
			.wait(300);

		cy.get('[data-cy="modal"] .name h1').should('have.text', 'FDTEMON');

		cy.get('[data-cy="modal-layout"] .close-container')
			.scrollIntoView()
			.click();
	});
});
