import { render, screen } from "@testing-library/react";
import CommsBox from "../components/CommsBox";

const mockData = {
  title: "Your next delivery for Willie and Chaz",
  message:
    "Hey Herman! In two days' time, we'll be charging you for your next order for Willie and Chaz's fresh food.",
  totalPrice: 125.5,
  freeGift: true,
};

describe("CommsBox", () => {
  it("should render the title, message, and price", () => {
    render(<CommsBox commsData={mockData} />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Your next delivery for Willie and Chaz"
    );
    expect(
      screen.getByText(
        "Hey Herman! In two days' time, we'll be charging you for your next order for Willie and Chaz's fresh food."
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/£125\.50/)).toBeInTheDocument();
  });

  it("should render two buttons with the correct labels", () => {
    render(<CommsBox commsData={mockData} />);
    expect(
      screen.getByRole("button", { name: /see details/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /edit delivery/i })
    ).toBeInTheDocument();
  });

  it("should show the desktop version of the free gift badge in desktop view", () => {
    render(<CommsBox commsData={mockData} />);
    const badges = screen.getAllByText("FREE GIFT");
    const desktopBadge = badges.find(
      (b) => b.classList.contains("hidden") && b.classList.contains("sm:block")
    );
    expect(desktopBadge).toBeDefined();
    expect(desktopBadge).toHaveClass("hidden", "sm:block");
  });

  it("should show the mobile version of the free gift badge in mobile view", () => {
    // Simulate mobile view by rendering the badge directly
    render(<CommsBox commsData={{ ...mockData, freeGift: true }} />);
    const badges = screen.getAllByText("FREE GIFT");
    // pick the one that has the mobile-only class
    const mobileBadge = badges.find((b) => b.classList.contains("sm:hidden"));
    expect(mobileBadge).toBeDefined();
    expect(mobileBadge).toHaveClass("sm:hidden");
  });
});
