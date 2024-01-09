"use client"

import dynamic from "next/dynamic";
import { useState } from "react";
import { LiveCollaborationTrigger, } from "@excalidraw/excalidraw";
import { AppState, BinaryFiles, ExcalidrawImperativeAPI, LibraryItem, LibraryItems } from "@excalidraw/excalidraw/types/types";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";

import { useLocalStorage } from "@/app/hooks/useLocalStorage";
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
  const [isCollaboratingMode, setCollaborartingMode] = useState<boolean>(false);
  const { getItem, setItem } = useLocalStorage(String(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY))


  return (
    <Excalidraw
      theme="dark"
      isCollaborating={isCollaboratingMode}
      initialData={{
        elements: getItem(),
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
          isCollaborating={isCollaboratingMode}
          onSelect={() => setCollaborartingMode((prev) => !prev)}
        />
      )}
      excalidrawAPI={(api: ExcalidrawImperativeAPI) => {
        setExcAPI(api)
      }}
      onChange={(a, b, c) => {
        const nonDeletedSceneElements = excAPI?.getSceneElements();
        setItem(nonDeletedSceneElements);
        console.log(a);
        console.log(b);
      }}
    >
      <CanvasMainMenu />
      <CanvasWelcomeScreen />
    </Excalidraw>
  )
}
