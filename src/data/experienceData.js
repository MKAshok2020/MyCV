const experienceData = [
  {
    id: "tenxity-solutions",
    company: "Tenxity Solutions",
    location: "Chennai, TN, India",
    role: "Solution Architect",
    period: "Aug 2025 – Jul 2026",
    employmentType: "Full-time",
    shortName: "TS",
    summary:
      "Architected end-to-end Joiner-Mover-Leaver (JML) automation, RBAC/ABAC governance, and AI-enabled identity workflows across hybrid cloud environments.",
    highlights: [
      "Designed automated identity lifecycle management (Joiner, Mover, Leaver) integrating HRMS, Active Directory, Azure AD/Entra ID, LDAP, SAP, and cloud applications.",
      "Architected AI-enabled automation for identity operations, policy recommendations, incident triage, and governance workflows using orchestration engines and intelligent agents.",
      "Designed and implemented Model Context Protocol (MCP) architectures to securely expose enterprise tools and services to AI agents.",
      "Led architecture for access certification campaigns, Segregation of Duties (SoD) analysis, audit reporting, and compliance automation.",
      "Designed scalable multimodal RAG architectures integrating document ingestion, chunking, vector databases, semantic search, and LLM response generation."
    ],
    technologies: [
      "Azure AD / Entra ID",
      "Active Directory",
      "SCIM",
      "REST APIs",
      "OAuth 2.0",
      "OIDC",
      "SAML",
      "Model Context Protocol (MCP)",
      "LangGraph",
      "LangChain",
      "RAG",
      "Vector Databases (FAISS/Chroma)",
      "Microservices"
    ],
    projects: [
      {
        name: "AI-Driven Identity Governance & MCP Automation Prototype",
        description:
          "Governance automation workflow leveraging orchestration platforms, AI assistants, and MCP-based services to streamline access requests, approvals, and policy validation.",
        impact: "Automated JML lifecycle, SoD analysis & compliance reporting"
      }
    ]
  },
  {
    id: "deep-identity",
    company: "Deep Identity Pte. Ltd.",
    location: "Singapore",
    role: "Senior Consultant / Technical Architect",
    period: "Feb 2018 – Jul 2025",
    employmentType: "Full-time",
    shortName: "DI",
    summary:
      "Owned and governed the technical architecture, modernization, and delivery of enterprise-grade Identity Management and Identity Governance & Administration (IGA) platforms.",
    highlights: [
      "Architected and rolled out an enterprise Identity Management System at SP Services, integrating 13 connectors and 20+ non-connector endpoints across enterprise applications.",
      "Led the technical redesign of a monolithic IDMS platform into an event-driven microservices architecture, improving modularity, scalability, and maintainability.",
      "Designed and governed custom .NET connectors and integration frameworks for SAP, Active Directory, Microsoft 365, and enterprise HRMS platforms.",
      "Implemented enterprise-wide SSO and Singpass-based authentication and authorization mechanisms using OAuth 2.0, SAML 2.0, and OpenID Connect.",
      "Governed OWASP vulnerability remediation, disaster recovery preparedness (RTO/RPO compliance), and technical mentorship across cross-functional engineering teams."
    ],
    technologies: [
      "C#",
      ".NET Core 6",
      "ASP.NET MVC",
      "Microservices",
      "React JS",
      "Node.js",
      "RabbitMQ",
      "IdentityServer4",
      "OAuth 2.0",
      "OpenID Connect",
      "SAML",
      "Singpass",
      "Azure AD",
      "AWS (ECS, EC2, RDS, Lambda, S3)",
      "Docker",
      "SQL Server",
      "MongoDB"
    ],
    projects: [
      {
        name: "SP Services & SMRT – Deep IACM / Enterprise IDMS",
        description:
          "Enterprise identity audit, compliance, and lifecycle governance implementation integrating SAP HEC, SuccessFactors HRMS, Active Directory, and O365.",
        impact: "13 connectors · 20+ non-connector endpoints"
      },
      {
        name: "Civil Service College (CSC) – eLearning Platform",
        description:
          "Online LMS for government and private sector employees featuring WOG-AD authorization, Azure AD & Singpass SSO (LinkedIn, Udemy, Harvard), and Android/iOS releases.",
        impact: "Hybrid serverless/container AWS architecture & mobile delivery"
      }
    ]
  },
  {
    id: "tata-consultancy-services",
    company: "Tata Consultancy Services",
    location: "Bengaluru, KA, India",
    role: "Assistant Consultant (Technical Lead & Offshore Coordinator)",
    period: "Oct 2015 – Feb 2018",
    employmentType: "Full-time",
    shortName: "TCS",
    summary:
      "Served as technical lead and central liaison between onshore stakeholders at Credit Suisse Bank and offshore engineering teams for equity derivative trade management systems.",
    highlights: [
      "Improved offshore team productivity by 50% by effectively tracking KPIs, aligning tasks to team strengths, and streamlining cross-team communication.",
      "Developed and maintained multi-threaded .NET Core server and SQL database components for high-volume equity derivatives trade capture and batch processing.",
      "Accelerated project turnaround time by proactively resolving delivery blockers, managing escalations, and governing CI/CD releases.",
      "Enhanced team stability and delivery continuity by driving resource planning, hiring cycles, and SOW renewals."
    ],
    technologies: [
      "C#",
      ".NET Core",
      "Web API",
      "SQL Server",
      "Multithreading",
      "Control-M",
      "Splunk",
      "TeamCity",
      "JIRA",
      "ServiceNow"
    ],
    projects: [
      {
        name: "TerraFirma & Enrichment Service (EDIT) – Credit Suisse",
        description:
          "Equity derivatives order capture, amendment, and trade management platform with centralized repository processing.",
        impact: "50% boost in offshore team productivity"
      },
      {
        name: "Structured Note Batch Processing System (SntcBatch)",
        description:
          "End-to-end batch processing orchestration for derivative trade data across upstream and downstream investment banking systems.",
        impact: "Automated Control-M scheduling & Splunk observability"
      }
    ]
  },
  {
    id: "healthfore-technologies",
    company: "Healthfore Technologies",
    location: "Bengaluru, KA, India",
    role: "Technical Lead",
    period: "Mar 2010 – Sep 2015",
    employmentType: "Full-time",
    shortName: "HF",
    summary:
      "Led product engineering, core module development, and third-party clinical integrations for enterprise Hospital Information Systems (HIS).",
    highlights: [
      "Integrated third-party drug databases and laboratory clinical systems with HL7 compliance, enhancing system interoperability by 75%.",
      "Revamped reporting engines and optimized complex SQL queries, improving overall system response time and efficiency by 80%.",
      "Led end-to-end architecture, cost estimation, and delivery of change requests, boosting engineering throughput by 50%.",
      "Streamlined installation package preparation and release automation, reducing deployment effort and errors by 80%."
    ],
    technologies: [
      "C#",
      ".NET Framework",
      "SQL Server",
      "HL7",
      "Reporting Services",
      "Windows Services"
    ],
    projects: [
      {
        name: "Magnum Infinity HIS & Magnum HIS",
        description:
          "Core hospital information management platform covering clinical workflows, lab integrations, drug databases, and enterprise reporting.",
        impact: "75% higher interoperability · 80% faster query response"
      }
    ]
  },
  {
    id: "sobha-renaissance",
    company: "Sobha Renaissance Information Technology Pvt. Ltd.",
    location: "Bengaluru, KA, India",
    role: "Senior Software Engineer",
    period: "May 2006 – Feb 2010",
    employmentType: "Full-time",
    shortName: "SRIT",
    summary:
      "Developed core healthcare modules, patient portals, and hospital back-office solutions within the Hospital Information Management System domain.",
    highlights: [
      "Engineered core modules and user-facing healthcare applications across hospital operations, kiosk workflows, and patient engagement portals.",
      "Collaborated across product engineering teams to build reliable .NET and SQL Server components for healthcare deployments."
    ],
    technologies: ["C#", ".NET Framework", "ASP.NET", "SQL Server"],
    projects: [
      {
        name: "RCare Magnum HIS, Magnum Kiosk & Patient Portal",
        description:
          "Suite of hospital management, self-service patient kiosk, patient portal, and back-office (Renaissance BO) applications.",
        impact: "End-to-end clinical & patient workflow modules"
      }
    ]
  }
];

export default experienceData;