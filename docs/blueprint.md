# **App Name**: CarryonWORK

## Core Features:

- Role-Based Authentication & Routing: User login and signup with a role selection toggle (Worker, Hirer) that directs users to their specific dashboard based on their chosen role after authentication.
- Interactive Landing Page: A responsive landing page featuring key sections such as Hero, Problem, How It Works, and Trust & Escrow explanation, with interactive CTA buttons for joining or posting tasks.
- Hirer Task Management: A hirer dashboard allowing users to create new tasks with detailed forms (Title, Description, Budget, Deadline, Risk Level) and manage existing tasks by simulating funding escrow, reviewing submissions, approving, or raising disputes.
- Worker Task Management: A worker dashboard where users can view and interact with assigned or invited tasks, accept/reject invitations, upload mock files, and submit work for tasks in progress.
- Admin Platform Oversight: An admin dashboard providing mock overview statistics, pages to manage worker approvals/rejections, and a system to simulate dispute resolution (refund or approve worker actions).
- AI-Powered Task Description Tool: An AI-tool that assists hirers in elaborating task descriptions, suggesting detailed requirements, scope, and necessary skills based on a brief initial input (simulated for MVP).
- Simulated Task Lifecycle: An interactive demonstration of the complete task lifecycle using a local state machine (Draft → Funded → Assigned → In Progress → Submitted → Approved → Completed; with an optional Dispute path), showing state transitions dynamically within the UI using mock data.

## Style Guidelines:

- Primary interactive and accent color: A vibrant, warm orange (#FF7F0F) to denote calls to action and important interactive elements, fostering an inviting and dynamic feel.
- Background color: A subtle, clean off-white (#FEFBF7) with a slight warm tint to maintain a minimalist aesthetic and enhance content readability.
- Accent and neutral color: A dark slate (#333E4D) for prominent text, headers, and structural UI elements to provide strong contrast and a professional, modern look, complementing the primary orange.
- Styling includes soft, diffused shadows around card-based elements to add depth and create a clean, modern SaaS feel without being overly heavy.
- All text uses 'Inter', a grotesque-style sans-serif font, chosen for its modern, objective, and neutral aesthetic, suitable for both headlines and body text in a professional SaaS environment.
- Employ a minimalist, line-based icon set to align with the clean SaaS dashboard styling, ensuring clarity and unobtrusive visual support for navigation and actions.
- The layout primarily uses a card-based structure for dashboards and content sections, enhancing readability and visual organization while maintaining a professional, modular appearance consistent with modern SaaS designs.
- The prototype design ensures responsiveness, adapting seamlessly across various screen sizes to provide an optimal user experience on both desktop and mobile devices.
- Subtle and smooth transitions for UI state changes (e.g., task status updates, button clicks) to enhance interactivity and provide a polished, high-fidelity user experience.