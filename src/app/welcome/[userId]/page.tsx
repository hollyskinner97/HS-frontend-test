import { fetchUserComms } from "../../../services/api";
import CommsBox from "../../../components/CommsBox";
import CatImage from "../../../components/CatImage";

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
      <CatImage isMobile={false} />

      {/* Comms Box wrapper */}
      <div className="relative w-full max-w-md sm:max-w-2xl">
        {/* Mobile Circular Image */}
        <CatImage isMobile={true} />

        {/* Comms Box */}
        <CommsBox commsData={commsData} />
      </div>

      {/* Footnote */}
      <div className="absolute bottom-2 text-[12px] text-gray-500 text-center w-full">
        Featuring an image of my cat, Luna. Don't be fooled, she is a menace.
      </div>
    </div>
  );
}
