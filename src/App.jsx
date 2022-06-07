import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Profile from "./components/profile/Profile.jsx";
import News from "./components/news/News.jsx";
import Music from "./components/music/Music.jsx";
import Setting from "./components/setting/Setting.jsx";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper">
        <Navbar />
        <div className="wrapper_content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
