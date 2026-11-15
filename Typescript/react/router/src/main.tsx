import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router";

function User() {
  const { id } = useParams();
  return <p>User id from the URL: {id}</p>;
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <h1>Hello, React Router</h1>
    <nav><Link to="/">Home</Link> | <Link to="/users/42">User 42</Link></nav>
    <Routes>
      <Route path="/" element={<p>Home page</p>} />
      <Route path="/users/:id" element={<User />} />
    </Routes>
  </BrowserRouter>,
);
