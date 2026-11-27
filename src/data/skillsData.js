const skillsData = [
  {
    id: "architecture-frameworks-methodologies",
    title: "Architecture Frameworks, Patterns & Methodologies",
    shortLabel: "Architecture",
    summary: "Enterprise and solution frameworks, domain modeling, architectural styles, governance, and visual notations.",
    skills: [
      //{ name: "TOGAF & ADM", focus: "Core", relatedCompanies: ["DI"] },

      { name: "Strangler Fig Pattern", focus: "Core", relatedCompanies: ["DI"] },
      { name: "MoSCoW Prioritization", focus: "Core", relatedCompanies: ["DI", "TCS"] },
      { name: "RICE Scoring", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "Zachman Framework", focus: "Core", relatedCompanies: ["DI"] },
      { name: "SABSA (Security Architecture)", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "Zero-Trust Architecture", focus: "Core", relatedCompanies: ["DI"] },
      { name: "Domain-Driven Design (DDD)", focus: "Core", relatedCompanies: ["DI", "TCS"] },
      { name: "Event-Driven Architecture", focus: "Core", relatedCompanies: ["DI"] },
      { name: "Microservices & Service-Oriented (SOA)", focus: "Core", relatedCompanies: ["DI", "TCS"] },
      { name: "Layered / Clean / Hexagonal Architecture", focus: "Core", relatedCompanies: ["DI", "TCS", "HF"] },
      {name:"Saga Pattern (Choreography & Orchestration)",focus:"Core",relatedCompanies: ["DI"]},
      {name:"Circuit Breaker",focus:"Core", relatedCompanies: ["DI"]},
      { name: "CQRS & Event Sourcing", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "C4 Model & UML", focus: "Core", relatedCompanies: ["DI", "TCS"] },
      { name: "ArchiMate", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "Architecture Decision Records (ADRs)", focus: "Core", relatedCompanies: ["DI"] },
      { name: "Threat Modeling (STRIDE)", focus: "Core", relatedCompanies: ["DI"] },
      { name: "Evolutionary Architecture & Fitness Functions", focus: "Hands-on", relatedCompanies: ["DI"] }
    ]
  },
  {
    id: "iam-security-crypto",
    title: "Identity, Security & Cryptography",
    shortLabel: "IAM & Security",
    summary: "Authentication protocols, identity federation, TLS/key management, data encryption, and security scanning.",
    skills: [
      { name: "OAuth2.0", focus: "Core", relatedCompanies: ["DI"] },
      { name: "OpenID Connect", focus: "Core", relatedCompanies: ["DI"] },
      { name: "SAML", focus: "Core", relatedCompanies: ["DI"] },
      { name: "Identity Server4", focus: "Core", relatedCompanies: ["DI"] },
      { name: "Azure AD", focus: "Core", relatedCompanies: ["DI"] },
      { name: "Singpass", focus: "Core", relatedCompanies: ["DI"] },
      { name: "IAM Connectors", focus: "Core", relatedCompanies: ["DI"] },
      { name: "Federation", focus: "Core", relatedCompanies: ["DI"] },
      { name: "TLS (1.1/1.2/1.3)", focus: "Core", relatedCompanies: ["DI", "TCS"] },
      {
        name: "Public/Private Key Pair & Certificate Config",
        focus: "Core",
        relatedCompanies: ["DI", "TCS"]
      },
      { name: "PGP/SLIFT Encryption & Decryption", focus: "Core", relatedCompanies: ["TCS"] },
      { name: "Synk", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "SonarQube", focus: "Hands-on", relatedCompanies: ["DI", "TCS"] },
      { name: "OWASP ODC", focus: "Hands-on", relatedCompanies: ["DI"] }
    ]
  },
  {
    id: "backend-apis-data",
    title: ".NET, APIs & Databases",
    shortLabel: ".NET & Data",
    summary: "Backend architectures, distributed/async patterns, API styles, and relational/NoSQL databases.",
    skills: [
      { name: ".Net Core", focus: "Core", relatedCompanies: ["DI", "TCS"] },
      { name: ".Net Framework", focus: "Core", relatedCompanies: ["TCS", "HF", "SRIT"] },
      { name: "C# .Net", focus: "Core", relatedCompanies: ["DI", "TCS", "HF", "SRIT"] },
      { name: "ASP.Net", focus: "Core", relatedCompanies: ["TCS", "HF", "SRIT"] },
      { name: "MVC", focus: "Core", relatedCompanies: ["TCS", "HF"] },
      { name: "MVVM", focus: "Hands-on", relatedCompanies: ["HF"] },
      { name: "TPL", focus: "Hands-on", relatedCompanies: ["TCS"] },
      { name: "RabbitMQ", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "Python", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "Web API", focus: "Core", relatedCompanies: ["DI", "TCS"] },
      { name: "Rest API", focus: "Core", relatedCompanies: ["DI", "TCS"] },
      { name: "CQRS", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "MediatR", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "OData", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "GraphQL", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "MS SQL Server", focus: "Core", relatedCompanies: ["DI", "TCS", "HF", "SRIT"] },
      { name: "SQL Compact Database", focus: "Hands-on", relatedCompanies: ["HF", "SRIT"] },
      { name: "MongoDB", focus: "Hands-on", relatedCompanies: ["DI"] }
    ]
  },
  {
    id: "aws-cloud-gateways",
    title: "AWS Cloud, API Gateways & Observability",
    shortLabel: "AWS & Observability",
    summary: "Compute, storage, serverless, messaging, identity/email services, gateways, logging, and APM.",
    skills: [
      { name: "AWS EC2", focus: "Core", relatedCompanies: ["DI"] },
      { name: "AWS S3", focus: "Core", relatedCompanies: ["DI"] },
      { name: "AWS ECS", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "AWS IAM", focus: "Core", relatedCompanies: ["DI"] },
      { name: "AWS Organisations", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "AWS Lambda", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "AWS Batch", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "AWS CloudWatch", focus: "Core", relatedCompanies: ["DI"] },
      { name: "Amazon Cognito", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "AWS SES", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "AWS RDS", focus: "Core", relatedCompanies: ["DI"] },
      { name: "AWS DynamoDB", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "AWS DMS", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "AWS SQS", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "AWS SNS", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "AWS Kinesis", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "AWS CloudFront", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "AWS API Gateway", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "Tyk", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "New Relic", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "ELK", focus: "Hands-on", relatedCompanies: ["DI", "TCS"] },
      { name: "Splunk", focus: "Hands-on", relatedCompanies: ["DI", "TCS"] },
      { name: "Log4Net", focus: "Core", relatedCompanies: ["TCS", "HF", "SRIT"] }
    ]
  },
  {
    id: "frontend-mobile-qa",
    title: "Frontend, Mobile & Testing Frameworks",
    shortLabel: "Frontend & QA",
    summary: "Web UI, Android/iOS app delivery, TDD/BDD practices, and unit/integration test runners.",
    skills: [
      { name: "JavaScript", focus: "Core", relatedCompanies: ["DI", "TCS"] },
      { name: "React JS", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "Node JS Express", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "HTML/HTML5", focus: "Core", relatedCompanies: ["DI", "TCS", "HF", "SRIT"] },
      { name: "CSS", focus: "Core", relatedCompanies: ["DI", "TCS", "HF", "SRIT"] },
      { name: "Bootstrap", focus: "Core", relatedCompanies: ["DI", "TCS"] },
      {
        name: "Mobile App Dev & Release (Android & Apple)",
        focus: "Hands-on",
        relatedCompanies: ["HF"]
      },
      { name: "Test Drive Development (TDD)", focus: "Core", relatedCompanies: ["DI", "TCS"] },
      { name: "Behavioral Driven Development (BDD)", focus: "Hands-on", relatedCompanies: ["DI", "TCS"] },
      { name: "NUnit", focus: "Core", relatedCompanies: ["DI", "TCS", "HF"] },
      { name: "Spec Flow", focus: "Hands-on", relatedCompanies: ["DI", "TCS"] },
      { name: "MSpec", focus: "Hands-on", relatedCompanies: ["TCS"] },
      { name: "Jest", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "Enzyme", focus: "Hands-on", relatedCompanies: ["DI"] }
    ]
  },
  {
    id: "devops-agile-tools",
    title: "DevOps, Agile & Engineering Tools",
    shortLabel: "DevOps & Tools",
    summary: "CI/CD pipelines, source control, configuration management, Agile delivery, and collaboration tools.",
    skills: [
      { name: "Agile (Scrum)", focus: "Core", relatedCompanies: ["DI", "TCS", "HF"] },
      { name: "TeamCity", focus: "Hands-on", relatedCompanies: ["DI", "TCS"] },
      { name: "Jenkins", focus: "Hands-on", relatedCompanies: ["DI", "TCS"] },
      { name: "GoCD", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "Azure DevOps", focus: "Core", relatedCompanies: ["DI"] },
      { name: "TFS", focus: "Core", relatedCompanies: ["TCS", "HF", "SRIT"] },
      { name: "SVN", focus: "Core", relatedCompanies: ["TCS", "HF", "SRIT"] },
      { name: "GitHub", focus: "Core", relatedCompanies: ["DI", "TCS"] },
      { name: "Bitbucket", focus: "Hands-on", relatedCompanies: ["DI", "TCS"] },
      //{ name: "Ansible Playbook", focus: "Hands-on", relatedCompanies: ["DI"] },
      //{ name: "Puppet", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "JIRA", focus: "Core", relatedCompanies: ["DI", "TCS"] },
      { name: "Fresh Desk", focus: "Hands-on", relatedCompanies: ["DI"] },
      { name: "Confluence", focus: "Core", relatedCompanies: ["DI", "TCS"] },
      { name: "SourceTree", focus: "Hands-on", relatedCompanies: ["DI", "TCS"] },
      { name: "FishEye", focus: "Hands-on", relatedCompanies: ["TCS"] },
      { name: "UpSource", focus: "Hands-on", relatedCompanies: ["TCS"] },
      { name: "ReSharper", focus: "Core", relatedCompanies: ["DI", "TCS", "HF"] }
    ]
  }
];

export default skillsData;