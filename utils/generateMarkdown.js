// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
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

    return `
${renderLicenseBadge(license)};
${renderLicenseLink(license)}`

  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
1. [Description](#description)
2. [Installation Instructions](#installation-instructions)
3. [Usage Information](#usage-information)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description <a name="description"></a>
${data.description}

## Installation Instructions <a name="installation-instructions"></a>
${data.instructions}

## Usage Information <a name="usage-information"></a>
${data.usage}

## License <a name="license"></a>
${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Contributing <a name="contributing"></a>
${data.contributing}

## Tests <a name="tests"></a>

## Questions <a name="questions"></a>
${data.username}

${data.email}


`;
}

export default generateMarkdown;
