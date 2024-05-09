interface Props {
  cssClasses?: string;
}

const HeroSection = ({ cssClasses }: Props) => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      poster="/video-poster-desktop.webp"
      className={cssClasses}
    >
      <source
        src="/video/phone.mp4"
        type="video/mp4"
        media="(max-width: 424px)"
      />
      <source
        src="/video/tablet.mp4"
        type="video/mp4"
        media="(min-width: 425px) and (max-width: 800px)"
      />
      <source
        src="/video/desktop.mp4"
        type="video/mp4"
        media="(min-width: 801px)"
      />
      <source
        src="/video/phone.webm"
        type="video/webm"
        media="(max-width: 424px)"
      />
      <source
        src="/video/tablet.webm"
        type="video/webm"
        media="(min-width: 425px) and (max-width: 800px)"
      />
      <source
        src="/video/desktop.webm"
        type="video/webm"
        media="(min-width: 801px)"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroSection;
