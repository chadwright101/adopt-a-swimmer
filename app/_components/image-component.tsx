import Image from "next/image";

interface Props {
  folder: string;
  file: string;
  pictureCssClasses?: string;
  priority?: boolean;
  cssClasses?: string;
  phoneWidth: number;
  tabletWidth: number;
  desktopWidth: number;
}

const ImageComponent = ({
  folder,
  file,
  cssClasses,
  pictureCssClasses,
  priority,
  phoneWidth,
  tabletWidth,
  desktopWidth,
}: Props) => {
  return (
    <picture className={pictureCssClasses}>
      <Image
        src={file}
        alt="Adopt A Swimmer - Plettenberg Bay"
        loading={priority ? "eager" : "lazy"}
        width={desktopWidth}
        height={desktopWidth * 1.25}
        className={cssClasses}
      />
      {/* <source
        media="(max-width:425px)"
        srcSet={`https://ik.imagekit.io/thewrightdesigns/monks-medical/${folder}/tr:w-${phoneWidth},q-75/${file}`}
      />
      <source
        media="(max-width:800px)"
        srcSet={`https://ik.imagekit.io/thewrightdesigns/monks-medical/${folder}/tr:w-${tabletWidth},q-75/${file}`}
      />
      <Image
        src={`https://ik.imagekit.io/thewrightdesigns/monks-medical/${folder}/tr:w-${desktopWidth},q-75/${file}`}
        alt="Adopt A Swimmer - Plettenberg Bay"
        loading={priority ? "eager" : "lazy"}
        width={desktopWidth}
        height={desktopWidth * 1.25}
        className={cssClasses}
      /> */}
    </picture>
  );
};

export default ImageComponent;
