# TaskFlow

TaskFlow is a modern, responsive web application for managing tasks and projects. Built with React, Vite, Tailwind CSS, and React Router, it provides an intuitive interface for creating, editing, and tracking tasks, organizing them into projects, and monitoring progress. Data is stored locally using `localStorage`, ensuring persistence across sessions without a backend.

## Features

- **Task Management**:
  - Create, edit, and delete tasks with title, description, due date, priority (Low, Medium, High), and project assignment.
  - Mark tasks as complete or incomplete.
  - View tasks by due date (e.g., "Today" on Dashboard), completion status, or project.
- **Project Management**:
  - Create and delete projects, with progress tracking based on task completion.
  - View project-specific tasks and completion statistics via a progress bar.
- **UI/UX**:
  - Responsive sidebar navigation with FontAwesome icons.
  - Floating action button to quickly create new tasks.
  - Modals for creating projects, confirming deletions, and displaying messages.
  - Dark mode toggle (currently UI-only, requires additional implementation for full functionality).
- **Data Persistence**:
  - Tasks and projects are saved in `localStorage` using a custom `useLocalStorage` hook.
  - Supports clearing tasks, projects, or all data via the Settings page.
- **Development Tools**:
  - ESLint and Prettier for code linting and formatting.
  - Vite for fast development and optimized builds.
  - Tailwind CSS for utility-first styling.

## Technologies

- **Frontend**: React 19, React Router 7.5.1
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: FontAwesome
- **Code Quality**: ESLint, Prettier
- **Data Storage**: `localStorage`
- **License**: MIT

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/zaier84/TaskFlow.git
   cd taskflow
   ```

2. **Install dependencies**:
   Ensure you have Node.js (version 20 or higher) installed. Then run:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` (or another port if configured differently).

4. **Build for production**:

   ```bash
   npm run build
   ```

   The output will be in the `dist` folder.

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## Usage

1. **Dashboard**:

   - View tasks due today.
   - Navigate to other sections via the sidebar.

2. **Tasks**:

   - Create a new task using the floating `+` button (bottom-right).
   - Edit or delete tasks from the task list.
   - View all tasks, completed tasks, or project-specific tasks.

3. **Projects**:

   - Create a new project when adding a task or via the task creation form.
   - View project progress and tasks by clicking a project card.
   - Delete projects (only if they have no tasks).

4. **Settings**:
   - Toggle dark mode or notifications (note: notifications are UI-only and require additional implementation).
   - Clear tasks, projects, or all data with confirmation modals.

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── AllTasks.jsx
│   │   ├── Button.jsx
│   │   ├── CompletedTasks.jsx
│   │   ├── ConfirmationMessage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── EditTask.jsx
│   │   ├── Header.jsx
│   │   ├── Input.jsx
│   │   ├── Layout.jsx
│   │   ├── MessagePopup.jsx
│   │   ├── NavElement.jsx
│   │   ├── NewButton.jsx
│   │   ├── NewProjectModal.jsx
│   │   ├── NewTask.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectList.jsx
│   │   ├── ProjectTasks.jsx
│   │   ├── Select.jsx
│   │   ├── Settings.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Task.jsx
│   │   ├── TaskList.jsx
│   │   └── ToggleSwitch.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Development Notes

- **Dark Mode**: The `dark` class is applied in `Layout.jsx` and `index.css`, but full dark mode requires toggling the `dark` class on the `html` element based on the `Settings` toggle state.
- **Notifications**: The notification toggle in `Settings` is UI-only. Implement browser notifications (e.g., using the Notification API) for full functionality.
- **Error Handling**: Add edge cases for `localStorage` quota limits or invalid task/project IDs.
- **Accessibility**: Ensure all interactive elements (e.g., buttons, inputs) have proper ARIA attributes and keyboard support.
- **Testing**: Consider adding unit tests with Jest or React Testing Library for critical components like `TaskList` and `useLocalStorage`.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

