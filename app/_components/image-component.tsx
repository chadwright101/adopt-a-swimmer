import Image from "next/image";

interface Props {
  file: string;
  pictureCssClasses?: string;
  priority?: boolean;
  cssClasses?: string;
  phoneWidth: number;
  tabletWidth: number;
  desktopWidth: number;
}

const ImageComponent = ({
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
      <source
        media="(max-width:425px)"
        srcSet={`https://ik.imagekit.io/thewrightdesigns/tr:w-${phoneWidth},q-70/${file}`}
      />
      <source
        media="(max-width:800px)"
        srcSet={`https://ik.imagekit.io/thewrightdesigns/tr:w-${tabletWidth},q-70/${file}`}
      />
      <Image
        src={`https://ik.imagekit.io/thewrightdesigns/tr:w-${desktopWidth},q-70/${file}`}
        alt="Adopt A Swimmer - Plettenberg Bay"
        loading={priority ? "eager" : "lazy"}
        width={desktopWidth}
        height={desktopWidth * 1.25}
        className={`rounded-2xl drop-shadow-default ${cssClasses}`}
      />
    </picture>
  );
};

export default ImageComponent;
