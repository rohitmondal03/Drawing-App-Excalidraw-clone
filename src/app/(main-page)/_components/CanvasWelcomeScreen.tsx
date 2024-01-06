import { WelcomeScreen } from "@excalidraw/excalidraw"


export default function CanvasWelcomeScreen() {
  return (
    <WelcomeScreen>
      <WelcomeScreen.Center>
        <WelcomeScreen.Hints.ToolbarHint />
        <WelcomeScreen.Hints.HelpHint />
        <WelcomeScreen.Hints.MenuHint />
        {/* <WelcomeScreen.Center.Logo /> */}

        <WelcomeScreen.Center.Heading>
          <h1 className="text-3xl font-bold">
            Drawing App ! A good one...
          </h1>
        </WelcomeScreen.Center.Heading>

        <WelcomeScreen.Center.Menu>
          <WelcomeScreen.Center.MenuItemLink href="https://github.com/excalidraw/excalidraw">
            Excalidraw GitHub
          </WelcomeScreen.Center.MenuItemLink>
          <WelcomeScreen.Center.MenuItemHelp />
          <WelcomeScreen.Center.MenuItemLoadScene />
          <WelcomeScreen.Center.MenuItemLiveCollaborationTrigger
            onSelect={() => alert("colaborating")}
          />
        </WelcomeScreen.Center.Menu>
      </WelcomeScreen.Center>
    </WelcomeScreen>
  )
}
