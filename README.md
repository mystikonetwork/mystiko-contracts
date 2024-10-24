# Mystiko Contracts

[![build status](https://github.com/mystikonetwork/mystiko-contracts/actions/workflows/build.yml/badge.svg)](https://github.com/mystikonetwork/mystiko-contracts/actions/workflows/build.yml)

This repository contains the core and settings contracts that power Mystiko Network, as well as the accompanying tools and utilities for deployment and interaction. The provided packages allow for seamless management of Mystiko's zero-knowledge, governance, and roller/relayer pools.

**Mystiko Core Contracts**

The core contracts are essential components that define the fundamental operations of Mystiko Network:
* [@mystikonetwork/contracts](packages/contracts) - Implements the core logic for deposits and the commitment pool.
* [@mystikonetwork/contracts-verifier](packages/contracts-verifier) - ZK (zero-knowledge) verifier contracts, responsible for verifying zero-knowledge proofs within Mystiko.

**Mystiko Settings Contracts**

The settings contracts are governed by Mystiko's governance system and manage various roles and permissions within the network:
* [@mystikonetwork/contracts-settings](packages/contracts-settings) - Governance-controlled settings contracts, enabling the configuration of Mystiko Network's operations.
* [@mystikonetwork/contracts-certificate](packages/contracts-certificate) - Contracts responsible for the screening process, ensuring network compliance.
* [@mystikonetwork/contracts-roller](packages/contracts-roller) - Contracts for managing the Roller Pool, used in various zero-knowledge proof systems.
* [@mystikonetwork/contracts-relayer](packages/contracts-relayer) - Relayer pool contracts, managing the interactions between relayers and the Mystiko Network.

**ABI for TypeScript**

To interact with these contracts, Mystiko provides ABI (Application Binary Interface) packages designed TypeScript integration:
* [@mystikonetwork/contracts-abi](packages/abi) -  Core contracts ABI for TypeScript, facilitating interaction with deposit and commitment pools.
* [@mystikonetwork/contracts-abi-settings](packages/abi-settings) - ABI for Mystiko's governance system, enabling contract interaction from TypeScript.
* [@mystikonetwork/contracts-abi-certificate](packages/abi-certificate) - ABI for certificate screening contracts.
* [@mystikonetwork/contracts-abi-roller](packages/abi-roller) -  ABI for interacting with Roller Pool contracts.
* [@mystikonetwork/contracts-abi-relayer](packages/abi-relayer) - ABI for interacting with relayer contracts.

**Deployment Scripts**

Automate the deployment process using the following package:
* [@mystikonetwork/contracts-deploy](packages/deploy) - A comprehensive set of deployment scripts for Mystiko Network's smart contracts.

**Utilities**

Utility packages to assist with common tasks when interacting with contracts:
* [@mystikonetwork/contracts-utils](packages/utils) - A set of utility functions for working with Mystiko contracts using TypeScript.

**Getting Started**

To begin using Mystiko's packages, follow the steps below:
1. Log in to GitHub's NPM Registry
   Use your GitHub username and a Personal Access Token (PAT) to log in to the NPM registry:
```bash
npm login --scope=@mystikonetwork --registry=https://npm.pkg.github.com
```
2. Install the packages you need:
   Install the desired contract packages and ABI packages for TypeScript:
```bash
npm install @mystikonetwork/contracts-settings
npm install @mystikonetwork/contracts-certificate
npm install @mystikonetwork/contracts-roller
npm install @mystikonetwork/contracts-relayer

npm install @mystikonetwork/contracts-abi
npm install @mystikonetwork/contracts-abi-settings
npm install @mystikonetwork/contracts-abi-certificate
npm install @mystikonetwork/contracts-abi-roller
npm install @mystikonetwork/contracts-abi-relayer

npm install @mystikonetwork/contracts-utils
```
This setup equips you with all the necessary packages to manage, deploy, and interact with Mystiko's smart contracts using TypeScript.
