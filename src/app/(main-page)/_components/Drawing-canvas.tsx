"use client"

import dynamic from "next/dynamic";
import { LiveCollaborationTrigger, DefaultSidebar } from "@excalidraw/excalidraw";

import CanvasMainMenu from "./CanvasMainMenu";
import CanvasWelcomeScreen from "./CanvasWelcomeScreen";
import { useState } from "react";
import { AppState, BinaryFiles, ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";


const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  },
);


export default function DrawingCanvas() {
  const [excAPI, setExcAPI] = useState<ExcalidrawImperativeAPI | null>(null);


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
      onChange={
        (elements: readonly ExcalidrawElement[], appState: AppState, files: BinaryFiles) => {
          console.log(elements);
        }
      }
    >
      <CanvasMainMenu />
      <CanvasWelcomeScreen />
    </Excalidraw>
  )
}
