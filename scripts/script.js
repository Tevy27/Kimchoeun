// function downloadReport() {
//     window.location.href = 'viz/report.pdf';
// }

// function downloadData() {
//     window.location.href = 'viz/dataset.xlsx';
// }

// document.getElementById('downloadReportBtn').addEventListener('click', downloadReport);
// document.getElementById('downloadDataBtn').addEventListener('click', downloadData);

//script for dashboard 
// document.getElementById('searchBox').addEventListener('keyup', function(e) {
//     let searchValue = e.target.value.toLowerCase();
//     let allButtons = document.querySelectorAll('.dashboard-button');
//     allButtons.forEach(function(button) {
//         if(button.textContent.toLowerCase().includes(searchValue)) {
//             button.style.display = "";
//         } else {
//             button.style.display = "none";
//         }
//     });
// });

// // Call existing functions for initial setup
// document.addEventListener('DOMContentLoaded', function() {
//     // Existing fetch and createDashboardButtons call...
// })

// This code is for the page with the list of dashboards
document.addEventListener('DOMContentLoaded', function() {
    fetch('dashboards.json')
        .then(response => response.json())
        .then(data => {
            createDashboardList(data);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
});

function createDashboardList(dashboards) {
    const listContainer = document.getElementById('dashboardList');
    if (!listContainer) {
        console.error('Dashboard list container not found.');
        return;
    }
    listContainer.innerHTML = '';
    dashboards.forEach(dashboard => {
        const listItem = document.createElement('li');
        listItem.textContent = dashboard.title;
        listItem.classList.add('dashboard-list-item');
        listItem.onclick = () => {
            window.location.href = `dashboard.html?url=${encodeURIComponent(dashboard.url)}`;
        };
        listContainer.appendChild(listItem);
    });
}


