import { render, screen } from "@testing-library/react";
import FreeGiftBadge from "../components/FreeGiftBadge";

describe("FreeGiftBadge", () => {
  it("renders desktop badge when isMobile=false", () => {
    render(<FreeGiftBadge isMobile={false} />);
    const badge = screen.getByText("FREE GIFT");
    expect(badge).toHaveClass("hidden", "sm:block");
  });

  it("renders mobile badge when isMobile=true", () => {
    render(<FreeGiftBadge isMobile={true} />);
    const badge = screen.getByText("FREE GIFT");
    expect(badge).toHaveClass("sm:hidden");
  });
});
