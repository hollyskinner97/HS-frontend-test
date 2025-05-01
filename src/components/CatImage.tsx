import Image from "next/image";
import LunaImage from "../assets/Luna.jpg";

interface CatImageProps {
  isMobile: boolean;
}

export default function CatImage({ isMobile }: CatImageProps) {
  if (isMobile) {
    // mobile: circular image, absolute positioning overlapping the top of the comms box
    return (
      <div className="sm:hidden absolute -top-14 z-10 left-1/2 transform -translate-x-1/2">
        <Image
          src={LunaImage}
          alt="Luna"
          className="w-28 h-28 object-cover rounded-full"
          priority
        />
      </div>
    );
  }

  // desktop: positioned to the left of the box, same height as comms box
  return (
    <div className="hidden sm:block sm:w-[350px] sm:h-[450px] flex-shrink-0 rounded-md overflow-visible">
      <Image
        src={LunaImage}
        alt="Luna"
        className="w-full h-full object-cover rounded-md"
        priority
      />
    </div>
  );
}
