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
      poster="/assets/video-poster-desktop.webp"
      className={cssClasses}
    >
      <source
        src="/assets/video/phone.mp4"
        type="video/mp4"
        media="(max-width: 424px)"
      />
      <source
        src="/assets/video/tablet.mp4"
        type="video/mp4"
        media="(min-width: 425px) and (max-width: 800px)"
      />
      <source
        src="/assets/video/desktop.mp4"
        type="video/mp4"
        media="(min-width: 801px)"
      />
      <source
        src="/assets/video/phone.webm"
        type="video/webm"
        media="(max-width: 424px)"
      />
      <source
        src="/assets/video/tablet.webm"
        type="video/webm"
        media="(min-width: 425px) and (max-width: 800px)"
      />
      <source
        src="/assets/video/desktop.webm"
        type="video/webm"
        media="(min-width: 801px)"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroSection;
