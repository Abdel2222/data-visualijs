const table = document.querySelector('#table1');
const rows = table.querySelectorAll('tbody tr');

const data = [];
rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    const rowData = [];
    cells.forEach(cell => {
        rowData.push(cell.textContent);
    });
    data.push(rowData);
});

console.log(data);