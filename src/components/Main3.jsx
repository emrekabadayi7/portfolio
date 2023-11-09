import React from "react";
import GuyanaF from "./GuyanaF"
import SpaQuest from "./SpaQuest"

export default function Main2() {
  return (
    <main 
    className="bg-gradient-to-br h-[100vh] grid tracking-tight font-Raleway max-xl:h-full from-slate-800 to-black text-white border-t">
      <h1 className="text-6xl text-center py-5 max-xl:text-4xl  max-md:text-3xl">
        <b className="">Portfolio:</b>
      </h1>
      <section className="xl:flex h-fit justify-evenly">
      <GuyanaF />
      <SpaQuest />
      </section>
    </main>
  );
}
