import { DataProvider } from "./context/DataProvider";
import Footer from "./core/components/Footer";
import Header from "./core/components/Header";
import Main from "./core/components/Main"; 


function App() { 

  return ( 
      <DataProvider>
        <Header />
        <Main />
        <Footer />
      </DataProvider> 
  )
}

export default App
