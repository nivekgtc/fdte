/**
 * @vitest-environment jsdom
 */

import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, vitest } from 'vitest';

import { theme } from '~/presentation/styles/theme';
import Home from './home';

const navigateMock = vitest.fn();

vitest.mock('react-router-dom', () => ({
	useNavigate: () => navigateMock,
}));

describe('HomePage', () => {
	test('should have the pokemon image and the button', () => {
		render(<Home theme={theme} />);

		// expect(screen.findByTestId('logo')).toBeInTheDocument();

		expect(screen.getByText('Start')).toBeInTheDocument();
	});

	test('clicking the start bnutton navigates to the map page', () => {
		const { getByText } = render(<Home theme={theme} />);

		const startButton = getByText('Start');

		fireEvent.click(startButton);

		expect(navigateMock).toHaveBeenCalledWith('/map');
	});
});
