import DrawingCanvas from "./_components/Drawing-canvas"


export default function HomePage() {
  return (
    <section className="">
      <div className="h-screen border-2 p-0 xs:p-1 sm:p-2 rounded-xl">
        <DrawingCanvas />
      </div>
    </section>
  )
}