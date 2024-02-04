import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import AboutPage from "./AboutPage/AboutPage";
import "./App.css";
import MainPage from "./MainPage/MainPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import LoginPage from "./LoginPage/LoginPage";
import Layout from "./Layout/Layout";
import Protected from "./Protected/Protected";
import UserPage from "./UserPage/UserPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<Protected />}>
              <Route index element={<MainPage />} />
            </Route>
            <Route path="/aboutpage" element={<AboutPage />} />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/userpage" element={<UserPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
