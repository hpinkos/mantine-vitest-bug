import { render, screen, waitFor, within } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import theme from "./Theme";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  afterAll(() => {
    vi.restoreAllMocks();
  });

  it("Displays", async () => {
    render(
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <MyComponent />
      </MantineProvider>
    );
    expect(screen.queryAllByTestId("place-row")).toHaveLength(0);
  });
});
