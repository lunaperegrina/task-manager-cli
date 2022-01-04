#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';

const program = new Command();
program.version('0.0.1');
const colors = require('colors');

/** **************************************** */

// Order a coffee
// $ coffee-shop order type arguments
// $ coffee-shop o type arguments
program
    .command('order <type>') // sub-command name, coffeeType = type, required
    .alias('o') // alternative sub-command is `o`
    .description('Order a coffee') // command description
    .option('-s, --sugar [value]', 'Sugar level', 'Low') // args.sugar = value, optional, default is 'Low'
    .option('-d, --decaf', 'Decaf coffee') // args.decaf = true/false, optional, default is `undefined`
    .option('-c, --cold', 'Cold coffee') // args.cold = true/false, optional, default is `undefined`
    .option('-S, --served-in [value]', 'Served in', 'Mug') // args.servedIn = value, optional, default is 'Mug'
    .option('--no-stirrer', 'Do not add stirrer') // args.stirrer = true/false, optional, default is `true`

// function to execute when command is uses
.action((coffeeType, args) => {
    console.log('YOUR ORDER');
    console.log('------------------');

    console.log('Coffee type is %s', colors.green(coffeeType));
    console.log('args.sugar %s', colors.green(args.sugar));
    console.log('args.decaf %s', colors.green(args.decaf));
    console.log('args.cold %s', colors.green(args.cold));
    console.log('args.servedIn %s', colors.green(args.servedIn));
    console.log('args.stirrer %s', colors.green(args.stirrer));
});

// allow commander to parse `process.argv`
program.parse(process.argv);
