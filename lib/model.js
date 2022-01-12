import * as fs from 'fs';
import path from 'path';
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
        console.log(JSON.parse(data));
    })
}