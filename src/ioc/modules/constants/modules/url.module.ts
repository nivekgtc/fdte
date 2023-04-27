import { ContainerModule } from "inversify";
import { ConstantsTypes } from "~/ioc/types/constants";

export const UrlConstantsModule = new ContainerModule((bind) => {
  bind<string>(ConstantsTypes.ROUTE.MAP).toConstantValue('/map');
});
