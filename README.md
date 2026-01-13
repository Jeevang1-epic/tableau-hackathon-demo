Smart Action Center: A Tableau Dashboard Extension
🚀 Project Overview
The Smart Action Center is an event-driven Tableau Dashboard Extension that transforms static dashboards into interactive command centers. It allows users to trigger real-time workflows—such as sending priority alerts or flagging items—directly from their analytical environment.

🛠️ Technical Build & Strategic Pivots
Developed as a solo entry for the 2025 Tableau Hackathon, this project focuses on "Actionable Analytics."

Key Decisions:
High-Specificity Internal CSS: I intentionally pivoted from external stylesheets to internal CSS to ensure the "glassmorphism" UI remained robust against Tableau Cloud's sandbox styles while allowing for rapid, dynamic styling updates.

Tableau Extensions API: Leveraged for real-time bidirectional communication between the dashboard and the custom action panel.

Secure Hosting: Deployed on GitHub Pages to meet strict HTTPS requirements for Tableau Cloud integration.

📂 Repository Structure
manifest.trex: Core configuration for Tableau integration.

tableau-hackathon/index.html: Main logic and high-specificity UI.

index.html: Root redirection for deployment.

🎥 Video Demo: https://youtu.be/BdF29mRkztg?si=hKX7wuSIemAeKSPX
