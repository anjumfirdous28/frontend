import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Homeclass from "./Classcomponents/Homeclass";
import Aboutclass from "./Classcomponents/Aboutclass";
import Greeting from "./Greeting";
function App() {
  let name = "gamana";
  let age=25;
  return (
    <>
          <h1>hello everyone</h1>
          <h3>welcome to react</h3>
          <Home />
          <Homeclass />
          <About />
          <Aboutclass />
          <Contact />
          <Greeting fn={name} age={age} />
   
    </>
  )
}

export default App;
