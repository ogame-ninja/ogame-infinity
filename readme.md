# Ogame Infinity

This repository contains the monolithic code mess for the Ogame Infinity extension.

Note: since version 2.3.7 it can be no longer loaded directly as an unpacked extension to be tested locally.

## Downloads

- Firefox: https://addons.mozilla.org/en-US/firefox/addon/ogame-infinity/
- Chrome: https://chrome.google.com/webstore/detail/ogame-infinity/hfojakphgokgpbnejoobfamojbgolcbo
- Edge: https://microsoftedge.microsoft.com/addons/detail/ogame-infinity/eejkmenlfccjjekgmcjkladejfhklgkm

### Third party dependencies

This extension uses 3 external js libraries:

- https://github.com/chartjs/Chart.js/releases/download/v2.9.3/Chart.bundle.min.js
- https://github.com/emn178/chartjs-plugin-labels/blob/v1.1.0/build/chartjs-plugin-labels.min.js
- https://github.com/cure53/DOMPurify/releases/tag/2.4.1
- https://github.com/pieroxy/lz-string/releases/tag/1.5.0

## Contributing

Did you encounter a bug or have a suggestion for a new feature? Please join our Discord:

Did you fix it already? Please fork the latest `master` branch and raise a Pull Request

| Type        | Branch naming convention          |
| ----------- | --------------------------------- |
| Bugfix      | `fix/name_of_fix`                 |
| Improvement | `improvement/name_of_improvement` |
| Feature     | `feature/name_of_feature`         |

## Code formatting

Please install the tools once by running: `npm install`

Then, make sure to format the code according to our rules before doing any new _commit_/_pull request_ by using the following command:

`npm run format`

## Automatic packaging and deployment

GitHub's actions are used to automatically package and deploy new updates.

### Manual packaging

#### Install dev dependencies

    npm install -g terser
    npm install -g clean-css
    npm install -g clean-css-cli

#### Run the packer

    ./packaging.sh {version_number}

Example:

    ./packaging.sh 1.5.3

Version number is optional and can be omitted, for example doing test builds, by default the version number will be built based on time and date.