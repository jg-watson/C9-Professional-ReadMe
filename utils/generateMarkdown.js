// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Github Shields](https://img.shields.io/badge/license-${license}-red.svg)`
  };
  return ''
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// find link 
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `![]()`
  };
  return ''
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// find link
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `![]()`
  };
  return ''
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description

${data.description} 

## Table of Contents

## Installation

## Usage

## Credits

## License

## How to Contribute

## Tests

`;
}

module.exports = generateMarkdown;
