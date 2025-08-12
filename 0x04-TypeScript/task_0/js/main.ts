interface Student{
    firstName : string
    lastName: string
    age : number
    location : string
}
let student1 : Student = {
    firstName : 'ahmed',
    lastName : 'anas',
    age : 21,
    location : 'egypt' 
}
let student2 : Student = {
    firstName : 'rawan',
    lastName : 'Mahmoud',
    age : 19,
    location : 'egypt' 
}


let studentList : Student[] = [student1 , student2]


document.addEventListener("DOMContentLoaded",() => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    const thead = document.createElement('thead');
    const trow = document.createElement('tr');
    const headers = ['firstName' , 'location']

    headers.forEach(element => {
        const th = document.createElement('th');
        th.textContent = element;
        trow.appendChild(th);
    });

    thead.appendChild(trow);
    table.appendChild(thead)

    studentList.forEach(element => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        cell1.textContent = element.firstName;
        row.appendChild(cell1)

        const cell2 = document.createElement('td')
        cell2.textContent = element.location
        row.appendChild(cell2)
        tbody.appendChild(row)
    });
    table.appendChild(tbody)
    document.body.appendChild(table)

    const style = document.createElement('style');
    style.textContent = `
    table {
      border-collapse: collapse;
      width: 50%;
      margin: 20px auto;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
  `;
  document.head.appendChild(style);
})


