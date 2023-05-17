import { MantineProvider } from "@mantine/core";
import MyComponent from "./MyComponent";
import theme from "./Theme";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <MyComponent />
    </MantineProvider>
  );
}

export default App;
