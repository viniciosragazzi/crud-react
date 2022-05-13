import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { Home } from "./componentsHome/Home";
import { Add } from "./componentsAdd/Add";
import { List } from "./List";
import { SidebarMenu } from "./SidebarMenu";

export function ScreenApp(){
  return (
    <Router>
     <SidebarMenu/>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Add />} path="/add" />
        <Route element={<List />} path="/list" />
      </Routes>
    </Router>
  );
};

