#!/usr/bin/env node
const chalk = require('chalk')
const boxen = require('boxen')

const options = {
    margin: 1,
    padding: 2,
    borderColor: 'white',
    borderStyle: 'double'
}

// Text + chalk definitions
const data = {
    name: chalk.white.bold('Glen Gringgo Bangkila |'),
    handle: chalk.hex('#41B883')('hadefication'),
    work: chalk.white('Lead Web Developer at Les Bois Engineering Innovation'),
    twitter: chalk.hex('#1DA1F2')('https://twitter.com/hadefication'),
    github: chalk.white('https://github.com/hadefication'),
    linkedin: chalk.hex('#0274B3')('https://linkedin.com/in/hadefication'),
    web: chalk.hex('#41B883')('https://glen.bangkila.me'),
    npx: chalk.white('npx glenbangkila'),
    labelWork: chalk.white.bold('      Work:'),
    labelTwitter: chalk.white.bold('   Twitter:'),
    labelGitHub: chalk.white.bold('    GitHub:'),
    labelLinkedIn: chalk.white.bold('  LinkedIn:'),
    labelWeb: chalk.white.bold('       Web:'),
    labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
