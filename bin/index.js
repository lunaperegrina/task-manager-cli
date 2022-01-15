#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
const program = new Command();

import * as colors from 'colors';

import * as metodos from '../lib/model.js'

program
    .command(`add <description>`)
    .description('add a task')
    .option('-p, --priority <level>', 'add the priority')
    .action((description, opts) => {
        console.log("\n Task " + description.green + ` com prioridade ${opts.priority}` + " adicionada!")
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
