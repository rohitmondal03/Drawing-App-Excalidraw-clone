import { MainMenu } from "@excalidraw/excalidraw"


export default function CanvasMainMenu() {
  return (
    <MainMenu>
      <MainMenu.DefaultItems.Export />
      <MainMenu.DefaultItems.Socials />
      <MainMenu.DefaultItems.ChangeCanvasBackground />
      <MainMenu.DefaultItems.ClearCanvas />
      <MainMenu.DefaultItems.SaveToActiveFile />
      <MainMenu.DefaultItems.SaveAsImage />
      <MainMenu.DefaultItems.Export />
      <MainMenu.DefaultItems.LiveCollaborationTrigger
        isCollaborating
        onSelect={() => alert("colaborating")}
      />
      <MainMenu.DefaultItems.Help />
    </MainMenu>
  )
}
