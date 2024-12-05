// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT") {
    return "mit badge goes here" //Go to google and get a READme License badge//
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT") {
    return "mit link goes here" //Go to google and get a READme License link//
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {

    return `## License
${renderLicenseBadge(license)};
${renderLicenseLink(license)}`

  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Installation Instructions
${data.instructions}

## Usage Information
${data.usage}

## Table of Contents
${data.username}

${data.email}

${renderLicenseSection(data.license)}
`;
}

export default generateMarkdown;
