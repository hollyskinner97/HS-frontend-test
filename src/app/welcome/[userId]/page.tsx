import { fetchUserComms } from "@/services/api";
import Image from "next/image";
import LunaImage from "../../../assets/Luna.jpg";

interface Props {
  params: { userId: string };
}

export default async function UserCommsPage({ params }: Props) {
  const { userId } = params;
  const commsData = await fetchUserComms(userId);

  if (!commsData) {
    return (
      <p className="text-center text-gray-500">No data found for this user!</p>
    );
  }

  return (
    <div className="relative flex flex-col sm:flex-row justify-center items-center min-h-screen w-full px-4">
      {/* Desktop Image */}
      <div className="hidden sm:block sm:w-[350px] sm:h-[450px] flex-shrink-0 rounded-md overflow-visible">
        <Image
          src={LunaImage}
          alt="Luna"
          className="w-full h-full object-cover rounded-md"
          priority
        />
      </div>

      {/* Comms Box */}
      <div className="relative bg-white rounded-md w-full max-w-md sm:max-w-2xl h-[450px] flex flex-col justify-between items-center px-4 py-20 text-gray-700 text-center sm:text-left border-2 border-gray-300 overflow-visible">
        {/* Mobile circular image */}
        <div className="sm:hidden absolute -top-14 z-10">
          <Image
            src={LunaImage}
            alt="Luna"
            className="w-28 h-28 object-cover rounded-full"
            priority
          />
        </div>

        {/* FREE GIFT - Desktop */}
        {commsData.freeGift && (
          <div className="hidden sm:block absolute -top-4 -right-4 bg-[#eda3f3] text-[#a20282] text-xs font-bold px-4 py-1.5 shadow-md rotate-[8deg]">
            FREE GIFT
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col gap-3 sm:gap-4 mb-4">
          <h2 className="text-2xl font-bold text-green-600">
            {commsData.title}
          </h2>
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

        {/* FREE GIFT - Mobile */}
        {commsData.freeGift && (
          <div className="sm:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#eda3f3] text-[#a20282] text-xs font-bold px-4 py-1.5 shadow-md rotate-[5deg]">
            FREE GIFT
          </div>
        )}
      </div>

      {/* Footnote */}
      <div className="absolute bottom-2 text-[12px] text-gray-500 text-center w-full">
        Featuring an image of my cat, Luna. Don't be fooled, she is a menace.
      </div>
    </div>
  );
}
