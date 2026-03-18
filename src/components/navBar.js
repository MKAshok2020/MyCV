import React from 'react'
import '../index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { globalConstants } from '../Helpers/constants';

const navBar = () => {

//   const scrollToSection = (elementRef) => {
//     window.scrollTo({
//       top: elementRef.current.offsetTop,
//       behavior: 'smooth',
//     });
//   };


  return (
	  
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
		<div className="container">
			<a className="nav-link-new navbar-brand" href={`/${globalConstants.UrlPaths.Introduction}`}>M K Ashok</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav me-auto">
					<li className="nav-item">
						<a className="nav-link-new" href={globalConstants.LinkedInPath} target="_top">LinkedIn</a>
					</li>
					<li className="nav-item">
						<a className="nav-link-new" href="mailto:ashok.m.karunanithi@gmail.com?Subject=Contact"
							target="_top">Email</a>
					</li>
				</ul>
				 <ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link-new" href={`/${globalConstants.UrlPaths.Introduction}`}>Profile Summary</a>
					</li>
					<li className="nav-item">
						<a className="nav-link-new" href={`/${globalConstants.UrlPaths.WorkExperience}`}>Work Experience</a>
					</li>
					 <li className="nav-item">
						<a className="nav-link-new" href={`/${globalConstants.UrlPaths.Education}`}>Education</a>
					</li>
					<li className="nav-item">
						<a className="nav-link-new" href={`/${globalConstants.UrlPaths.Skills}`}>Skills</a>
					</li>
					<li className="nav-item">
						<a className="nav-link-new" href={`/${globalConstants.UrlPaths.Projects}`}>Projects</a>
					</li>   
				</ul> 
			</div>
		</div>
	</nav> 
  ); 
}

export default navBar
