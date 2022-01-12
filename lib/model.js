import * as fs from 'fs';
import path from 'path';
const __dirname = path.resolve();

export const saved_notes_dir = path.resolve(__dirname, 'notes', 'notes.json');

let numero = 0;

export async function writeTask(saved_notes_dir, addTask) {
    try {
        console.log('passou')
        console.log(saved_notes_dir);

        let novaTaskObj = {
            "id": numero,
            "task": addTask
        }

        numero++;
        console.log(numero);

        await fs.writeFileSync(saved_notes_dir, JSON.stringify(novaTaskObj, null, 2) + ',', { flag: 'a' });
        const tasks = fs.readFileSync(saved_notes_dir);
        console.log(tasks.toString());
    } catch (e) {
        console.log(e)
    }
};

export function test() {
    console.log('teste');
}
