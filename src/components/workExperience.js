import React from 'react'
import "../index.css"
import "../css/workExperience.css"
import '@fortawesome/fontawesome-free/css/all.min.css' 
import 'bootstrap/dist/css/bootstrap.min.css' 

const workExperience = () => {
  return (
     
  <section id="WorkExperience" className="container my-3">
		<h3 className='text-left' >Work Experience</h3>
		<div className="row text-left">
			<div className="col-md-5">
				<div className="mb-4">
					<h4>Senior Consultant</h4>
					<p><strong>Deep Identity Pte Ltd</strong>, Singapore <br/> (Feb 2018 - Jul 2025)</p>
					<ul className="smallfont">
						<li>Technical Lead and Scrum Master</li>
						<li>Set up fast IT development environment and transitioned to Agile and DevOps practices</li>
						<li>Managed and delivered large-scale enterprise IAM solutions</li>
						<li>Designed and implemented enterprise IAM solutions using OAuth2.0, SAML, and OpenID Connect</li>
					</ul>
				</div>
			</div>
			<div className="col-md-7 smallfont role" >
				<ul>
					<li> Developing and maintaining best practices, knowledge and change management policies </li>
					<li> Act as a scrum master, set up and animate agile ceremonies, handle impediments </li>
					<li> Designed and implemented enterprise IAM solutions using OAuth2.0, SAML, and OpenID Connect.
					</li>
					<li> Remediate OWASP dependency check & vulnerable issues </li>
					<li> Design, Estimation, liaise with client on timeline and Implementation of change request</li>
					<li> Developed custom IAM connectors for SAP HEC & SuccessFactors (HRMS) </li>
					<li> Mobile apps release management in Android and iOS platform</li>
					<li> Set SLA, optimize production monitoring and incidents management</li>
					<li> Steer project portfolio, epic and features delivery, communicate and report to regional
						C-levels </li>
				</ul>
			</div>

		</div>

		<div className="row  my-3 text-left">
			<div className="col-md-5">
				<div className="mb-4">
					<h4>Assistant Consultant</h4>
					<p><strong>Tata Consultancy Services</strong>, Bengaluru, Karnataka, India <br/> (Oct 2015 - Feb 2018)</p>
					<ul className="smallfont">
						<li>Offshore Coordinator and Technical Lead</li>
						<li>Coordinated teams, task allocation, and appraisal processes</li>
						<li>Developed and monitored project KPIs and ensured timely delivery</li>
					</ul>
				</div>
			</div>
			<div className="col-md-7 smallfont role">
					<ul>
						<li>Act as the primary point of contact between the onshore (client-side) and offshore (remote) teams </li>
						<li>Ensure clear and timely communication to avoid misunderstandings or delays</li>
						<li>Coordinate status updates, daily/weekly calls, and project reviews</li>
						<li>Create and share detailed progress reports with onshore stakeholders</li>
						<li>Track and report key performance indicators (KPIs) for offshore team productivity</li>
						<li>manage hiring process and SOW renewal</li>
						<li>Distribute tasks to offshore team members based on their expertise and availability</li>
						<li>Monitor the progress of tasks and ensure deadlines are met</li>
						<li>Escalate delays or blockers to relevant stakeholders</li> 
					</ul>				 
			</div>
		</div>

		<div className="row my-3 text-left">
			<div className="col-md-5">
				<div className="mb-4">
					<h4>Technical Lead</h4>
					<p><strong>Healthfore Technologies</strong>, Bengaluru, Karnataka, India <br/>
                    (Mar 2010 - Oct 2015)</p>
					<ul className="smallfont ">
						<li>Led the product engineering team for healthcare solutions</li>
						<li>Managed L3 support for multiple clients</li>
						<li>Designed and implemented integration with clinical laboratory systems</li>
						<li>Ensured HL7 compliance and optimized report queries</li>
					</ul>
				</div>
			</div>
			<div className="col-md-7 smallfont role" >
				<ul><li>Design, Cost Estimation, and Implementation of change request </li> 
					<li>L3 support for multiple client</li>
					<li>Pre-sales development</li>
					<li>Integrate drug database like VIDAL, CIMS & LEXI</li>
					<li>Integrate clinical laboratory system with LIMS module.</li>
					<li>Maintain HL7 compliance</li>
					<li>Preparing installation package</li>
					<li>Designed reports and worked on query optimizations.</li>
				</ul>
			</div>
		</div>

		<div className="row my-3 text-left">
			<div className="col-md-5">
				<div className="mb-4">
					<h4>Senior Software Engineer</h4>
					<p><strong>Sobha Renaissance Information Technology</strong>, Bengaluru, Karnataka, India (May 2006 - Mar 2010)</p>
					<ul className="smallfont ">
						<li>Developed and enhanced system modules</li>
						<li>Implemented change requests and supported application deployment</li>
						<li>Designed user interfaces and optimized database queries</li>
						<li>Prepared installation packages and provided technical documentation</li>
					</ul>
				</div>
			</div>
			<div className="col-md-7 smallfont role" >
				<ul>
					<li> Involved coding</li>
					<li> Developed system modules</li>
					<li> Change Request Implementation and Support</li>
					<li> Preparing installation package </li>
					<li> Designed Reports and worked on Query optimizations </li>
					<li> User interface designing </li>
					<li> Module enhancement and bug fixes	</li>					
				</ul>
			</div>
		</div> 
	</section>

  );
}

export default workExperience
