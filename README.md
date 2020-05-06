# CLI Edapi :computer:

### CLI for generate node base API or node auth API, respectively stored in [edmarjunior/base-api](https://github.com/edmarjunior/base-api) and [edmarjunior/auth-api](https://github.com/edmarjunior/auth-api)


### Installation
Soon at npm.

### Utilization
Run the commands below to create a new project (a folder will be created in the directory that will execute the command)

To create an base API (without the authentication module) execute the command below.
```
 $ edapi create {apiName}
```
**Arguments**
 - '-a' or '--auth'. To create an auth-api (with the authentication module), just execute the same command above only by passing the argument '-a' or '--auth', according to any of the commands below:
 ```
  $ edapi create {apiName} -a
 ```
 ```
  $ edapi create {apiName} --auth
 ```
 - '-c' or '--code'. The '-c' or '--code' arguments can also be passed (according to commands below), with this the project will be created and already opened with Visual Studio Code
 ```
  $ edapi create {nome_da_api} -c
 ```
 ```
  $ edapi create {nome_da_api} -a --code
 ```
