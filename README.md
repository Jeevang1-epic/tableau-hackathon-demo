# **Smart Action Center: Real-Time Actionable Analytics Extension**

[![Tableau Extension](https://img.shields.io/badge/Tableau-Extensions%20API-blue.svg)](https://jeevang1-epic.github.io/tableau-hackathon-demo/tableau-hackathon/index.html)
[![Deployment](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-green.svg)](https://jeevang1-epic.github.io/tableau-hackathon-demo/tableau-hackathon/index.html)

## ** The Vision**
Most business dashboards are "read-only," creating a friction-filled gap between seeing an insight and taking action. The **Smart Action Center** turns Tableau from a static reporting tool into a dynamic operational command center.

## ** The Build Journey (Step-by-Step)**

### **1. Integration & Environment**
* **Tableau Cloud Sandbox:** I initialized a secure developer sandbox on **Tableau Cloud** to host the experimental dashboard environment.
* **Worksheet Configuration:** I designed a primary visualization (**Sheet 1**) focused on city-level profitability to serve as the data source for the extension.

### **2. The Extension Architecture**
* **Manifest Logic:** I authored a custom `manifest.trex` file to register the extension with Tableau, defining secure source locations and API permissions.
* **Tableau Extensions API:** I implemented a bidirectional event-listener that "hooks" into the dashboard's marks-selection events.

### **3. Strategic Engineering Pivot: Efficiency through Specificity**
During development, I intentionally pivoted from external stylesheets to a **high-specificity internal CSS** approach.
* **Resilience:** This guaranteed that my "glassmorphism" UI remained immune to conflicting default styles within the Tableau sandbox.
* **Agility:** This "email-template" style logic allowed for instant dynamic styling updates and real-time UI feedback during the rapid hackathon sprint.

## ** How to Experience the Extension**

### **Option A: Full Tableau Workflow (Recommended)**
1. Open your Tableau Cloud dashboard.
2. Select any data point on **Sheet 1** (e.g., a city bar).
3. Watch the **Smart Action Center** instantly identify the "Target Entity" and offer a menu of automated workflows.

### **Option B: Independent Browser Preview**
You can view the standalone UI and design by visiting the live deployment link:
 **[Live Extension UI](https://jeevang1-epic.github.io/tableau-hackathon-demo/tableau-hackathon/index.html)**

## ** Repository Structure**
* `manifest.trex`: Core XML configuration for Tableau integration.
* `tableau-hackathon/index.html`: The core engine, featuring the high-specificity UI and JavaScript logic.
* `index.html`: Root-level redirection file to ensure seamless GitHub Pages routing.

## ** Video Demonstration**
[![Watch the Demo](https://img.youtube.com/vi/BdF29mRkztg/0.jpg)](https://youtu.be/BdF29mRkztg)
