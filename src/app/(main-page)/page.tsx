"use client"

import dynamic from "next/dynamic";

import CanvasMainMenu from "@/app/(main-page)/_components/CanvasMainMenu";
import CanvasWelcomeScreen from "@/app/(main-page)/_components/CanvasWelcomeScreen";


const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  },
);


export default function HomePage() {
  return (
    <section className="">
      <div className="h-screen border-2 p-4 rounded-xl">
        <Excalidraw
          theme="dark"
          initialData={{
            elements: [],
            scrollToContent: true
          }}
          UIOptions={{
            canvasActions: {
              changeViewBackgroundColor: false,
              clearCanvas: false,
              loadScene: false,
              saveToActiveFile: true,
              saveAsImage: true,
            }
          }}
        >
          <CanvasMainMenu />
          <CanvasWelcomeScreen />
        </Excalidraw>
      </div>
    </section>
  )
}