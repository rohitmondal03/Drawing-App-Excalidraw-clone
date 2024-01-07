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
          {/* <WelcomeScreen.Center.MenuItemLink href="https://github.com/excalidraw/excalidraw">
            Excalidraw GitHub
          </WelcomeScreen.Center.MenuItemLink> */}
          <WelcomeScreen.Center.MenuItemHelp />
          <WelcomeScreen.Center.MenuItemLoadScene />
          <WelcomeScreen.Center.MenuItemLiveCollaborationTrigger
            onSelect={() => alert("colaborating")}
          />
          <WelcomeScreen.Center.MenuItem
            icon={<div>Cr</div>}
            onSelect={() => console.log("hello")}
            className="flex items-center justify-center"
          >
            <div className="mt-[4px]">Credits: Excalidraw</div>
          </WelcomeScreen.Center.MenuItem>
        </WelcomeScreen.Center.Menu>
      </WelcomeScreen.Center>
    </WelcomeScreen>
  )
}
