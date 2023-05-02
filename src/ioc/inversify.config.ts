import 'reflect-metadata';

import { Container } from 'inversify';
import {
	ApiModule,
	ApplicationModule,
	ConstantsModule,
	InfraModule,
} from './modules';

const container = new Container();

try {
	container.load(
		...InfraModule,
		...ApplicationModule,
		...ApiModule,
		...ConstantsModule
	);
} catch (error) {
	console.error(error);
}

export { container };
