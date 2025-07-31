# River Plate Official Website - React Frontend

This is a full-featured, modern, responsive React website for Club Atlético River Plate.
It uses React Router, modular components, CSS Modules for styling, and maintains official River Plate branding throughout (red, white, black).

## Features

- Responsive home page with hero image and welcome message
- Club history section
- News & Updates listing
- Current squad: player photos and bios (placeholder assets included)
- Match schedule overview
- Functional contact form (validates and displays local success message)
- Clean, minimal modern layout
- Fully mobile responsive
- Modular components and CSS Modules
- Client-side navigation with React Router

## Project Structure

See the `/src` folder for:

- `/components`: UI blocks (NavBar, Hero, ClubHistory, News, Squad, Schedule, ContactForm, Footer)
- `/pages`: Route pages for each section
- `/assets`: Placeholder images (replace with actual club photos/logos as needed)
- `clubTheme.js`: Brand color palette (official River Plate colors) for consistency

## Getting Started

1. Install dependencies with:
   ```
   npm install
   ```
2. Start the dev server with:
   ```
   npm start
   ```
   Then go to [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

To customize assets, add actual club hero images to `/src/assets/river-hero.jpg` and player photos at `/src/assets/player-placeholder.png`.

All color, layout, and content blocks can be updated easily by editing their respective files in `/src/components` or `/src/pages`.

## License

Open source project template. See River Plate club website for official information: [www.cariverplate.com.ar](https://www.cariverplate.com.ar/)
