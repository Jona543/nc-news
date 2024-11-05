import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Articles from "./Articles";
import Article from "./Article";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
