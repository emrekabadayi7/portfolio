import React from "react";
import pawnoWindow from "./imgs/pawnoWindow.jpg";
import samp from "./imgs/sa-mp.png";
import samp2 from "./imgs/sa-mp2.png";

export default function Main2() {
  const images = [pawnoWindow, samp, samp2];
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="bg-gradient-to-tr tracking-tight overflow-x-hidden font-Raleway h-[100vh] from-slate-800 to-black text-white border-t">
      <div>
        <h1 className="text-3xl max-sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xla text-center overflow-y-hidden p-3">
          How did I start coding?
        </h1>
        <div className="max-sm:text-center grid 2xl:grid-flow-col items-center">
          <h2 className="text-center 2xl:text-lg max-xl:text-sm mx-auto max-sm:px-5 mt-3 max-w-2xl">
            The coding journey of mine began when I was 12 years old, in 2007, with the
            language called: <b className="text-2xl text-amber-300">"Pawno".</b> <br></br>
            This language is being used to code SA-MP (San Andreas Multiplayer)
            servers.
            <br></br>
            <br></br>I still remember the excitement I felt, when I was able to
            press "horn" button and open the gate of my house, thanks to
            the codes I had written!
            <br></br>
            <br></br>
            You can see more info{" "}
            <b className=" underline hover:text-blue-600">
              <t>
                <a href="https://www.compuphase.com/pawn/pawn.htm">
                  in this link.
                </a>
              </t>
            </b>
          </h2>
          <div className="relative overflow-x-hidden">
            <div
              id="slide"
              className="h-[60vh] xl:w-[900px] max-xl:h-[60vh] max-lg:w-[700px] max-md:w-[400px] aspect-square max-md:h-[30vh] max-md:overflow-x-hidden mt-10 w-[1000px] mx-auto overflow-y-hidden relative max-sm:mt-20"
            >
              {images.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`Image ${index + 1}`}
                  className={`mx-auto max-sm:px-2 absolute h-full w-full transition-opacity duration-[2000ms] ${
                    currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Buraya gta san andreasla başlayan kodlama anılarını yazacaksın. Görsellerle şekillendir. Bu sefer mobile-first çalışacağız. Ondan sonra hemen GuyanaFoundation sitesini sadece tek başına yaptığınla alakalı bir Main3.jsx çalışalım. Kısa, öz, ve çok fonksiyonlu&rich bir websitesi olsun. */}
        </div>
      </div>
    </main>
  );
}
