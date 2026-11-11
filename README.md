# RecipeFinder

RecipeFinder is a simple and user-friendly recipe browsing application built with React and TheMealDB API. It allows users to discover meals, search for recipes, browse by food category, view cooking instructions, and save their favorite recipes.

## Features

- **Recipe Search** – Search for recipes by entering a meal name.
- **Category Filter** – Browse recipes based on food categories.
- **Recipe Details** – View ingredients, measurements, and cooking instructions.
- **Favorites** – Save and remove favorite recipes.
- **LocalStorage** – Keep favorite recipes saved even after refreshing the browser.
- **Pagination** – Browse recipe results page by page.
- **Responsive Interface** – Navigate the application through a clean and user-friendly interface.
- **Loading States** – Display loading indicators while retrieving recipe data.
- **Error Handling** – Display error messages and retry options when API requests fail.
- **No Results Message** – Inform users when no matching recipes are found.

## Technologies Used

- React
- JavaScript
- Vite
- React Router
- CSS
- TheMealDB API
- Browser LocalStorage

## External API

RecipeFinder uses **TheMealDB API** to retrieve recipe information, including meal names, images, ingredients, measurements, categories, and cooking instructions.

- Website: https://www.themealdb.com/
- API Documentation: https://www.themealdb.com/api.php

The application uses TheMealDB's public test API key (`1`).

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

### 4. Configure Environment Variables

Create a `.env` file in the root directory of the project.

Add the following variable:

```env
VITE_MEALDB_API_KEY=1
```

Save the file.

**Note:** TheMealDB's public test API key (`1`) is used for this project. It is a public key, not a private credential. Vite exposes variables prefixed with `VITE_` to the client-side application. The `.env` file is excluded from Git, while `.env.example` is included as a configuration template.

### 5. Run the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

http://localhost:5173/

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates the production build |
| `npm run lint` | Checks the code for ESLint issues |
| `npm run preview` | Previews the production build |

For Windows PowerShell, use `npm.cmd` instead of `npm` if script execution is restricted.

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
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Application Routes

| Route | Description |
|---|---|
| `/` | Homepage with recipe search and category filtering |
| `/recipe/:id` | Displays individual recipe details |
| `/favorites` | Displays saved favorite recipes |

## Individual Contribution

This project was developed individually by **izrae27**.

I was responsible for planning, designing, developing, API integration, implementing application features, testing, version control, and project documentation.

## Author

**izrae27**

GitHub Repository: https://github.com/izrae27/RecipeFinder

## Acknowledgment

Special thanks to **TheMealDB** for providing the public recipe API used in this project.