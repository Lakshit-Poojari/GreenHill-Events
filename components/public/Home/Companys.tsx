import Image from "next/image";

const images = [
  { src: "/Home/Company/duerr's.webp", name: "Duerr's" },
  { src: "/Home/Company/thatchers.webp", name: "Thatchers" },
  { src: "/Home/Company/sab.webp", name: "SAB" },
  { src: "/Home/Company/saracens.webp", name: "Saracens" },
  { src: "/Home/Company/twinings.avif", name: "Twinings" },
  { src: "/Home/Company/stadium.webp", name: "Stadium" },
  { src: "/Home/Company/Surrey-Kia-Oval-Logo.svg", name: "Surrey Kia Oval" },
  { src: "/Home/Company/srm.webp", name: "SRM" },
];

const itemClass = `
  relative shrink-0
  w-[calc(100vw-80px)]
  sm:w-[calc((100vw-112px)/2)]
  md:w-[calc((100vw-128px)/3)]
  lg:w-[calc((100vw-160px)/4)]
  h-20 sm:h-24 md:h-28 lg:h-30
`;

export const Companys = () => (
  <div className="overflow-hidden">
    <div className="flex w-max company-slider">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
          {images.map(({ src, name }, i) => (
            <div key={`${copy}-${src}`} className={itemClass}>
              <Image
                src={src}
                alt={copy === 0 ? name : ""}
                fill
                sizes="240px"
                loading={copy === 0 && i < 4 ? "eager" : "lazy"}
                className="object-contain px-4 sm:px-6 md:px-8 lg:px-10"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Companys;
