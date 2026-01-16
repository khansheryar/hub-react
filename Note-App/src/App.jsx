import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
const App = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    // Function to check screen width
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024) // 1024px = lg breakpoint
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  //<<--------------------------------->>

  const [title, setTitle] = useState('');
  const [details, setdetails] = useState('')
  const [task, setTask] = useState([])

  const SubmetHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask)

    setTitle('')
    setdetails('')

  }

  const DeleteNote = (idx) => {

    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);

  }

  return (
    <div
      className="h-screen bg-black lg:flex text-white"
      style={{
        // optional container styles (no change needed)
      }}
    >
      <form
        id="form"
        onSubmit={SubmetHandler}
        className="flex gap-4 flex-col items-start"
        style={{
          padding: isLargeScreen ? '10vh' : '2rem',
          width: isLargeScreen ? '50%' : '100%',
          boxSizing: 'border-box',
        }}
      >
        <div className='flex flex-wrap '>
          <h1 style={{ fontSize: "4vh", bottom: "0px" }} className="text-xl font-bold ">Add Notes</h1>
          <div className='h-[90%]' style={{ height: "90px", width: "90px", marginLeft: "15vh", marginBottom: "10px", top: "0px" }}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F8%2FHand-Writing-PNG-File-Download-Free.png&f=1&nofb=1&ipt=afc8800790bb6139444f75f87a086c7df1c37e147cef8bf03757fcdbec8fc35f" alt="" />
          </div></div>
        <input
          type="text"
          placeholder="Enter Note Heading."
          className="border-2 font-medium outline-none rounded w-full"
          style={{ padding: '2vh' }}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          placeholder="write details"
          className="border-2 outline-none font-medium rounded h-32 w-full"
          style={{ padding: '2vh' }}
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        />

        <button
          className="bg-white font-medium active:scale-90 cursor-pointer text-black outline-none rounded w-full"
          style={{ padding: '2vh' }}
          type="submit"
        >
          Add notes
        </button>
      </form>

      <div
        className="lg:border-l-2"
        style={{
          padding: isLargeScreen ? '10vh' : '2rem',
          width: isLargeScreen ? '50%' : '100%',
          boxSizing: 'border-box',
        }}
      >
        <h1 style={{ fontSize: "4vh" }} className="text-xl font-bold">Your Notes</h1>
        <div
          className="flex h-full  justify-start items-start flex-wrap gap-5 overflow-auto"
          style={{ marginTop: 19 }}
        >
          {task.map(function (elem, idx) {
            return <div style={{ padding: "2.6vh", position: "relative" }} key={idx} className="h-52  w-40 rounded-2xl bg-cover text-black bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.rQE-2z4GsRRsCjlZrqiffwHaKX%3Fpid%3DApi&f=1&ipt=18631b13a8f1fa7059181fc6bf2ae075f9f888409b270af70b35e035616ec758&ipo=images')]">
              <div>
                <h3 className='  leading-tight text-xl font-bold'>{elem.title}</h3>
                <p style={{ marginTop: "1vh" }} className='leading-tight font-medium  text-gray-900'>{elem.details}</p>
              </div>
              <div>
                <button onClick={() => {
                  DeleteNote(idx)
                }} style={{ borderRadius: "5px", padding: "0.6vh", fontSize: "1.9vh", position: "absolute", bottom: "0.4vh", left: "4vh", width: "10vh" }} className=' text-white cursor-pointer bg-red-400 active:scale-90'>Delete </button>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
