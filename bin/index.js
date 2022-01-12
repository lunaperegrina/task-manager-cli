#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
const program = new Command();

// import { Tasks } from '../lib/model.js'
import * as metodos from '../lib/model.js'
// const tasks = require('../lib/model');

program
    .command('add <description>')
    // .alias('a')
    .description('add a task')
    .action((description) => {
        // console.log(`task '${description}' adicionada`);
        // writeTask(description);

        metodos.writeTask(metodos.saved_notes_dir, description);
    });

program.command('list')
    .alias('ls')
    .action(() => {
        metodos.listTasks(metodos.saved_notes_dir);
    })

program.parse(process.argv);