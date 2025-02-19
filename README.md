# 📱 My Portfolio

This is my first portfolio website built with React.js. As a software developer, this project highlights my skills in frontend development, as well as various libraries and frameworks used to create an interactive and responsive user experience.

## 💭 Features

- **Responsive Design**: The portfolio adjusts seamlessly across different screen sizes.
- **Smooth Animations**: Using **GSAP** and **Framer Motion** for interactive animations.
- **Contact Form**: Integrated **emailJS** to allow visitors to contact me directly through the website.
- **Routing**: **React Router** is used for navigation between sections.
- **Material UI**: The project utilizes **MUI** components to maintain consistency and modern UI elements.

## 👩🏻‍💻 Tech Stack

- **React.js**: Frontend framework for building the user interface.
- **Material UI**: UI components for a sleek design.
- **GSAP**: For advanced animations.
- **Framer Motion**: For smooth animations and transitions.
- **React Router**: For routing and navigation.
- **EmailJS**: For sending contact form submissions to my email.
- **React Spring**: For creating fluid and interactive animations.
- **Testing**: The app uses **Jest** and **React Testing Library** for unit and integration tests.

## 🔷 Good practises I should be following (refactors to be done)

### **Folder Structure**
Organized with `/components`, `/pages`, `/hooks`, `/services`, `/store`, and `/utils` .

### **Naming Conventions**
Use PascalCase for components (UserCard.tsx), camelCase for hooks (useAuth.ts), and UPPER_CASE for constants.

### **Imports Organization**
React first, third-party libraries second, absolute imports third, relative imports fourth, and styles last.

## State Management

### **Local State**
Uses useState and useReducer for local state.

### **Global State**
Uses Zustand, Redux, or Context API for global state management.

### **React Query**
For efficient API data fetching, caching, and state synchronization.

## Performance Optimization

### **Memoization**
Uses useMemo for expensive calculations, useCallback to avoid inline functions, and React.memo for component re-renders.

## Application Architecture

### **API Calls**
Centralized in `/services/api.ts` and handled with async functions or React Query for caching.

### **Testing**
The app uses Jest and React Testing Library for unit and integration tests, and Cypress for end-to-end testing.

### **ESLint & Prettier**
Ensures code quality and consistent formatting with strict linting rules.

## Deployment & Configuration

### **Environment Variables**
Uses .env to store secrets and API keys (REACT_APP_API_URL).
