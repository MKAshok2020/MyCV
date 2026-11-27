import React, { useState } from "react";
import "../index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { globalConstants } from "../Helpers/constants";

const LinkedInIcon = React.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  },
  React.createElement("path", {
    d: "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
  })
);

const EmailIcon = React.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  },
  React.createElement("path", {
    d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
  })
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navLinks = [
    { label: "Profile Summary", path: globalConstants.UrlPaths.Introduction },
    { label: "Work Experience", path: globalConstants.UrlPaths.WorkExperience },
    { label: "Education", path: globalConstants.UrlPaths.Education },
    { label: "Skills", path: globalConstants.UrlPaths.TechnicalSkills },
    { label: "Projects", path: globalConstants.UrlPaths.Projects }
  ];

  return React.createElement(
    "nav",
    { className: "navbar navbar-expand-lg navbar-custom sticky-top" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "a",
        {
          className: "nav-link-new navbar-brand",
          href: `/${globalConstants.UrlPaths.Introduction}`,
          onClick: closeMenu
        },
        "M K Ashok"
      ),
      React.createElement(
        "button",
        {
          className: "navbar-toggler",
          type: "button",
          onClick: toggleMenu,
          "aria-controls": "navbarNav",
          "aria-expanded": isOpen,
          "aria-label": "Toggle navigation"
        },
        React.createElement("span", { className: "navbar-toggler-icon" })
      ),
      React.createElement(
        "div",
        {
          className: `collapse navbar-collapse${isOpen ? " show" : ""}`,
          id: "navbarNav"
        },
        React.createElement(
          "ul",
          { className: "navbar-nav me-auto" },
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "a",
              {
                className: "nav-link-new",
                href: globalConstants.LinkedInPath,
                target: "_top",
                rel: "noopener noreferrer",
                "aria-label": "LinkedIn",
                onClick: closeMenu
              },
              LinkedInIcon
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "a",
              {
                className: "nav-link-new",
                href: "mailto:ashok.m.karunanithi@gmail.com?Subject=Contact",
                target: "_top",
                "aria-label": "Email",
                onClick: closeMenu
              },
              EmailIcon
            )
          )
        ),
        React.createElement(
          "ul",
          { className: "navbar-nav" },
          navLinks.map((item) =>
            React.createElement(
              "li",
              { key: item.label, className: "nav-item" },
              React.createElement(
                "a",
                {
                  className: "nav-link-new",
                  href: `/${item.path}`,
                  onClick: closeMenu
                },
                item.label
              )
            )
          )
        )
      )
    )
  );
}