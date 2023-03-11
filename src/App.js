import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="textutils" abouttext="about textutils" />
      <div className="container my-3">
        <Textform heading="Enter your text here" />
    {/* <About/> */}
      </div>
    </>
  );
}

export default App;

// React router does not work in github hosting
// deployment of create react app
// npm run build 
