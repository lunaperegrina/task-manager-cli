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
        console.log(`task '${description}' adicionada`);
        // writeTask(description);
        metodos.test();
        metodos.writeTask(metodos.saved_notes_dir, description);
    });

program.parse(process.argv);
