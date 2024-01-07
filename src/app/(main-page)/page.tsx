import dynamic from "next/dynamic"

const DrawingCanvas= dynamic(() => import("./_components/Drawing-canvas"), {
  ssr: false,
})


export default function HomePage() {
  return (
    <section className="">
      <div className="h-screen border-2 p-0 xs:p-1 sm:p-2 rounded-xl">
        <DrawingCanvas />
      </div>
    </section>
  )
}