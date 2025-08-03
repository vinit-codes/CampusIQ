# CampusIQ

A modern React + TypeScript web application for campus management, featuring authentication, dashboards, and academic/finance modules.

## Features
- Student login and registration
- Dashboard and portal pages
- Profile management
- Academic and finance management modules
- Responsive UI with custom components (Button, Input, Header)
- Routing via `react-router-dom`
- Modular code structure

## Project Structure
```
frontend/
  src/
    App.tsx            # Main app component with routing
    main.tsx           # Entry point
    Router.tsx         # Route definitions
    index.css          # Global styles
    Components/
      Common/
        Button.tsx     # Reusable button component
        Input.tsx      # Reusable input component
        Header.tsx     # Header/navigation bar
    Pages/
      Login.tsx        # Login page
      ...              # Other pages (Dashboard, Register, etc.)
  public/
    ...                # Static assets
backend/
  ...                  # Backend server (Node.js/Express)
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd CampusIQ/frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App
Start the development server:
```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
```sh
npm run build
```

## Styling
- All global and component styles are in `src/index.css` and `src/App.css`.
- Tailwind CSS utility classes are used for rapid UI development.

## Routing
- All routes are defined in `src/Router.tsx` using `react-router-dom`.
- Main navigation and conditional header rendering are handled in `App.tsx`.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
