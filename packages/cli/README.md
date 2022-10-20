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
@mystikonetwork/command-line/0.2.1 darwin-x64 node-v14.19.0
$ mystiko --help [COMMAND]
USAGE
  $ mystiko COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

* [`mystiko deposit TOKEN`](#mystiko-deposit-token)
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
* [`mystiko transfer TOKEN`](#mystiko-transfer-token)
* [`mystiko withdraw TOKEN`](#mystiko-withdraw-token)

## `mystiko base`

```
USAGE
  $ mystiko base [-e <value>] [-m] [-k <value>]

FLAGS
  -e, --env=<value>         [default: .env] Env path
  -k, --privateKey=<value>  Signer private key
  -m, --main                Is main net
```

_See
code: [dist/commands/base.ts](https://github.com/mystikonetwork/mystiko-contracts/blob/v0.2.1/dist/commands/base.ts)_

## `mystiko deposit TOKEN`

Deposit token from source chain id

```
USAGE
  $ mystiko deposit [TOKEN] -f <value> [-e <value>] [-m] [-k <value>] [-t <value>] [-b
    loop|poly|tbridge|celer|layerZero|axelar] [-a <value>]

ARGUMENTS
  TOKEN  (ETH|BNB|MATIC|AVAX|FTM|DEV|mETH|mBNB|mMATIC|mAVAX|mFTM|mDEV|MTT|mUSD) Deposit token symbol

FLAGS
  -a, --amount=<value>      Deposit amount
  -b, --bridge=<option>     [default: loop] Bridge Type
                            <options: loop|poly|tbridge|celer|layerZero|axelar>
  -e, --env=<value>         [default: .env] Env path
  -f, --from=<value>        (required) Token source chain id
  -k, --privateKey=<value>  Signer private key
  -m, --main                Is main net
  -t, --to=<value>          Token dest chain id (default: from)

DESCRIPTION
  Deposit token from source chain id

EXAMPLES
  $ mystiko deposit BNB --from 97 --to 97
```

_See
code: [dist/commands/deposit.ts](https://github.com/mystikonetwork/mystiko-contracts/blob/v0.2.1/dist/commands/deposit.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.15/src/commands/help.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.4/src/commands/plugins/index.ts)_

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

## `mystiko transfer TOKEN`

Transfer token from chain id

```
USAGE
  $ mystiko transfer [TOKEN] -f <value> [-e <value>] [-m] [-k <value>] [-b
    loop|poly|tbridge|celer|layerZero|axelar] [-a <value>] [-p <value>] [-s <value>] [-v <value>]

ARGUMENTS
  TOKEN  (ETH|BNB|MATIC|AVAX|FTM|DEV|mETH|mBNB|mMATIC|mAVAX|mFTM|mDEV|MTT|mUSD) Deposit token symbol

FLAGS
  -a, --amount=<value>           Deposit amount
  -b, --bridge=<option>          [default: loop] Bridge Type
                                 <options: loop|poly|tbridge|celer|layerZero|axelar>
  -e, --env=<value>              [default: .env] Env path
  -f, --from=<value>             (required) Token source chain id
  -k, --privateKey=<value>       Signer private key
  -m, --main                     Is main net
  -p, --publicAddress=<value>    Transfer public address
  -s, --shieldedAddress=<value>  Mystiko wallet shielded address
  -v, --version=<value>          Pool contract version

DESCRIPTION
  Transfer token from chain id

EXAMPLES
  $ mystiko transfer BNB --from 97
```

_See
code: [dist/commands/transfer.ts](https://github.com/mystikonetwork/mystiko-contracts/blob/v0.2.1/dist/commands/transfer.ts)_

## `mystiko withdraw TOKEN`

Withdraw token from chain id

```
USAGE
  $ mystiko withdraw [TOKEN] -f <value> [-e <value>] [-m] [-k <value>] [-b
    loop|poly|tbridge|celer|layerZero|axelar] [-a <value>] [-p <value>]

ARGUMENTS
  TOKEN  (ETH|BNB|MATIC|AVAX|FTM|DEV|mETH|mBNB|mMATIC|mAVAX|mFTM|mDEV|MTT|mUSD) Deposit token symbol

FLAGS
  -a, --amount=<value>         Deposit amount
  -b, --bridge=<option>        [default: loop] Bridge Type
                               <options: loop|poly|tbridge|celer|layerZero|axelar>
  -e, --env=<value>            [default: .env] Env path
  -f, --from=<value>           (required) Token source chain id
  -k, --privateKey=<value>     Signer private key
  -m, --main                   Is main net
  -p, --publicAddress=<value>  withdraw public address

DESCRIPTION
  Withdraw token from chain id

EXAMPLES
  $ mystiko withdraw BNB --from 97
```

_See
code: [dist/commands/withdraw.ts](https://github.com/mystikonetwork/mystiko-contracts/blob/v0.2.1/dist/commands/withdraw.ts)_
<!-- commandsstop -->
