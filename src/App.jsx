import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import DashboardScreen from "./screens/DashboardScreen";
import BugInfoScreen from "./screens/BugInfoScreen";
import EditPreferencesScreen from "./screens/EditPreferencesScreen";
import GlobalBugInfoScreen from "./screens/GlobalBugInfoScreen";

function App() {
  return (<div>
    <Router>
      <Routes>
        <Route exact="exact" path='/' element={<LoginScreen />}></Route>
        <Route exact="exact" path='/home' element={<HomeScreen />}></Route>
        <Route exact="exact" path='/profile' element={<ProfileScreen />}></Route>
        <Route exact="exact" path='/dashboard' element={<DashboardScreen />}></Route>
        <Route exact="exact" path='/bugInfoPage/:bugid' element={<BugInfoScreen/>}></Route>
        <Route exact="exact" path='/globalBugInfoPage/:bugid' element={<GlobalBugInfoScreen/>}></Route>
        <Route exact="exact" path='/preferences' element={<EditPreferencesScreen/>}></Route>
      </Routes>
    </Router>
  </div>);
}

export default App;
