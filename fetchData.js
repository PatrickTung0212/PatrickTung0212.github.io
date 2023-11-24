// Fetch the JSON data from file
fetch('careerData.json')
    .then(response => response.json())
    .then(data => {
        // Get the education and work data from the JSON object
        const educationData = data.education;
        const workData = data.work;

        // Output the education data to the education table
        const educationTable = document.getElementById('education-table');
        const educationTableBody = educationTable.getElementsByTagName('tbody')[0];
        educationData.forEach(rowData => {
            const row = document.createElement('tr');
            Object.values(rowData).forEach(cellData => {
                const cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
            });
            educationTableBody.appendChild(row);
        });

        // Output the work data to the work table
        const workTable = document.getElementById('work-table');
        const workTableBody = workTable.getElementsByTagName('tbody')[0];
        workData.forEach(rowData => {
            const row = document.createElement('tr');
            Object.values(rowData).forEach(cellData => {
                const cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
            });
            workTableBody.appendChild(row);
        });
    })
    .catch(error => console.error(error));