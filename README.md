# CarryonWORK | The 2026 Execution Protocol

CarryonWORK is a high-fidelity, two-sided task marketplace designed with a "2026 Premium" aesthetic. It prioritizes execution over resumes, utilizing an AI-powered orchestration layer to manage mission-critical tasks with zero settlement risk through simulated escrow staking.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **AI / GenAI**: [Google Genkit](https://firebase.google.com/docs/genkit)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🛠️ Key Features

### 1. Role-Based Security (RBAC)
- **Node-Specific Access**: Advanced security gateway ensures Workers, Hirers, and Admins can only access their authorized protocol nodes.
- **Identity Mesh**: Real-time session verification prevents unauthorized role traversal.

### 2. "The Vault" (Escrow Simulation)
- A simulated task lifecycle (Draft → Funded → Assigned → In Progress → Submitted → Approved → Completed) demonstrating financial solvency.

### 3. AI-Powered Tooling
- **Task Expansion**: Titles expanded into full scopes using `aiTaskDescriptionTool`.
- **Proposal Drafting**: Automated draft generation for workers.
- **Dispute Summarization**: AI-driven arbitration support for Admins.

### 4. 2026 Premium UI/UX
- **Dynamic Titles**: Browser tabs update dynamically to reflect the current execution node (e.g., "Worker Protocol | CarryonWORK").
- **Infinity Pencil Branding**: Consistent branding across browser favicons (logo-icon.png) and UI headers.
- **Mesh Gradients**: Fluid, animated backgrounds for a bespoke "Custom OS" feel.

## 🏁 Git Execution Protocol

Follow these steps to synchronize your local protocol with GitHub:

### 1. Initialize & First Push
If you haven't connected to GitHub yet:
```bash
# Initialize the local repository
git init

# Stage all high-fidelity artifacts
git add .

# Commit the initial execution state
git commit -m "feat: Initialize 2026 Execution Protocol with RBAC and Dynamic Branding"

# Link to your GitHub repository (Replace with your actual URL)
git remote add origin https://github.com/YOUR_USERNAME/CarryonWORK.git

# Push to the main branch
git push -u origin main
```

### 2. Working with Branches (Feature Sync)
To develop a new feature without disrupting the main execution chain:
```bash
# Create and switch to a new branch
git checkout -b feature/ai-refinement

# Make your changes, then stage and commit
git add .
git commit -m "feat: Enhanced AI prompt logic"

# Push the feature branch to GitHub
git push origin feature/ai-refinement
```

### 3. Merging (Protocol Integration)
To merge a feature branch back into the main line:
```bash
# Switch back to the main branch
git checkout main

# Pull the latest changes from GitHub (Good practice)
git pull origin main

# Merge the feature branch
git merge feature/ai-refinement

# Resolve any conflicts if they appear, then push the merged state
git push origin main
```

---
*Built with passion for high-execution deliverables in the Carryon Network.*
