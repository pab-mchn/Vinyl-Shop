import Home from "./components/Home/Home";
import DataProvider from "./components/Context/DataContext";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
