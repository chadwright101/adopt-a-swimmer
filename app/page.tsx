import Image from "next/image";

export const metadata = {
  title: "Adopt A Swimmer",
  description: "Coming soon...",
};

export default function Home() {
  return (
    <main className="grid place-items-center h-screen bg-darkBlue px-4">
      <div className="max-w-[500px] flex flex-col items-center">
        <h1 className="text-white text-center max-w-[400px] phone:text-[3rem] mb-8">
          Something new & exciting is coming soon...
        </h1>
        <Image
          src="/adopt-a-swimmer-logo.png"
          alt="Adopt A Swimmer logo"
          width={500}
          height={345}
          className="image-pulse w-[280px] phone:w-[380px] tablet:w-[500px]"
        />
      </div>
    </main>
  );
}
