function downloadReport() {
    window.location.href = 'viz/report.pdf';
}

function downloadData() {
    window.location.href = 'viz/dataset.xlsx';
}

// Attach these functions to buttons
document.getElementById('downloadReportBtn').addEventListener('click', downloadReport);
document.getElementById('downloadDataBtn').addEventListener('click', downloadData);