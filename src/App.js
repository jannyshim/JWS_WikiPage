import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Wikipage from "./components/Wikipage";
import Newwiki from "./components/NewWikipage";
import Editwiki from "./components/EditWikipage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/wikipage/:id" element={<Wikipage />} />
        <Route path="/newwiki" element={<Newwiki />} />
        <Route path="/editwiki/:id" element={<Editwiki />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
