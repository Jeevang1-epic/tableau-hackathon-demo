tableau.extensions.initializeAsync().then(() => {
    const dashboard = tableau.extensions.dashboardContent.dashboard;
    dashboard.worksheets.forEach(worksheet => {
        worksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, onSelectionChanged);
    });
});

async function onSelectionChanged(selectionEvent) {
    const worksheet = selectionEvent.worksheet;
    const marks = await worksheet.getSelectedMarksAsync();
    
    const instructionPanel = document.getElementById("instruction-panel");
    const actionPanel = document.getElementById("action-panel");
    const selectedMarkSpan = document.getElementById("selected-mark");

    if (marks.data.length > 0 && marks.data[0].data.length > 0) {
        // Fix: Ensure we get the value regardless of data structure
        const firstRow = marks.data[0].data[0];
        const val = firstRow[0].formattedValue || "Multiple Items";
        
        selectedMarkSpan.innerText = val;
        instructionPanel.style.display = "none";
        actionPanel.style.display = "block";
    } else {
        instructionPanel.style.display = "block";
        actionPanel.style.display = "none";
    }
}

function sendAction() {
    const btn = document.getElementById("main-btn");
    const msg = document.getElementById("success-msg");
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = 'Execute Insight Action';
        btn.disabled = false;
        msg.style.display = "block";
        setTimeout(() => { msg.style.display = "none"; }, 4000);
    }, 2000);
}
