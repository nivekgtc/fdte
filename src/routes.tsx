import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage, MapPage } from '~/pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/map',
		element: <MapPage />,
	},
]);

const Routes = () => {
	return (
		// <AppInjectionsProvider>
		<RouterProvider router={router} />
		// </AppInjectionsProvider>
	);
};

export default Routes;
