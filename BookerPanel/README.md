# React Admin Panel Dashboard

A modern and responsive admin dashboard built with React. This project focuses on creating a clean dashboard experience with reusable components, data visualization, tables, forms, routing, and theme management.

## Features

- Responsive admin dashboard layout
- React Router navigation
- Sidebar navigation menu
- Top navigation bar
- Reusable dashboard widgets
- Dashboard statistics cards
- Data tables and reusable table components
- Charts and data visualization
- User details page
- User creation form
- Dark mode support
- Redux Toolkit state management
- Responsive design across different screen sizes

## Tech Stack

### Frontend

- React
- React Router DOM
- Redux Toolkit
- Material UI
- Recharts
- CSS3

## Project Structure

```
src/
├── app/
│   └── Redux store configuration
│
├── features/
│   └── Dark mode state management
│     
│
├── components/
│   ├── chart/
│   ├── datatable/
│   ├── featured/
│   ├── navbar/
│   ├── sidebar/
│   ├── table/
│   └── widget/
│
├── pages/
│   ├── home/
│   ├── list/
│   ├── new/
│   └── single/
│
└── style/
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd AdminPanel
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The application will run locally using the Vite development server.

## Pages

### Dashboard

Includes:

- Overview statistics
- Charts
- Dashboard widgets
- Data visualization
- Recent activity sections

### Users

Includes:

- Users table
- User details page
- User creation form

## Dark Mode

The application includes a dark mode system managed with Redux Toolkit.

The theme state is handled globally, allowing components to update consistently across the application.

## Responsive Design

The dashboard is optimized for:

- Desktop screens
- Tablets
- Mobile devices

Layouts and components adapt automatically to different screen sizes.

## Development Goals

This project demonstrates:

- React component architecture
- Redux Toolkit state management
- Reusable UI components
- Dashboard layout development
- Data visualization
- Responsive frontend development
- Managing global application state

## Future Improvements

- Add authentication and authorization
- Add role-based permissions
- Add advanced filtering and searching
- Add more analytics features
- Expand user management features

## License

This project is for learning and portfolio purposes.
