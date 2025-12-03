import { useState, useCallback, useEffect, useRef, use} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false);


  //useRef hook(hook means features of react)
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numberAllowed) str += "0123456789"
      if (charAllowed) str += "!@#$%^&*-_+=~`"

      for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * str.length+1)
        pass += str.charAt(char);

      }

      setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
   // passwordRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password)

    setCopied(true);   // Set copied state to true

    setTimeout(() => {
      setCopied(false);  // Reset after 2 seconds
    }, 2000);
  },[password])


  useEffect(() =>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-[#1E293B] text-white">        
            <h1 className="text-4xl my-3 text-white">Password Generator</h1>
          <div className="flex text-white text-center overflow-hidden rounded-lg mb-4">
            <input
              type="text"
              value={password} 
              className="outline-none bg-white text-black rounded-l w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordRef}
             />
             <button
              onClick={copyPasswordToClipboard}
              className={`outline-none px-3 py-0.5 shrink-0
                ${copied ? "bg-teal-500" : "bg-blue-700"}
                text-white`}
             >
              {copied ? "Copied!" : "Copy"}
             </button>
          </div>

              <div className="flex text-sm gap-x-2">
              <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
                />
                <label>Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                    setNumberAllowed((prev) => !prev);
                }}
            />
            <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={() => {
                      setCharAllowed((prev) => !prev )
                  }}
              />
              <label htmlFor="characterInput">Characters</label>
          </div>

          </div>
        </div>
    </>
  )
}

export default App
