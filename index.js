#!/usr/bin/env node
'use strict';

var program = require('commander');
var pkg = require('./package.json')
var exec = require('child_process').exec;
var path = require('path');
var minimist = require('minimist');
const chalk = require('chalk');


program.version(pkg.version)
  .command('create <projectName>')
  .description('Create project for API with nodejsm, parameter required <projectName>, parameter optional [openVsCode] with value equal [code]')
  .option('-c, --code [code]', 'Open project with Visual Studio Code')
  .action(function createApi(projectName, options) {

    // console.log(chalk.green('To-do adicionado com sucesso!'));
    // console.log(chalk.red('Falha para adicionar'));
    exec(`git clone https://github.com/edmarjunior/base-api.git ${projectName}`, function( err, stdout, stderr ) {
    
      console.log('creating projetc ...');

      if(err) {
        console.log(chalk.red(stderr));
        return;
      }
      
      console.log(chalk.green(`${projectName} project successfully created with edapi!`));
        
      if (!options.code)
        return;

      exec('code .', { cwd: path.resolve(__dirname, projectName) }, function (err, stdout, stderr) {
        console.log('opening with vs-code ...');
        
        if(err) {
          console.log(chalk.red(stderr));
          return;
        } 

        console.log('vs-code opened!');
      });
    });
  });

program.parse(process.argv);