import IntroGif from './assets/nature-look.gif'
import './App.css'
import 'neobrutalismcss'
import Name from './components/Name'

function App() {

  return (
    <>
      <div>
        <img src={IntroGif} className="logo" alt="Cute penguin on a scavenger hunt" />
      </div>
      <h1>The O'Keefe House Scavenger Hunt!</h1>
      <div>
        <Name />
      </div>
    </>
  )
}

export default App
