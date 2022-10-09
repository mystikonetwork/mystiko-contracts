oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @mystikonetwork/command-line
$ mystiko COMMAND
running command...
$ mystiko (--version)
@mystikonetwork/command-line/0.0.0 darwin-x64 node-v14.19.0
$ mystiko --help [COMMAND]
USAGE
  $ mystiko COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mystiko hello PERSON`](#mystiko-hello-person)
* [`mystiko hello world`](#mystiko-hello-world)
* [`mystiko help [COMMAND]`](#mystiko-help-command)
* [`mystiko plugins`](#mystiko-plugins)
* [`mystiko plugins:install PLUGIN...`](#mystiko-pluginsinstall-plugin)
* [`mystiko plugins:inspect PLUGIN...`](#mystiko-pluginsinspect-plugin)
* [`mystiko plugins:install PLUGIN...`](#mystiko-pluginsinstall-plugin-1)
* [`mystiko plugins:link PLUGIN`](#mystiko-pluginslink-plugin)
* [`mystiko plugins:uninstall PLUGIN...`](#mystiko-pluginsuninstall-plugin)
* [`mystiko plugins:uninstall PLUGIN...`](#mystiko-pluginsuninstall-plugin-1)
* [`mystiko plugins:uninstall PLUGIN...`](#mystiko-pluginsuninstall-plugin-2)
* [`mystiko plugins update`](#mystiko-plugins-update)

## `mystiko hello PERSON`

Say hello

```
USAGE
  $ mystiko hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/packages/mystiko-contracts/blob/v0.0.0/dist/commands/hello/index.ts)_

## `mystiko hello world`

Say hello world

```
USAGE
  $ mystiko hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ mystiko hello world
  hello world! (./src/commands/hello/world.ts)
```

## `mystiko help [COMMAND]`

Display help for mystiko.

```
USAGE
  $ mystiko help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for mystiko.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `mystiko plugins`

List installed plugins.

```
USAGE
  $ mystiko plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ mystiko plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `mystiko plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mystiko plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ mystiko plugins add

EXAMPLES
  $ mystiko plugins:install myplugin 

  $ mystiko plugins:install https://github.com/someuser/someplugin

  $ mystiko plugins:install someuser/someplugin
```

## `mystiko plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ mystiko plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ mystiko plugins:inspect myplugin
```

## `mystiko plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mystiko plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ mystiko plugins add

EXAMPLES
  $ mystiko plugins:install myplugin 

  $ mystiko plugins:install https://github.com/someuser/someplugin

  $ mystiko plugins:install someuser/someplugin
```

## `mystiko plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ mystiko plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ mystiko plugins:link myplugin
```

## `mystiko plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mystiko plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mystiko plugins unlink
  $ mystiko plugins remove
```

## `mystiko plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mystiko plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mystiko plugins unlink
  $ mystiko plugins remove
```

## `mystiko plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mystiko plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mystiko plugins unlink
  $ mystiko plugins remove
```

## `mystiko plugins update`

Update installed plugins.

```
USAGE
  $ mystiko plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
