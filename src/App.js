import { BrowserRouter, Routes, Route } from "react-router-dom";
import PeopleView from "./views/PeopleView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PeopleView />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
