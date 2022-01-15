#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
const program = new Command();

import * as metodos from '../lib/model.js'
program
    .command('add <description>')
    .description('add a task')
    .action((description) => {
        console.log(`task '${description}' adicionada`);
        metodos.writeTask(metodos.saved_notes_dir, description);
    });

program.command('list')
    .alias('ls')
    .action(() => {
        metodos.listTasks(metodos.saved_notes_dir);
    })

program.parse(process.argv);
