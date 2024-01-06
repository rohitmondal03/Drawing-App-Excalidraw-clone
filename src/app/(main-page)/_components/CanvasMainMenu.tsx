import { MainMenu } from "@excalidraw/excalidraw"


export default function CanvasMainMenu() {
  return (
    <MainMenu>
      <MainMenu.DefaultItems.Export />
      {/* <MainMenu.DefaultItems.Socials/> */}
      {/* <MainMenu.DefaultItems.SaveToActiveFile /> */}
      <MainMenu.DefaultItems.SaveAsImage />
      <MainMenu.DefaultItems.ClearCanvas />
      {/* <MainMenu.DefaultItems.Export /> */}
      <MainMenu.Separator />
      <MainMenu.DefaultItems.ChangeCanvasBackground />
      <MainMenu.Separator />
      <MainMenu.DefaultItems.LoadScene />
      <MainMenu.DefaultItems.ToggleTheme />
      <MainMenu.DefaultItems.LiveCollaborationTrigger
        isCollaborating={true}
        onSelect={() => alert("colaborating")}
      />
      <MainMenu.DefaultItems.Help />
    </MainMenu>
  )
}
