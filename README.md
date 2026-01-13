Smart Action Center: A Tableau Dashboard Extension
🚀 Project Overview
The Smart Action Center is an event-driven Tableau Dashboard Extension designed to bridge the gap between data visualization and business execution. It transforms static dashboards into interactive command centers, allowing users to trigger real-time workflows—such as sending priority alerts—directly from their analytical environment.

🛠️ Hands-on Technical Build
This project was developed end-to-end as a solo entry for the 2025 Tableau Hackathon.

Key Features:
Bidirectional Integration: Uses the Tableau Extensions API to "listen" for marks-selection events on the dashboard.

Dynamic Workflow Engine: Instantly identifies selected data points (e.g., specific cities) and populates targeted action menus.

Production Deployment: Securely hosted on GitHub Pages with custom redirection logic for seamless Tableau Cloud integration.

The "Strategic Pivot" in Engineering:
During rapid prototyping, I moved from external stylesheets to high-specificity internal CSS. This choice was critical for:

UI Resilience: Ensuring my "glassmorphism" design remained immune to conflicting default styles within the Tableau sandbox.

Agile Testing: Enabling instant dynamic styling updates and quick fixes without deployment overhead.

📂 Repository Structure
manifest.trex: The critical configuration file for Tableau Cloud.

tableau-hackathon/index.html: The core logic and high-specificity styling.

index.html: Root redirection file to handle GitHub Pages traffic.

🎥 Demo
View the full demonstration on YouTube : https://youtu.be/BdF29mRkztg?si=hKX7wuSIemAeKSPX
