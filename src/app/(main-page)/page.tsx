import DrawingCanvas from "./_components/Drawing-canvas"


export default function HomePage() {
  return (
    <section className="">
      <div className="h-screen border-2 p-4 rounded-xl">
        <DrawingCanvas />
      </div>
    </section>
  )
}