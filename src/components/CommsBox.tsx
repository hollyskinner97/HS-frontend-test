import FreeGiftBadge from "./FreeGiftBadge";

interface CommsBoxProps {
  commsData: {
    freeGift: boolean;
    title: string;
    message: string;
    totalPrice: number;
  };
}

export default function CommsBox({ commsData }: CommsBoxProps) {
  return (
    <div className="relative bg-white rounded-md h-[450px] flex flex-col justify-between items-center px-4 py-20 text-gray-700 text-center sm:text-left border-2 border-gray-300 overflow-visible">
      {/* FREE GIFT – desktop */}
      {commsData.freeGift && <FreeGiftBadge isMobile={false} />}

      {/* Content */}
      <div className="flex flex-col gap-3 sm:gap-4 mb-4">
        <h2 className="text-2xl font-bold text-green-600">{commsData.title}</h2>
        <p>{commsData.message}</p>
        <p className="text-lg font-semibold">
          Total price: £{commsData.totalPrice.toFixed(2)}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-row justify-center gap-4 mt-2 w-full">
        <button className="w-1/2 px-4 py-2.5 bg-green-600 text-white font-semibold rounded-md">
          SEE DETAILS
        </button>
        <button className="w-1/2 px-4 py-2.5 border-2 border-green-600 text-green-600 font-semibold rounded-md">
          EDIT DELIVERY
        </button>
      </div>

      {/* FREE GIFT – mobile */}
      {commsData.freeGift && <FreeGiftBadge isMobile={true} />}
    </div>
  );
}
