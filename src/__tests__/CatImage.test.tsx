import { render, screen } from "@testing-library/react";
import CatImage from "../components/CatImage";

describe("CatImage", () => {
  it("renders the desktop image in desktop mode", () => {
    render(<CatImage isMobile={false} />);
    const img = screen.getByAltText("Luna");
    // The wrapper should have the desktop-only classes
    expect(img.closest("div")).toHaveClass("hidden", "sm:block");
  });

  it("renders the mobile circular image in mobile mode", () => {
    render(<CatImage isMobile={true} />);
    const img = screen.getByAltText("Luna");
    // The wrapper should have the mobile-only classes
    expect(img.closest("div")).toHaveClass("sm:hidden", "-top-14");
  });
});
