# RecipeFinder

A simple and user-friendly recipe browsing application built with React and TheMealDB API. RecipeFinder allows users to discover meals, search for recipes, browse by category, view cooking instructions, and save their favorite recipes.

## Features

- **Recipe Search** – Search for recipes by entering a meal name.
- **Category Filter** – Browse recipes based on food categories.
- **Recipe Details** – View ingredients, measurements, and cooking instructions.
- **Favorites** – Save and remove favorite recipes.
- **LocalStorage** – Keep favorite recipes saved in the browser.
- **Pagination** – Browse recipe results page by page.
- **Responsive Interface** – Navigate the application using a clean interface.
- **Error Handling** – Display loading indicators, error messages, and retry options.

## Technologies Used

- React
- JavaScript
- Vite
- React Router
- CSS
- TheMealDB API
- Browser LocalStorage

## External API

RecipeFinder uses **TheMealDB API** to retrieve recipe information.

- Website: https://www.themealdb.com/
- API Documentation: https://www.themealdb.com/api.php

The public test API endpoint is used, so no API key or `.env` configuration is required.

## Installation and Setup

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Visual Studio Code (recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/izrae27/RecipeFinder.git
```

### 2. Open the Project Folder

```bash
cd RecipeFinder
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

http://localhost:5173/

### Environment Variable Setup

RecipeFinder uses TheMealDB API to retrieve recipe information.

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variable:

   ```env
   VITE_MEALDB_API_KEY=1
   ```

3. Save the file.
4. Restart the development server.

**Note:** TheMealDB's public test API key (`1`) is used for this project. The `.env` file is excluded from Git, while `.env.example` is included as a configuration template.

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates the production build |
| `npm run lint` | Checks the code for ESLint issues |
| `npm run preview` | Previews the production build |

For Windows PowerShell, you can use `npm.cmd` instead of `npm` if script execution is restricted.

## Project Structure

```text
RecipeFinder/
├── public/
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   └── RecipeCard.jsx
│   ├── context/
│   │   └── FavoritesContext.jsx
│   ├── pages/
│   │   ├── Favorites.jsx
│   │   ├── Home.jsx
│   │   └── RecipeDetails.jsx
│   ├── services/
│   │   └── mealdb.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## Individual Contribution

This project was developed individually. I was responsible for planning, designing, developing, integrating the API, implementing the application features, testing, and documenting RecipeFinder.

## Author

**izrae27**

GitHub: https://github.com/izrae27/RecipeFinder

## Acknowledgment

Special thanks to TheMealDB for providing the recipe API used in this project.