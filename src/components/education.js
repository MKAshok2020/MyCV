import React from "react";
import "../css/education.css";

const EDUCATION_ITEMS = [
  {
    id: "mca",
    degree: "Master of Computer Applications",
    institution: "Madras University",
    location: "Chennai, India",
    period: "2000 – 2003"
  },
  {
    id: "bsc",
    degree: "Bachelor of Computer Science",
    institution: "Bharathiar University",
    location: "Coimbatore, India",
    period: "1996 – 1999"
  }
];

const CERTIFICATION_ITEMS = [
  {
    id: "aws-saa",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    badgeSrc: require("../content/resources/AWS-Certified-SA-Associate_badge.png")
  },
  {
    id: "aws-dva",
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    badgeSrc: require("../content/resources/AWS-Certified-Developer-Associate_badge.png")
  },
  {
    id: "csm",
    title: "Certified Scrum Master",
    issuer: "Scrum Alliance",
    badgeSrc: require("../content/resources/sa-csm-600.png")
  }
];

function resolveAssetSrc(asset) {
  if (!asset) return null;
  return typeof asset === "string" ? asset : asset.default || null;
}

export default function Education() {
  return React.createElement(
    "section",
    { className: "education-section", id: "education" },
    React.createElement(
      "div",
      { className: "education-container" },
      React.createElement(
        "header",
        { className: "education-intro" },
       // React.createElement("span",{ className: "education-eyebrow" },"ACADEMIC & CREDENTIALS" ),
        React.createElement("h3", null, "Education & Certifications"),
        React.createElement(
          "p",
          null,
          "Foundational computer science degrees alongside industry-recognized cloud and Agile credentials."
        )
      ),
      React.createElement(
        "div",
        { className: "education-grid" },
        React.createElement(
          "article",
          { className: "education-card" },
          React.createElement(
            "div",
            { className: "education-card-header" },
            React.createElement(
              "div",
              { className: "education-card-icon", "aria-hidden": "true" },
              React.createElement("i", { className: "fa fa-graduation-cap" })
            ),
            React.createElement(
              "div",
              null,
              React.createElement("h3", null, "Education"),
              React.createElement(
                "p",
                { className: "education-card-sub" },
                "University degrees"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "education-list" },
            EDUCATION_ITEMS.map((item) =>
              React.createElement(
                "div",
                { key: item.id, className: "education-entry" },
                React.createElement(
                  "div",
                  { className: "education-entry-top" },
                  React.createElement("h4", null, item.degree),
                  React.createElement(
                    "span",
                    { className: "education-period-pill" },
                    item.period
                  )
                ),
                React.createElement(
                  "p",
                  { className: "education-institution" },
                  `${item.institution} · ${item.location}`
                )
              )
            )
          )
        ),
        React.createElement(
          "article",
          { className: "education-card" },
          React.createElement(
            "div",
            { className: "education-card-header" },
            React.createElement(
              "div",
              { className: "education-card-icon", "aria-hidden": "true" },
              React.createElement("i", { className: "fa fa-award" })
            ),
            React.createElement(
              "div",
              null,
              React.createElement("h3", null, "Certifications"),
              React.createElement(
                "p",
                { className: "education-card-sub" },
                "Verified cloud & delivery credentials"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "education-cert-list" },
            CERTIFICATION_ITEMS.map((cert) => {
              const src = resolveAssetSrc(cert.badgeSrc);
              return React.createElement(
                "div",
                { key: cert.id, className: "education-cert-item" },
                React.createElement(
                  "div",
                  { className: "education-badge-frame" },
                  src &&
                    React.createElement("img", {
                      src,
                      alt: `${cert.title} badge`,
                      className: "education-badge-img"
                    })
                ),
                React.createElement(
                  "div",
                  { className: "education-cert-body" },
                  React.createElement("h4", {className: "cert-name"}, cert.title),
                  React.createElement(
                    "span",
                    { className: "education-cert-issuer" },
                    cert.issuer
                  )
                )
              );
            })
          )
        )
      )
    )
  );
}