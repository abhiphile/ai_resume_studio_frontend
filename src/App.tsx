import Navbar from './components/Navbar'
import Preview from './components/Preview'
// import SettingsMenu from "./components/SettingsMenu";
import TextEditor from './components/TextEditor'
import Toolbar from './components/Toolbar'
// import UserInfoBar from "./components/UserInfoBar";

function App() {
  const zooms = 90
  return (
    <div className='flex flex-col h-screen bg-background text-foreground'>
      <Navbar />
      <Toolbar />
      <div className='flex-1 flex overflow-hidden'>
        <TextEditor zoom={zooms} />
        <Preview zoom={zooms} />
      </div>
    </div>
  )
}

export default App
