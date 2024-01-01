function downloadReport() {
    window.location.href = 'viz/report.pdf';
}

function downloadData() {
    window.location.href = 'viz/dataset.xlsx';
}

document.getElementById('downloadReportBtn').addEventListener('click', downloadReport);
document.getElementById('downloadDataBtn').addEventListener('click', downloadData);

//script for dashboard 
document.addEventListener('DOMContentLoaded', function() {
    fetch('/dashboards.json')
        .then(response => response.json())
        .then(data => {
            createDashboardButtons(data);
        })
        .catch(error => console.error(error));
});

function createDashboardButtons(dashboards) {
    const buttonsContainer = document.getElementById('dashboardButtons');
    dashboards.forEach(dashboard => {
        const button = document.createElement('button');
        button.textContent = dashboard.title;
        button.classList.add('dashboard-button'); // Add CSS class for styling
        button.onclick = () => loadDashboard(dashboard.url);
        buttonsContainer.appendChild(button);
    });
}

function loadDashboard(url) {
    const iframe = document.getElementById('powerbiFrame');
    iframe.src = url;
}

