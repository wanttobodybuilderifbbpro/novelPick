import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from "react";
import Main from "../../components/Main";
import Question from "../../components/Question";
import Result from "../../components/Result";
import Redir from "../../components/Redirect";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/question" element={<Question />} />
          <Route path="/result" element={<Result />} />
          <Route path="/redirect" element={<Redir />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
