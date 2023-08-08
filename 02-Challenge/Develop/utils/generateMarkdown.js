// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   
  if (license) {
    switch (license) {
      case (license = "Mozilla Public License 2.0"):
        return `[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)`;
      case (license = "MIT License"):
        return `[MIT License](https://choosealicense.com/licenses/mit/)`;
      case (license = "GNU GPL License"):
        return `[GNU GPL 3.0 License](https://choosealicense.com/licenses/gpl-3.0/)`;
      case (license = "Apache License 2.0"):
        return `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
    };
  } else {
    return "No license provided.";
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  function renderLicenseSection(license) {
    if (license) {
      return `${renderLicenseLink(license)}`
    }
    return '';
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}  
  ${renderLicenseBadge(data.license)}  
  ## Description
  ${data.description}
  [Deployed link](${data.link})
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ![Project Screenshot](/assets/images/${data.screenshot})
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Credits
  ${data.credits}
  ## License
  ${renderLicenseSection(data.license)}
  

  ## Questions
  If you have questions, please reach out via email or my GitHub account.
  * GitHub: [${data.github}](https://github.com/${data.github})
  * E-mail: [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
