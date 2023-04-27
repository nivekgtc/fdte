import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"
import { ContainerProvider } from "."
import { Provider } from "react-redux"
import store from "~/store/store"
import { container } from "~/ioc/inversify.config"

const AppInjectionsProvider: React.FC<any> = ({
  children,
}) => {
  return children
  // (
  //   <ThemeProvider theme={theme}>
  //     <Provider store={store}>
  //       <ContainerProvider container={container}>
  //         {children}
  //       </ContainerProvider>
  //     </Provider>
  //   </ThemeProvider>
  // )
}

export default AppInjectionsProvider
