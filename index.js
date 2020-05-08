#!/usr/bin/env node
'use strict';

const program = require('commander');
const pkg = require('./package.json')
const exec = require('child_process').exec;
const path = require('path');
const chalk = require('chalk');
const fs = require('fs');

const authREADME = require('./authREADME');
const baseREADME = require('./baseREADME');

program.version(pkg.version)
  .command('create <projectName>')
  .description('Create project for API with nodejsm, parameter required <projectName>, parameter optional [openVsCode] with value equal [code]')
  .option('-a, --auth [auth]', 'Create project with Auth module')
  .option('-c, --code [code]', 'Open project with Visual Studio Code')
  .action(function createApi(projectName, options) {

    const repository = options.auth 
      ? 'https://github.com/edmarjunior/auth-api.git' 
      : 'https://github.com/edmarjunior/base-api.git';

    exec(`git clone ${repository} ${projectName}`, function( err, stdout, stderr ) {
      console.log('creating projetc ...');

      if(err) {
        console.log(chalk.red(stderr));
        return;
      }
      
      console.log(chalk.green(`${projectName} project successfully created with edapi!`));

      /** 
       * creating README.md 
       * */ 
      const modelReadme = options.auth ? authREADME : baseREADME;
      const pathNewReadme = path.resolve(__dirname, projectName, 'README.md');
      
      const dataNewReadme = modelReadme
        .replace('[project_name]', projectName)
        .replace('[version]', pkg.version);
      
      fs.writeFile(pathNewReadme, dataNewReadme, 'utf8', function (err) {
          if (err) return console.log(err);
      });

      /** 
       * executing too many commands
       * */
      const pathNewProject = path.resolve(__dirname, projectName);
      const commands = `rm -r .git && git init${options.code ? ' && code .' : ''}`;

      exec(commands, { cwd: pathNewProject }, function (err, stdout, stderr) {
        if(err) {
          console.log(chalk.red(stderr));
          return;
        }
      });

    });
  });

program.parse(process.argv);
