import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from "../pages/Home"
import Ashima from '../pages/Ashima';
import Gogi from '../pages/Gogi';
import Hutong from '../pages/Hutong';
import Kichi from '../pages/Kichi';
import Kpub from '../pages/Kpub';
import Ktop from '../pages/Ktop';
import Manwah from '../pages/Manwah';
import Sumo from '../pages/Sumo';
import Isushi from '../pages/Isushi';
import Daruma from '../pages/Daruma';
import Shogun from '../pages/Shogun';
import Vuvuzela from '../pages/Vuvuzela';
import Cowboy from '../pages/Cowboy';
import Street from '../pages/Street';
import Crystal from '../pages/Crystal';

const RoutesBuffet = () => {
  return (
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/Ashima" element = {<Ashima />} />
      <Route path="/Gogi" element = {<Gogi />} />
      <Route path="/Hutong" element = {<Hutong />} />
      <Route path="/Kichi" element = {<Kichi />} />
      <Route path="/Kpub" element = {<Kpub />} />
      <Route path="/Ktop" element = {<Ktop />} />
      <Route path="/Manwah" element = {<Manwah />} />
      <Route path="/Sumo" element = {<Sumo />} />
      <Route path="/Isushi" element = {<Isushi />} />
      <Route path="/Daruma" element = {<Daruma />} />
      <Route path="/Shogun" element = {<Shogun />} />
      <Route path="/Vuvuzela" element = {<Vuvuzela />} />
      <Route path="/Cowboy" element = {<Cowboy />} />
      <Route path="/Street" element = {<Street />} />
      <Route path="/Crystal" element = {<Crystal />} />
    </Routes>
  )
}

export default RoutesBuffet