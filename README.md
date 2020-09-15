# forms-web

> ERO Cloud form application

## Project setup on CentOS 7.x server

This project uses `Puppeteer` for testing. To install the dependencies run the following command.

``` bash
sudo yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc
```

Then update the `nss` library 

``` bash
sudo yum update nss -y
```

Please visit the [troubleshooting guide](https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md) for CentOS if any issue.

## Managing `env` files

No production environment file can't be part of the codebase, so they are ignored by the Source Code Management system (Github). We copy the new values of these files at every build.

## CI/CD setup

This project uses `Cypress` and `Percy` for testing in CI/CD environment. Export `PERCY_TOKEN` and `CYPRESS_RECORD_KEY` before any build command on Jenkins. Those variables can't be included in the codebase or the `package.json` file. The `CYPRESS_RECORD_KEY` must match the cypress project. Cypress project ID can be updated in `cypress.json` file accordingly.

## Development

This project is built with `Nuxt.js` using the `create-nuxt-app` CLI tool. The following commands will help in setting up the project and start the development process.

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
