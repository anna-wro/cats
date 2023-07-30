# Plants Safe for Cats :cat: :herb:
Hello! This project is dedicated to all cat parents who love to keep their furry friends safe while enjoying the beauty of indoor and outdoor plants.

## Overview :open_book:
This application provides a comprehensive list of plants, detailing which are safe and which are toxic for cats. It's a one-stop resource for ensuring the well-being of your feline companions in a plant-filled environment.

## Features :sparkles:
- **Comprehensive Plant Database**: The app includes a wide range of plants, from common houseplants to outdoor flora.
- **Safety Status**: Each plant is categorized as either safe or toxic for cats.
- **Detailed Information**: For each plant, we provide additional information such as its common names, scientific name, and a brief description.
- **Search Functionality**: Easily search for plants by their common or scientific names.
- **User-Friendly Interface**: The app is designed to be intuitive and easy to navigate.

## Project Structure :file_folder:

The project adheres to a conventional Next.js application structure, with the `src` directory housing the primary application code. Below is a quick rundown of the crucial directories and files:

- `src/pages`: This directory hosts the main pages of the application. The `[[...slug]].tsx` file takes care of rendering plant details, while `_app.tsx` and `_document.tsx` are standard Next.js files used for customizing the application's HTML and root components. 
- `src/components`: This directory is home to the React components utilized across the application. Key components include `PlantCard`, `PlantDetails`, `PlantFiche`, `PlantGallery`, `PlantSpecs`, `PlantsFacade`, `SafetyScore`, and `Search`.
- `src/lib`: This directory houses the `api.ts` file, which is tasked with fetching data from the external API.
- `src/utils`: This directory contains utility functions, including `flickr.tsx` for fetching photos from Flickr and `usePhoto.tsx` for managing photo-related logic.
- `package.json`: This file lists the project dependencies and scripts.

## Getting Started :rocket: 

To get the application up and running locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies by running `npm install`.
4. Start the development server by running `npm run dev`.

The application should now be accessible at `http://localhost:3000`.
