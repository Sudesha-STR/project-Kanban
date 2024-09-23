# Task Management Board

A **React-based task management system** that allows users to manage and organize tasks visually using cards and lists. Tasks (tickets) are dynamically grouped and filtered by status, user, and priority, with options to sort tasks by priority or title. The project uses SVG icons for better task identification and includes an intuitive interface to enhance task tracking.

## Features

- **Group by Status, User, or Priority**: View tasks based on their status (e.g., 'In progress', 'Backlog'), assigned user, or priority.
- **Sort by Priority or Title**: Easily sort tasks by urgency (priority) or alphabetically by title.
- **SVG Icons**: Clear visual representations of task statuses and priorities through custom icons.
- **Real-Time Updates**: Tickets are fetched from an external API and displayed in real time.
- **Card Count for Each List**: The number of tasks in each category (status, user, priority) is dynamically updated and displayed.
- **Local Storage Support**: Preserves group settings across browser sessions.

## Technologies Used

- **React**: For building the UI and managing state.
- **Axios**: To fetch task details from an API.
- **CSS Modules**: For scoped styling.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/task-management-board.git
   ```

2. Navigate into the project directory:

   ```bash
   cd task-management-board
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## Usage

1. The app displays tasks (tickets) grouped by status, user, or priority.
2. Use the **navbar** to toggle between groupings and sorting options.
3. Cards are displayed under each category, with the count of tasks shown next to the list title.
4. Click on the **add button** to extend the functionality for adding new tasks (future enhancement).
5. Task icons change dynamically based on their status or priority.

## Code Structure

- **App.js**: The main file where the grouping and sorting logic is handled.
- **Components/List**: Contains the `List` component that renders each category list with tasks.
- **Components/Card**: The card component that displays individual task details.
- **Assets/Images**: Holds SVG files for task icons (status and priority).

## Future Enhancements

- Add functionality to create, edit, and delete tasks.
- Implement drag-and-drop functionality for rearranging tasks between lists.
- Allow users to assign tasks directly within the UI.
- Add real-time sync for collaborative task management.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

