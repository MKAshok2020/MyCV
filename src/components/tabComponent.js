import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import WorkExperience from './workExperience';  

const tabComponent = () => {
   return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
         <Tab eventKey="WorkExperience" title="Work Experience">
        <WorkExperience/>
      </Tab>
      <Tab eventKey="education" title="Education & Certification">
        <WorkExperience/>
      </Tab>
      <Tab eventKey="skills" title="Skills">
        <WorkExperience/>
      </Tab>
      <Tab eventKey="projects" title="Projects">
        <WorkExperience/>
      </Tab>
        </Tabs>

        );
    }

export default tabComponent
