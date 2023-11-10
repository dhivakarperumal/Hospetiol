import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes,Route} from 'react-router-dom';
import Homes1 from './AllCOmponents/Homes/Homes';
import Abouts from './AllCOmponents/About/Abouts';
import Tremarics from './AllCOmponents/Treatments/Tretments';
import Docs from './AllCOmponents/Doctors/Docs';
import Conts from './AllCOmponents/Contacts/Conts';
import Logs1 from './AllCOmponents/Logins/Logees';
import Sings2 from './AllCOmponents/SignUp/Singns';
import Navbars from './Navbars/Navbar';
import Footers from './Footers/Footer';
import PationsRegisterDetail from './AllCOmponents/PationtDetails/PationsRegisterDetail';
import DataPationsAll from './AllCOmponents/PationtDetails/DataPationsAll';




function App() {
  return (
    <>
      <Navbars/>
      <Routes>
         <Route exact path="" element={<Homes1/>}> </Route>
         <Route exact path="/about" element={<Abouts/>}></Route>
         <Route exact path="/trements" element={<Tremarics/>}></Route>
         <Route exact path="/doctors" element={<Docs/>}></Route>
         <Route exact path="/contacts" element={<Conts/>}></Route>
         <Route exact path="/login" element={<Logs1/>}></Route>
         <Route exact path="/singup" element={<Sings2/>}></Route>
         <Route exact path="/pations" element={<PationsRegisterDetail/>}></Route>
         <Route exact path="/datas" element={<DataPationsAll/>}></Route>
         
      </Routes>
     
    <Footers/>
    
      {/* <Bookapoinment/>
      <Abouts/>
      <Tremarics/>
      <Docs/>
      <Tests/>
      <Conts/>
      <Sings2/> */}
      {/* <Footers/> */}
    </>
  );
}

export default App;