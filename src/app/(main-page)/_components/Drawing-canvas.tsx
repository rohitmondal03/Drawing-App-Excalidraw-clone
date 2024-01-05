"use client"

import dynamic from "next/dynamic";

import CanvasMainMenu from "./CanvasMainMenu";
import CanvasWelcomeScreen from "./CanvasWelcomeScreen";


const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  },
);


export default function DrawingCanvas() {
  return (
    <Excalidraw
      theme="dark"
      initialData={{
        elements: [],
        scrollToContent: true,
      }}
      UIOptions={{
        canvasActions: {
          changeViewBackgroundColor: true,
          clearCanvas: false,
          loadScene: false,
          saveToActiveFile: true,
          saveAsImage: true,
          // toggleTheme: true
        }
      }}
    >
      <CanvasMainMenu />
      <CanvasWelcomeScreen />
    </Excalidraw>
  )
}
