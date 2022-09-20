import './App.css';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { ContextProvider } from "./context";


function App() {
  return (
    <div className="App">
			<Header></Header>
			<ContextProvider><Shop></Shop></ContextProvider>
			<Footer></Footer>
    </div>
  );
}

export default App;
