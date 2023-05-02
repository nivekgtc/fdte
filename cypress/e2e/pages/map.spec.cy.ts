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

	// it('should create from scratcha a pokemon', () => {
	// 	cy.visit('http://localhost:5173/map');

	// 	cy.wait(1000);

	// 	cy.get('[data-cy="button-create-pokemon"]').click();

	// 	cy.wait(400);

	// 	cy.get('[data-cy="create-or-edit-scratch"]').should('be.visible');

	// 	cy.get('[name="name"]').type('Pokemon Create');
	// 	cy.get('[name="hp"]').type('40');
	// 	cy.get('[name="weight"]').type('40');
	// 	cy.get('[name="height"]').type('120');

	// 	cy.get('[id="type"]').click();

	// 	cy.contains('fighting').click();

	// 	cy.get('[id="type"]').click();

	// 	cy.get('[id="abilities.0"]').click();
	// 	cy.contains('stench').click();
	// 	cy.get('[id="abilities.1"]').click();
	// 	cy.contains('drizzle').click();
	// 	cy.get('[id="abilities.2"]').click();
	// 	cy.contains('sturdy').click();
	// 	cy.get('[id="abilities.3"]').click();
	// 	cy.contains('speed-boost').click();
	// 	cy.get('[id="abilities.4"]').click();
	// 	cy.contains('damp').click();

	// 	cy.get('[name="stats.defense"]').type('20');
	// 	cy.get('[name="stats.attack"]').type('20');
	// 	cy.get('[name="stats.special-defense"]').type('20');
	// 	cy.get('[name="stats.special-attack"]').type('20');
	// 	cy.get('[name="stats.speed"]').type('20');
	// });
});
