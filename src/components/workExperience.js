import React, { useState } from "react";
import experienceData from "../data/experienceData";
import "../css/experience.css";

// Load ONLY .png files from ../asset/logo
const pngContext = require.context("../asset/logo", false, /\.png$/i);

const pngLogoMap = pngContext.keys().reduce((acc, key) => {
  // "./TCS.png" -> "tcs"
  const baseName = key.replace(/^\.\//, "").replace(/\.png$/i, "").toLowerCase();
  const mod = pngContext(key);
  acc[baseName] = typeof mod === "string" ? mod : mod?.default || null;
  return acc;
}, {});

function getPngAssetUrl(shortName) {
  const key = shortName?.trim().toLowerCase();
  if (!key) return null;
  return pngLogoMap[key] || null;
}

function CompanyMark({ experience }) {
  const [imgError, setImgError] = useState(false);

  const logoSrc = !imgError ? getPngAssetUrl(experience?.shortName) : null;
  const fallbackLabel =
    experience?.shortName?.trim() || experience?.company?.[0] || "E";

  if (logoSrc) {
    return React.createElement("img", {
      src: logoSrc,
      alt: `${experience.company} logo`,
      className: "experience-company-mark",
      onError: () => setImgError(true)
    });
  }

  return React.createElement(
    "div",
    { className: "experience-company-mark", "aria-hidden": "true" },
    fallbackLabel
  );
}

function TechBadge({ children }) {
  return React.createElement(
    "span",
    { className: "experience-tech-badge" },
    children
  );
}

function ExperienceCard({ experience }) {
  const [expanded, setExpanded] = useState(false);

  return React.createElement(
    "article",
    { className: "experience-card" },
    React.createElement(
      "div",
      { className: "experience-card-top" },
      React.createElement(
        "div",
        { className: "experience-heading" },

        
        React.createElement("div",
          { className: "experience-company-row" },
          React.createElement(CompanyMark, { experience }),
          React.createElement("h3", null, experience.company),
          React.createElement(
            "span",
            { className: "experience-location" },
            experience.location
          )
        ),
        React.createElement("p", { className: "experience-role" }, experience.role),
        React.createElement(
          "div",
          { className: "experience-meta" },
          React.createElement("span", null, experience.period),
          experience.employmentType &&
            React.createElement(
              React.Fragment,
              null,
              React.createElement("span", { className: "experience-meta-dot" }, "•"),
              React.createElement("span", null, experience.employmentType)
            )
        )
      ),
      React.createElement(
        "button",
        {
          className: "experience-toggle",
          type: "button",
          onClick: () => setExpanded((value) => !value),
          "aria-expanded": expanded,
          "aria-label": `${expanded ? "Collapse" : "Expand"} ${experience.company}`
        },
        React.createElement("span", null, expanded ? "−" : "+")
      )
    ),
    React.createElement(
      "p",
      { className: "experience-summary" },
      experience.summary
    ),
    expanded &&
      React.createElement(
        "div",
        { className: "experience-expanded" },
        experience.highlights?.length > 0 &&
          React.createElement(
            "section",
            { className: "experience-subsection" },
            React.createElement("h4", null, "Key responsibilities & achievements"),
            React.createElement(
              "ul",
              { className: "experience-highlights" },
              experience.highlights.map((item, itemIndex) =>
                React.createElement(
                  "li",
                  { key: `${experience.id}-highlight-${itemIndex}` },
                  item
                )
              )
            )
          ),
        experience.projects?.length > 0 &&
          React.createElement(
            "section",
            { className: "experience-subsection" },
            React.createElement("h4", null, "Selected projects"),
            React.createElement(
              "div",
              { className: "experience-project-grid" },
              experience.projects.map((project) =>
                React.createElement(
                  "div",
                  { className: "experience-project", key: project.name },
                  React.createElement("h5", null, project.name),
                  React.createElement("p", null, project.description),
                  project.impact && React.createElement("span", null, project.impact)
                )
              )
            )
          ),
        experience.technologies?.length > 0 &&
          React.createElement(
            "section",
            { className: "experience-subsection" },
            React.createElement("h4", null, "Technologies & expertise"),
            React.createElement(
              "div",
              { className: "experience-tech-list" },
              experience.technologies.map((technology) =>
                React.createElement(TechBadge, { key: technology }, technology)
              )
            )
          )
      )
  );
}

export default function WorkExperience() {
  return React.createElement(
    "section",
    { className: "professional-experience", id: "experience" },
    React.createElement(
      "div",
      { className: "experience-container" },
      React.createElement(
        "div",
        { className: "experience-intro" },
        React.createElement("h3", null, "Professional Experience"),
        React.createElement(
          "p",
          null,
          "Building enterprise solutions, leading engineering teams, and architecting secure, scalable systems."
        )
      ),
      React.createElement(
        "div",
        { className: "experience-stats", "aria-label": "Career highlights" },
        React.createElement(
          "div",
          { className: "experience-stat" },
          React.createElement("strong", null, "20+"),
          React.createElement("span", null, "Years of experience")
        )
      ),
      React.createElement(
        "div",
        { className: "experience-timeline" },
        experienceData.map((experience) =>
          React.createElement(
            "div",
            { className: "experience-timeline-item", key: experience.id }, 
            React.createElement(
              "div",
              { className: "experience-timeline-marker" },
              React.createElement("span", null, experience.period),
              React.createElement("span", { className: "experience-timeline-dot", "aria-hidden": "true"  })
            ),
            React.createElement(ExperienceCard, { experience})
          )
        )
      )
    )
  );
}