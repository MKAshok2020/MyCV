import React from 'react'
import "../index.css"
import "../css/workExperience.css"
import '@fortawesome/fontawesome-free/css/all.min.css' 
import 'bootstrap/dist/css/bootstrap.min.css' 

const education = () => {
  return (
 
      <section id="Education & Certification" className="container my-3">
		<h3 className='text-left'>Education & Certification</h3>



		<div className="row">
			<div className="col-md-6 ">
				<div className="d-flex align-items-center">
					<i className="fa fa-graduation-cap education-icon cls-width50"></i>
					<h5>Education</h5>
				</div>

                <div className="row"><br/></div>

				<div className="mb-4 text-left">
					<h6>Master of Computer Applications</h6>
						<p>Madras University, Chennai, India (2000 - 2003)</p>
				</div>
				<div className="mb-4 text-left">
					<h6>Bachelor of Computer Science</h6>
						<p>Bharathiar University, Coimbatore, India (1996 - 1999)</p>
				</div>
			</div>


			<div className="col-md-6 role">
				<div className="d-flex align-items-center cls-justify-content-center"  >
					<i className="fa fa-eye  education-icon cls-width50"  ></i>
					<h5>Certifications</h5>
				</div>
				<div className="row">
<div className="row"><br/></div>
					<div className="row">
						<div className="col-md-2  col-xs-2">
							<img src={ require("../content/resources/AWS-Certified-SA-Associate_badge.png")} alt="AWS Icon"
								className="img-fluid mb-3 zoom cls-width50" />
						</div>

						<div className="col-md-10">
							<h6 className="col-xs-1 text-left">AWS Certified Solution Architect - Associate</h6>
							<p className="col-xs-1 text-left"><strong>Amazon Web Services</strong></p>
						</div>

					</div>

<div className="row"><br/></div>

					<div className="row">
						<div className="col-md-2  col-xs-2">
							<img src={ require("../content/resources/AWS-Certified-Developer-Associate_badge.png")} alt="AWS Icon"
								className="img-fluid mb-3 zoom cls-width50" />
						</div>
						<div className="col-md-10">
							<h6 className="col-xs-1 text-left">AWS Certified Developer - Associate</h6>
							<p className="col-xs-1 text-left"><strong>Amazon Web Services</strong></p>
						</div>
					</div>

<div className="row"><br/></div>

					<div className="row">
						<div className="col-md-2  col-xs-2">
							<img src={ require("../content/resources/sa-csm-600.png")} alt="CSM Icon" className="img-fluid mb-3 zoom cls-width50"
								  />
						</div>

						<div className="col-md-10">
							<h6 className="col-xs-1 text-left">Certified Scrum Master</h6>
							<p className="col-xs-1 text-left"><strong>Scrum Alliance</strong></p>
						</div>

					</div>


				</div>

			</div>
		</div>
	  </section> 
  );
}

export default education
