function generateProjectUrl(github, title) {
    const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
    return `https://github.com/${github}/${kebabCaseTitle}`;
  }
  
  // TODO: Create a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(license, github, title) {
    if (license !== "None") {
      return `[![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(
        github,
        title
      )})`;
    }
    return "";
  }
  
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  // TODO function renderLicenseLink(license) {}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== "None") {
      return (
      `## License
         
      This project is licensed under the ${license} license.`
      )
    }
    return ''
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `
  # ${data.title}
  ${renderLicenseBadge(data.license, data.github, data.title)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install necessarry dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`
      
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  To run tests, run the following command:
  
  \`\`\`
  ${data.tests}
  \`\`\`
  
  ## Questions
  
  If you have any questions, open an issue or contact [${data.github}](${data.url}) at ${data.email}.
  
  `;
  }
  
  module.exports = generateMarkdown;