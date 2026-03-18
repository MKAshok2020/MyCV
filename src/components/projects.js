import React from 'react';
import "../css/skills.css";
import "../css/workExperience.css";
import '@fortawesome/fontawesome-free/css/all.min.css' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;

const projects = () => {
  return (
    <section id="Project" className="container my-3" >
		<h3 className="text-left">Projects</h3> 
		<div className="row"> 
				<p className="text-center" >Key achievements and realizations to date include but are not limited to the major initiatives below <br/> delivering constantly business values over years:</p>
				 <div className="row">
					<div className="col-md-4 equal-height-col">
						<div className="proj-box" >
							<div className="project-name proj-def">
								Identity Audit & Compliance Manager
							<br/>Clients: SP Services (Singapore Power), SMRT, Singapore.
							<br/>
							<a href="https://deepidentity.com/products">https://deepidentity.com/products</a>
							</div>
							<div  className="proj-details">
										13 IAM connectors; 2500 users; 27 endpoint systems; S$1.2 million budget
							</div>
						</div>
					</div>
							 
					<div className="col-md-4 equal-height-col">
						<div className="proj-box-1" >
							<div className="project-name proj-def">
								CSC - eLearning LEARN
							<br/>Client: Civil Service College, Singapore.
							<br/>
							<a href="http://learn.gov.sg/">http://learn.gov.sg/</a>
							</div>
							<div  className="proj-details">
										200k users; Multi-tenant e-learning platform suite for government employees integrate with Harvard, Udemy & LinkedIn Learning platform.
							</div>
						</div>
					</div>

					<div className="col-md-4 equal-height-col">
						<div className="proj-box" >
							<div className="project-name proj-def">
								TerraFirma & Enrichment Service EDIT
							<br/>Product Owner: Credit-Suisse Bank	 
						 	</div>
							<div  className="proj-details">
								TerraFirma Enrichment Service, is an Equity Derivative Investment Trade management system captures, displays, and manages Equity Derivatives orders.
							</div>
						</div>
					</div>
				</div>
				 
				<div className="row my-1">
					<div className="col-md-4 equal-height-col">
						<div className="proj-box-1" >
							<div className="project-name proj-def">
								Structured Note Batch Processing System
							<br/>Product Owner: Credit-Suisse Bank 
							</div>
							<div  className="proj-details">
								ETL applications managed by a batch processing tool Control-M, manage data flow between Upstream and Downstream systems of investment banking system.
							</div>
						</div>
					</div>

					<div className="col-md-4 equal-height-col">
						<div className="proj-box" >
							<div className="project-name proj-def">
								Magnum Infinity HIS
							<br/>Hospital Management Suite			 
						 
							</div>
							<div  className="proj-details">
								Magnum HIS is a comprehensive Hospital Information System that computerizes principal operations and administrative functions in a hospital.
							</div>
						</div>
					</div>

					<div className="col-md-4 equal-height-col">
						<div className="proj-box" >
							<div className="project-name proj-def">
								Magnum Kiosk
							<br/>Client: Aditya Birla Memorial Hospital, Pune, India		 
						 
							</div>
							<div  className="proj-details">
								Magnum Kiosk is a highly flexible and scalable information utility tool, designed especially for Healthcare Providers.
							</div>
						</div>
					</div>
				</div>
		</div>
		
	</section> 
  );
}

export default projects
