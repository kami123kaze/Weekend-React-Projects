import Canvas from "./components/Canvas"

function Landing() {
  return (
<div className="min-h-screen min-w-screen bg-yellow-200 flex flex-col">
    {/* Header */}
      <header className="h-16 flex items-center justify-center bg-yellow-300 shadow-md">
        <h1 className="text-xl font-semibold">Mario In React</h1>
      </header>

    {/* Canvas */}
      <div className="flex-1 flex items-center justify-center">
        <Canvas />
      </div>
      
      {/*Footer*/}
      <div className="bg-amber-100 flex min-w-fit items justify-center  ">
        <button className="px-3 border-2 rounded-3xl mx-4">Start</button>
        <button className="px-3 border-2 rounded-3xl mx-4">Reset</button>
      </div>
</div>

  )
}

export default Landing