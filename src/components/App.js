import "../assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import ListBooks from "./ListBooks";
import Search from "./Search";
import BookDetails from "./BookDetails";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<ListBooks />} />
        <Route path="/search" element={<Search />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
