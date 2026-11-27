import React, { useState, useMemo } from "react";
import skillsData from "../data/skillsData";
import "../css/skills.css";

export default function TechnicalSkills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const totalSkillsCount = useMemo(
    () => skillsData.reduce((sum, group) => sum + group.skills.length, 0),
    []
  );

  const filteredGroups = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return skillsData
      .filter((group) => activeCategory === "all" || group.id === activeCategory)
      .map((group) => ({
        ...group,
        skills: group.skills.filter((skill) => {
          if (!query) return true;
          return (
            skill.name.toLowerCase().includes(query) ||
            skill.focus.toLowerCase().includes(query) ||
            group.title.toLowerCase().includes(query)
          );
        })
      }))
      .filter((group) => group.skills.length > 0);
  }, [activeCategory, searchTerm]);

  const handleSkillClick = (skill) => {
    setSelectedSkill((current) =>
      current?.name === skill.name ? null : skill
    );
  };

  return React.createElement(
    "section",
    { className: "skills-section", id: "skills" },
    React.createElement(
      "div",
      { className: "skills-container" },
      React.createElement(
        "header",
        { className: "skills-header" },
       // React.createElement("span", { className: "skills-eyebrow" }, "TECHNICAL CAPABILITIES"),
        React.createElement("h3", null, "Technical Skill Set"),
        React.createElement(
          "p",
          { className: "skills-subtitle" },
          `Organized across ${skillsData.length} core domains (${totalSkillsCount} capabilities). Click a skill pill to inspect its focus and related experience codes.`
        ),
        React.createElement(
          "div",
          { className: "skills-toolbar" },
          React.createElement(
            "div",
            { className: "skills-filters", role: "tablist", "aria-label": "Filter technical skills" },
            React.createElement(
              "button",
              {
                type: "button",
                className: `skills-filter-btn ${activeCategory === "all" ? "is-active" : ""}`,
                onClick: () => setActiveCategory("all")
              },
              "All Domains"
            ),
            skillsData.map((group) =>
              React.createElement(
                "button",
                {
                  key: group.id,
                  type: "button",
                  className: `skills-filter-btn ${activeCategory === group.id ? "is-active" : ""}`,
                  onClick: () => setActiveCategory(group.id)
                },
                group.shortLabel
              )
            )
          ),
          React.createElement("input", {
            type: "search",
            className: "skills-search",
            placeholder: "Filter skills (e.g., Entra, PKI, OutSystems)...",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            "aria-label": "Search technical skills"
          })
        ),
        selectedSkill &&
          React.createElement(
            "div",
            { className: "skills-selection-banner", role: "status" },
            React.createElement(
              "span",
              null,
              React.createElement("strong", null, selectedSkill.name),
              ` — ${selectedSkill.focus}`,
              selectedSkill.relatedCompanies?.length > 0
                ? ` · Experience marks: ${selectedSkill.relatedCompanies.join(", ")}`
                : " · Lab / Personal environment"
            ),
            React.createElement(
              "button",
              {
                type: "button",
                className: "skills-clear-btn",
                onClick: () => setSelectedSkill(null)
              },
              "Clear"
            )
          )
      ),
      filteredGroups.length > 0
        ? React.createElement(
            "div",
            { className: "skills-grid" },
            filteredGroups.map((group) =>
              React.createElement(
                "article",
                { key: group.id, className: "skills-card" },
                React.createElement(
                  "div",
                  { className: "skills-card-top" },
                  React.createElement("h3", null, group.title),
                  React.createElement(
                    "span",
                    { className: "skills-card-count" },
                    `${group.skills.length}`
                  )
                ),
                React.createElement("p", { className: "skills-card-desc" }, group.summary),
                React.createElement(
                  "div",
                  { className: "skills-pill-list" },
                  group.skills.map((skill) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    return React.createElement(
                      "button",
                      {
                        key: skill.name,
                        type: "button",
                        className: `skills-pill ${isSelected ? "is-selected" : ""}`,
                        onClick: () => handleSkillClick(skill),
                        "aria-pressed": isSelected
                      },
                      React.createElement("span", { className: "skills-pill-name" }, skill.name),
                      React.createElement("span", { className: "skills-pill-badge" }, skill.focus)
                    );
                  })
                )
              )
            )
          )
        : React.createElement(
            "div",
            { className: "skills-empty" },
            React.createElement("p", null, "No skills match your current filter."),
            React.createElement(
              "button",
              {
                type: "button",
                className: "skills-filter-btn is-active",
                onClick: () => {
                  setActiveCategory("all");
                  setSearchTerm("");
                }
              },
              "Reset Filters"
            )
          )
    )
  );
}