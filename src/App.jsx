import { useRef } from 'react'
import Resume from './components/Resume'
import DownloadButton from './components/DownloadButton'
import './App.css'

function App() {
  const resumeRef = useRef(null)

  return (
    <div className="app">
      <div className="controls no-print">
        <DownloadButton resumeRef={resumeRef} />
      </div>
      <div ref={resumeRef} className="resume-container">
        <Resume />
      </div>
    </div>
  )
}

export default App

