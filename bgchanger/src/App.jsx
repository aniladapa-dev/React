import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-1000" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-4">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-4 rounded-3xl">
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 text-3xl rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button> 

          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 text-3xl rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>  

          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 text-3xl rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button> 

          <button
          onClick={() => setColor("Purple")}
          className="outline-none px-4 py-1 text-3xl rounded-full text-white shadow-lg"
          style={{backgroundColor: "Purple"}}
          >Purple</button> 

<button
          onClick={() => setColor("Black")}
          className="outline-none px-4 py-1 text-3xl rounded-full text-white shadow-lg"
          style={{backgroundColor: "Black"}}
          >Black</button> 

        </div>
      </div>
    </div>
    </>
  )
}

export default App
