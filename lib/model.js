import * as fs from 'fs';
import path from 'path';
import * as colors from 'colors'
import { type } from 'os';
const __dirname = path.resolve();

export const saved_notes_dir = path.resolve(__dirname, 'notes', 'notes.json');

let numero = 0;

export async function writeTask(saved_notes_dir, description, priority) {

    if (priority == undefined || priority == true) priority = 1;

    fs.readFile(saved_notes_dir, function cb(err, data) {
        if (err) throw err;

        let obj = [];

        if (JSON.stringify(data) == '{"type":"Buffer","data":[]}') {
            obj = [{ "task": description, "prioridade": priority }];

        } else {
            obj = JSON.parse(data)
            obj.push({ "task": description, "prioridade": priority });
        }
        // console.log(obj);

        fs.writeFile(saved_notes_dir, JSON.stringify(obj), function cb(err) {
            if (err) throw err;
            // console.log('complete');
            listTasks();
        });

    })
}

export function test() {
    console.log('teste');
}

export function listTasks() {
    console.log(' ');
    fs.readFile(saved_notes_dir, function cb(err, data) {
            if (err) throw err;
            // console.log(JSON.stringify(data));

            if (JSON.stringify(data) === '{"type":"Buffer","data":[]}' || JSON.stringify(data) === '{"type":"Buffer","data":[91,93]}') {
                console.log('Nada na lista!');

            } else {

                let obj = JSON.parse(data);

                let tamanho_maximo = 0;
                let tracos = ''
                let tracosPrioridade = '──────────'
                let espacosTituloTasks = ' '
                let titulo_tasks = 'description'

                obj.forEach(element => {
                    if (element.task.length > tamanho_maximo) {
                        tamanho_maximo = element.task.length;
                    }
                })

                if (tamanho_maximo < titulo_tasks.length) {
                    tamanho_maximo = titulo_tasks.length;
                }

                for (let i = 0; i < tamanho_maximo + 2; i++) {
                    tracos = tracos + '─';
                }

                for (let i = 0; i < tamanho_maximo - titulo_tasks.length; i++) {
                    espacosTituloTasks = espacosTituloTasks + ' '
                }

                console.log('┌' + tracos + '┬' + tracosPrioridade + '┐');
                console.log('│ ' + titulo_tasks.yellow + espacosTituloTasks + '│ ' + 'priority'.cyan + ' │');

                obj.forEach(element => {
                    let espacosFaltamNum = tamanho_maximo - element.task.length
                    let espacosFaltam = ' '

                    for (let i = 0; i < espacosFaltamNum; i++) {
                        espacosFaltam = espacosFaltam + ' '
                    }

                    if (element.prioridade == 'high') {
                        element.prioridade = '   high   '
                    }
                    if (element.prioridade == 'low') {
                        element.prioridade = '   low    '
                    }
                    if (element.prioridade == 'normal') {
                        element.prioridade = '  normal  '
                    }

                    console.log('├' + tracos + '┼' + tracosPrioridade + '┤');
                    console.log('│ ' + element.task + espacosFaltam + '│' + element.prioridade + '│');
                });
                console.log('└' + tracos + '┴' + tracosPrioridade + '┘');
            }
            console.log(' ');
        }

    )
}

export function deleteAllTasks() {
    fs.writeFile(saved_notes_dir, JSON.stringify([]), function cb(err) {
        if (err) throw err;
        console.log('\n Tabela deletada! \n');
    })
}
