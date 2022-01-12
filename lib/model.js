import * as fs from 'fs';
import path from 'path';
import * as colors from 'colors'
const __dirname = path.resolve();

export const saved_notes_dir = path.resolve(__dirname, 'notes', 'notes.json');

let numero = 0;

export async function writeTask(saved_notes_dir, description) {

    fs.readFile(saved_notes_dir, function cb(err, data) {
        if (err) throw err;
        console.log(JSON.parse(data));

        data = JSON.stringify(JSON.parse(data));

        let obj = []

        obj = JSON.parse(data)
        console.log(obj);
        obj.push({ "task": "testando no codigo", "prioridade": 3 }); //add some data
        console.log(obj);
    })

    // fs.writeFile(saved_notes_dir, JSON.stringify(description), function cb(err, data) {
    //     if (err) throw err;
    //     console.log('complete');
    // });
}

export function test() {
    console.log('teste');
}

export function listTasks() {
    fs.readFile(saved_notes_dir, function cb(err, data) {
        if (err) throw err;

        let obj = JSON.parse(data);

        let tamanho_maximo = 0;
        let tracos = ''
        let tracosPrioridade = '───'
        let espacosTituloTasks = ' '
        let titulo_tasks = 'Tarefas'

        obj.forEach(element => {
            if (element.task.length > tamanho_maximo) {
                tamanho_maximo = element.task.length;
            }
        })

        for (let i = 0; i < tamanho_maximo + 2; i++) {
            tracos = tracos + '─';
        }

        for (let i = 0; i < tamanho_maximo - titulo_tasks.length; i++) {
            espacosTituloTasks = espacosTituloTasks + ' '

        }

        console.log('┌' + tracos + '┬' + tracosPrioridade + '┐');
        console.log('│ ' + titulo_tasks.yellow + espacosTituloTasks + '│ ' + 'P'.cyan + ' │');

        obj.forEach(element => {
            let espacosFaltamNum = tamanho_maximo - element.task.length
            let espacosFaltam = ' '

            for (let i = 0; i < espacosFaltamNum; i++) {
                espacosFaltam = espacosFaltam + ' '
            }

            console.log('├' + tracos + '┼' + tracosPrioridade + '┤');
            console.log('│ ' + element.task + espacosFaltam + '│ ' + element.prioridade + ' │');

        });
        console.log('└' + tracos + '┴' + tracosPrioridade + '┘');

    })
}