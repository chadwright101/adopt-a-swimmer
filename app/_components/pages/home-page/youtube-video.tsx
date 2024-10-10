"use client";

import dynamic from "next/dynamic";
import YouTube from "react-youtube";

const YouTubeVideo = () => (
  <section className="py-2 max-w-[1440px] mx-auto">
    <YouTube
      className="w-full aspect-video desktopSmall:aspect-auto desktopSmall:h-[600px]"
      iframeClassName="h-full w-full"
      videoId="BM4pWQhxMOA"
      opts={{
        playerVars: {
          autoplay: 0,
          controls: 0,
        },
      }}
    />
  </section>
);

export default dynamic(() => Promise.resolve(YouTubeVideo), { ssr: false });
