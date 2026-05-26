import Image from "next/image";

export interface BannerSlideData {
  title?: string;
  description?: string;
  image?: {
    node?: {
      mediaItemUrl?: string;
    };
  };
  link?: string;
  buttonText?: string;
}

interface BannerSlideProps {
  slide: BannerSlideData;
  index: number;
}

export const BannerSlide = ({ slide, index }: BannerSlideProps) => {
  const imageUrl = slide?.image?.node?.mediaItemUrl || "/no-image.jpeg";

  return (
    <div className="relative w-full h-[440px] md:h-[520px] lg:h-[670px] ">
      <Image
        src={imageUrl}
        alt={slide?.title || `Banner slide ${index + 1}`}
        fill
        className="object-cover"
        priority={index === 0}
        sizes="100vw"
        quality={85}
        fetchPriority="high"
      />
    </div>
  );
};
