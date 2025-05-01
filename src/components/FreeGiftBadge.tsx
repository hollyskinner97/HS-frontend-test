interface FreeGiftBadgeProps {
  isMobile: boolean;
}

export default function FreeGiftBadge({ isMobile }: FreeGiftBadgeProps) {
  return (
    <div
      className={`absolute bg-[#eda3f3] text-[#a20282] text-xs font-bold px-4 py-1.5 shadow-md rotate-[6deg] ${
        isMobile
          ? "sm:hidden bottom-[-1rem] left-1/2 transform -translate-x-1/2"
          : "hidden sm:block -top-4 -right-4"
      }`}
    >
      FREE GIFT
    </div>
  );
}
