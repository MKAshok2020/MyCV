import React,  { Suspense, lazy }   from 'react'
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import useDocumentTitle from './Helpers/useDocumentTitle'; 
import NaviBar from './components/navBar';
import Introduction from './components/introduction' ;
import Footer from './components/footer';
import {globalConstants} from "./Helpers/constants"
//import TabComponent from './components/tabComponent';

const WorkExperience = lazy(() => import('./components/workExperience'));
const Education = lazy(()=> import('./components/education'));
const TechnicalSkills = lazy(()=> import('./components/TechnicalSkills'));
const Projects = lazy(()=> import('./components/projects'));

function App() {

  useDocumentTitle("Ashok, Muthusamy Karunanithi");
 
  console.log(globalConstants.UrlPaths.Projects);

  return (
     <div className="App"> 
     <NaviBar/> 
      <Suspense fallback={<div>Loading Page...</div>}>
        <Routes>      
            
           <Route
                path={`/${globalConstants.UrlPaths.Introduction}`}
                element={<Introduction />} />
           
          <Route path={`/${globalConstants.UrlPaths.WorkExperience}`}
                 element={<WorkExperience />} />
          <Route path={`/${globalConstants.UrlPaths.Education}`}
                 element={<Education />} />

           <Route path={`/${globalConstants.UrlPaths.TechnicalSkills}`}
                 element={<TechnicalSkills />} />

           <Route path={`/${globalConstants.UrlPaths.Projects}`}
                 element={<Projects />} />
        </Routes>
      </Suspense> 
      <Footer/>
     </div>
  );
}

export default App;
