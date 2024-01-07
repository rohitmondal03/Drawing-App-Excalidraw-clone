"use client"

import dynamic from "next/dynamic";
import { useState } from "react";
import { LiveCollaborationTrigger, } from "@excalidraw/excalidraw";
import { AppState, BinaryFiles, ExcalidrawImperativeAPI, LibraryItems } from "@excalidraw/excalidraw/types/types";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";

import CanvasMainMenu from "./CanvasMainMenu";
import CanvasWelcomeScreen from "./CanvasWelcomeScreen";


const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  }
);


export default function DrawingCanvas() {
  const [excAPI, setExcAPI] = useState<ExcalidrawImperativeAPI | null>(null);


  return (
    <Excalidraw
    theme="dark"
    // isCollaborating={true}
    initialData={{
      elements: [],
      scrollToContent: true,
    }}
    UIOptions={{
      canvasActions: {
        changeViewBackgroundColor: true,
        clearCanvas: true,
        loadScene: true,
        saveToActiveFile: true,
        saveAsImage: true,
        toggleTheme: true,
        export: {
          saveFileToDisk: true,
        },
      },
    }}
    renderTopRightUI={() => (
      <LiveCollaborationTrigger
        isCollaborating={false}
        onSelect={() => alert("collaborating...")}
      />
    )}
    excalidrawAPI={(api: ExcalidrawImperativeAPI) => {
      setExcAPI(api)
    }}
    >
      <CanvasMainMenu />
      <CanvasWelcomeScreen />
    </Excalidraw>
  )
}
