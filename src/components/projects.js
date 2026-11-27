import React from "react";
import "../css/projects.css";

const PROJECTS_DATA = [
  {
    id: "iam-compliance-manager",
    title: "Identity Audit & Compliance Manager",
    client: "Clients: SP Services (Singapore Power), SMRT, Singapore",
    url: "https://deepidentity.com/products",
    urlLabel: "deepidentity.com/products",
    description:
      "Enterprise identity governance and compliance solution enabling automated auditing, access reviews, and policy enforcement across connected enterprise applications.",
    metrics: ["13 IAM connectors", "2,500 users", "27 endpoint systems", "S$1.2M budget"]
  },
  {
    id: "csc-elearning-learn",
    title: "CSC – eLearning LEARN",
    client: "Client: Civil Service College, Singapore",
    url: "http://learn.gov.sg/",
    urlLabel: "learn.gov.sg",
    description:
      "Multi-tenant learning platform suite for public-sector employees integrated with external learning catalogs including Harvard, Udemy, and LinkedIn Learning.",
    metrics: ["200k users", "Multi-tenant suite", "External catalog integrations"]
  },
  {
    id: "terrafirma-edit",
    title: "TerraFirma & Enrichment Service EDIT",
    client: "Product Owner: Credit Suisse",
    description:
      "Equity derivative investment trade management and enrichment service that captures, validates, displays, and manages equity derivative orders.",
    metrics: ["Equity derivatives", "Trade enrichment", "Investment banking"]
  },
  {
    id: "structured-note-batch",
    title: "Structured Note Batch Processing System",
    client: "Product Owner: Credit Suisse",
    description:
      "Batch ETL and workflow processing platform coordinated via Control-M to manage reliable data movement across upstream and downstream investment banking systems.",
    metrics: ["Control-M batch scheduling", "Upstream/downstream ETL", "Investment banking"]
  },
  {
    id: "magnum-infinity-his",
    title: "Magnum Infinity HIS",
    client: "Hospital Management Suite",
    description:
      "Comprehensive Hospital Information System computerizing core clinical operations and administrative workflows across hospital departments.",
    metrics: ["Clinical & admin workflows", "Hospital management"]
  },
  {
    id: "magnum-kiosk",
    title: "Magnum Kiosk",
    client: "Client: Aditya Birla Memorial Hospital, Pune, India",
    description:
      "Flexible and scalable self-service information utility tailored for healthcare providers and patient touchpoints.",
    metrics: ["Healthcare providers", "Scalable kiosk utility"]
  }
];

export default function Projects() {
  return React.createElement(
    "section",
    { className: "projects-section", id: "projects" },
    React.createElement(
      "div",
      { className: "projects-container" },
      React.createElement(
        "header",
        { className: "projects-intro" },
        // React.createElement(
        //   "span",
        //   { className: "projects-eyebrow" },
        //   "KEY INITIATIVES & OUTCOMES"
        // ),
        React.createElement("h3", null, "Projects"),
        React.createElement(
          "p",
          {className: "projects-intro"},
          "Selected enterprise platforms, identity and banking systems, and healthcare solutions delivered across multi-year engagements."
        )
      ),
      React.createElement(
        "div",
        { className: "projects-grid" },
        PROJECTS_DATA.map((project) =>
          React.createElement(
            "article",
            { key: project.id, className: "project-card" },
            React.createElement(
              "div",
              { className: "project-card-header" },
              React.createElement("h3", null, project.title),
              project.client &&
                React.createElement(
                  "p",
                  { className: "project-client" },
                  project.client
                ),
              project.url &&
                React.createElement(
                  "a",
                  {
                    href: project.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "project-link"
                  },
                  project.urlLabel || project.url
                )
            ),
            React.createElement(
              "p",
              { className: "project-description" },
              project.description
            ),
            project.metrics?.length > 0 &&
              React.createElement(
                "div",
                { className: "project-metrics" },
                project.metrics.map((metric) =>
                  React.createElement(
                    "span",
                    { key: metric, className: "project-metric-pill" },
                    metric
                  )
                )
              )
          )
        )
      )
    )
  );
}