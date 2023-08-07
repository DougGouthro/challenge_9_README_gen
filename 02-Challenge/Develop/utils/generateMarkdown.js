// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return 'SOME sTHINGS'
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ANYTHING WE WANT

  In order to use a variable, we say 'dollar curlybraces'
  and put a variable in it like this

  ${data.description}

  ${renderLicenseBadge()}

`;
}

module.exports = generateMarkdown;
