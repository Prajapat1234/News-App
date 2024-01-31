
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Loader from "./pages/Loader"

import './App.css';

import Navbar1 from './pages/Navbar1';

const News = lazy(() => import('./pages/News'));
const Politics = lazy(() =>import ( './pages/Politics'));
const Travel = lazy(() =>import('./pages/pages/Travel'));
const Sports = lazy(() =>import( './pages/Sports'));

export default function App() {
  const [searchTerm, setSearchTerm] = useState('India');

  return (
    <div id='main'>
      <BrowserRouter>
        <Navbar1 setSearchTerm={setSearchTerm} />
        <Routes>
          <Route
            path='News'
            element={
              <Suspense fallback={<Loader/>}>
                <News searchTerm={searchTerm} />
              </Suspense>
            }
          />
          <Route path='Politics' element={ 
          <Suspense fallback={<Loader/>}>
           <Politics /></Suspense>} /> 
          <Route path='Travel' element={
          <Suspense fallback={<Loader/>}>
            <Travel />
            </Suspense>} />
          <Route path='Sports' element={
             <Suspense fallback = {<Loader/>}>
               <Sports /> 
               </Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

 
