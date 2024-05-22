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
      poster="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/adopt-a-swimmer/video-poster-desktop.webp"
      className={cssClasses}
    >
      <source
        src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/adopt-a-swimmer/video/phone.mp4"
        type="video/mp4"
        media="(max-width: 424px)"
      />
      <source
        src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/adopt-a-swimmer/video/tablet.mp4"
        type="video/mp4"
        media="(min-width: 425px) and (max-width: 800px)"
      />
      <source
        src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/adopt-a-swimmer/video/desktop.mp4"
        type="video/mp4"
        media="(min-width: 801px)"
      />
      <source
        src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/adopt-a-swimmer/video/phone.webm"
        type="video/webm"
        media="(max-width: 424px)"
      />
      <source
        src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/adopt-a-swimmer/video/tablet.webm"
        type="video/webm"
        media="(min-width: 425px) and (max-width: 800px)"
      />
      <source
        src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/adopt-a-swimmer/video/desktop.webm"
        type="video/webm"
        media="(min-width: 801px)"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroSection;
