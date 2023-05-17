import { render, screen, waitFor, within } from "@testing-library/react";
import { Theme, ThemeProvider } from "@emotion/react";
import theme from "./Theme";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  afterAll(() => {
    vi.restoreAllMocks();
  });

  it("Displays", async () => {
    render(
      <ThemeProvider theme={theme as Partial<Theme>}>
        <MyComponent />
      </ThemeProvider>
    );
    expect(screen.queryAllByTestId("place-row")).toHaveLength(0);
  });
});
