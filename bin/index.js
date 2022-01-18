#!/usr/bin/env node

import { Command, Option } from 'commander/esm.mjs';
const program = new Command();

import * as colors from 'colors';

import * as metodos from '../lib/model.js'


program.version('0.0.1', '-v, --version', 'output the current version');

program
    .command(`add <description>`)
    .description('add a task')
    // .option('-p, --priority <level>', 'add the priority')
    .addOption(new Option('-p, --priority <level>', 'add the priority').choices(['low', 'normal', 'high']))
    .action((description, opts) => {
        console.log("\n Task " + description + ` com prioridade ${opts.priority}` + " adicionada!")
        metodos.writeTask(metodos.saved_notes_dir, description, opts.priority);
    });

program.command('list')
    .alias('ls')
    .action(() => {
        metodos.listTasks(metodos.saved_notes_dir);
    })

program.command('delete')
    .alias('del')
    .action(() => {
        metodos.deleteAllTasks();
    })

program.parse(process.argv);