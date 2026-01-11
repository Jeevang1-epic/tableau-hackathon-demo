// Initialize the extension
tableau.extensions.initializeAsync().then(() => {
    console.log("Extension Initialized");
    
    // Get the dashboard object
    const dashboard = tableau.extensions.dashboardContent.dashboard;

    // Add event listener to all worksheets
    dashboard.worksheets.forEach(worksheet => {
        worksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, onSelectionChanged);
    });
});

// Function to handle selection updates
async function onSelectionChanged(selectionEvent) {
    const worksheet = selectionEvent.worksheet;
    const marks = await worksheet.getSelectedMarksAsync();
    
    const instructionPanel = document.getElementById("instruction-panel");
    const actionPanel = document.getElementById("action-panel");
    const selectedMarkSpan = document.getElementById("selected-mark");

    // If data is selected (1 or more rows)
    if (marks.data.length > 0) {
        // Get the first value from the first selected row (simplified for speed)
        const firstValue = marks.data[0].data[0].formattedValue;
        
        selectedMarkSpan.innerText = firstValue;
        instructionPanel.style.display = "none";
        actionPanel.style.display = "block";
    } else {
        // Reset if selection is cleared
        instructionPanel.style.display = "block";
        actionPanel.style.display = "none";
    }
}

// Mock function to simulate the "Action"
function sendAction() {
    const btn = document.querySelector("button");
    const msg = document.getElementById("success-msg");
    
    btn.innerText = "Processing...";
    btn.disabled = true;

    // Simulate API delay
    setTimeout(() => {
        btn.innerText = "Execute Action";
        btn.disabled = false;
        msg.style.display = "block";
        
        // Hide success message after 3 seconds
        setTimeout(() => { msg.style.display = "none"; }, 3000);
    }, 1500);
}