function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GPL: '[![License: GPL](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  };

  if (license && licenseBadges[license]) {
    return licenseBadges[license];
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    GPL: 'https://www.gnu.org/licenses/gpl-3.0',
  };

  if (license && licenseLinks[license]) {
    return `[License](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);

  return `
# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## License
${licenseLink}

## Contributing
${data.contGuide}

## Tests
${data.tests}

## Questions
If you have any questions, please feel free to reach out to me via email at ${data.email} or visit my GitHub profile at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
