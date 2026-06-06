import Parent from './components/Parent'
import Home from'./pages/Home'
import About from'./pages/About'
import Contact from'./pages/Contact'
import Service from'./pages/Service'
import Navbar from './pages/Navbar'
import Counter from './components/Counter'
const App = ()=>{
  return(
 <>
 <Navbar/>
 <h1>hello word  </h1>
 <h1>hello word  </h1>
 <Parent/> 
 <Home/>
 <About/>
 <Contact/>
 <Service/>
 <Counter/>
 </>
  )
}

export default App
