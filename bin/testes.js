import Table from "cli-table/lib/index.js";

// instantiate
var table = new Table({
    head: ['TH 1 label', 'TH 2 label'],
    colWidths: [20, 20]
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
    ['First value', 'Second value'], ['First value1', 'Second value2']
);

console.log(table.toString());

var table2 = new Table();

table2.push({ 'Some key': 'Some value' }, { 'Another key': 'Another value' });

console.log(table2.toString());
