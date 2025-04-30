import { fetchUserComms } from "@/services/api";

interface Props {
  params: { userId: string };
}

export default async function UserCommsPage({ params }: Props) {
  const commsData = await fetchUserComms(params.userId);

  if (!commsData) {
    return (
      <p className="text-center text-gray-500">No data found for this user!</p>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center min-h-screen w-full px-4">
      {/* Image Placeholder */}
      <div className="w-full sm:w-[40%] h-auto sm:h-[350px] flex justify-center">
        <div className="w-32 h-32 sm:w-full sm:h-full bg-gray-300 rounded-full sm:rounded-lg sm:mr-4 overflow-hidden">
          {/* Placeholder for the image */}
        </div>
      </div>

      {/* Comms Box */}
      <div className="relative max-w-lg w-full sm:w-[60%] bg-white shadow-lg rounded-lg p-6 text-gray-600 text-center sm:text-left">
        {/* Free Gift Badge */}
        {commsData.freeGift && (
          <span
            className="absolute bg-pink-500 text-purple-900 font-bold px-3 py-1 text-xs rounded-sm
            sm:top-0 sm:right-0 sm:translate-x-2 sm:-translate-y-2
            bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2"
          >
            FREE GIFT
          </span>
        )}

        {/* Title */}
        <h2 className="text-2xl font-bold text-green-600">{commsData.title}</h2>

        {/* Message */}
        <p className="mt-2">{commsData.message}</p>

        {/* Price */}
        <p className="mt-4 text-lg font-semibold text-gray-800">
          Total Price: £{commsData.totalPrice.toFixed(2)}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button className="w-full sm:w-1/2 px-4 py-2 bg-green-600 text-white font-semibold rounded">
            SEE DETAILS
          </button>
          <button className="w-full sm:w-1/2 px-4 py-2 border border-green-600 text-green-600 font-semibold rounded">
            EDIT DELIVERY
          </button>
        </div>
      </div>
    </div>
  );
}
