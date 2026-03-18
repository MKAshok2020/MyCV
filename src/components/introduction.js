import React from 'react'
import '../css/introduction.css'
//import '../index.css'
import '@fortawesome/fontawesome-free/css/all.min.css' 
import 'bootstrap/dist/css/bootstrap.min.css' 
import OpenPdfLink from './openPDFLink'

const introduction = () => {
  return (
    <div>
        <section id="Introduction" class="container my-1">
		    <div className="row align-items-center">
			    <div className="col-md-5">
				    <div className="card custom-border border-secondary mb-3 cs-border-color">
					      <img src={ require("../content/photo/index.jpg")}
                     className="card-img-top square mx-auto mt-3 photo-width" alt="" />  
					    <div className="card-body  text-left">
						<ul className="list-unstyled">
							<li><strong>Full Name:</strong> Muthusamy Karunanithi Ashok</li>
							<li><strong>Nationality:</strong> India</li>
							<li><strong>Location:</strong> India</li>
							<li><strong>Email:</strong> <a
									href={"mailto:ashok.m.karunanithi@gmail.com"}>ashok.m.karunanithi@gmail.com</a></li>
							<li><strong>Phone:</strong> +91 99860 09120</li>
						</ul>
					    </div>
				</div>
			</div>
			<div className="col-md-7">
				<h1 className="mb-1 text-left">Ashok M K</h1>
				<h3 className="mb-1 ml-0 text-left">Digital Transformation Leader</h3>
				<br/>
				<p className='mb-1 intro-font'>Experienced .NET Solution Architect with extensive experience in designing, modernizing, and delivering enterprise-scale, secure, and
scalable applications using .NET Framework, ASP.NET Core, C#, and microservices architecture. Strong background in cloud-native
solution design, Identity & Access Management (IAM), and API-led integrations across Azure and AWS platforms. Proven ability to
translate complex business requirements into robust technical architectures, lead cross-functional teams, and govern end-to-end solution
delivery in Agile environments and cognitive automation. Recognized for combining hands-on technical depth with architectural vision to
build resilient, high-performance systems aligned with business objectives.</p>
				{/*<p className="mb-1">Seasoned leader in spearheading business-aligned IT transformations and building secure, scalable cloud ecosystems. Known for formulating IT modernization roadmaps and optimizing process automation to improve delivery efficiency and resilience. Strong advocate for cross-functional collaboration, stakeholder engagement, and talent upskilling. Proven track record of managing full-scope solution implementation—right from business analysis and system architecture to post-deployment support. Adept in leveraging AWS infrastructure to develop high-performance, secure, and cost-effective enterprise applications.</p>
                 */}
				<br/><p className='intro-font'>Certified AWS Solutions Architect with a strong command of architecting secure, scalable, and
					cost-efficient cloud solutions. Skilled in designing resilient architectures, implementing
					serverless
					computing models, and optimizing workloads for performance and cost-effectiveness.</p>
 
					<OpenPdfLink  fileUrl="/files/Muthusamy_Karunanithi_Ashok.pdf"
					/>
				  {/* <a href={"../content/resume/Muthusamy_Karunanithi_Ashok.pdf"} className="btn btn-outline-secondary"> 
                <i className="fa fa-download"></i> Download My CV</a>   */}
			</div>
		</div>
	</section>
</div> 
  );
}

export default introduction
