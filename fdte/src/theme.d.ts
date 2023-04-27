import "styled-components";

import { TypedTheme } from "./presentation/styles/theme";

export declare module "styled-components" {
  export interface DefaultTheme extends TypedTheme {
    // keyofPlus: any
  }
}
