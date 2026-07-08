# Multiple Gym

A static, multi-page gym website built with HTML, CSS, and vanilla JavaScript — featuring a landing page, generic gym information section, and an interactive body index (BMI) calculator to give visitors a quick fitness baseline.


## Overview

This project presents gym/fitness content through clean, modern layouts and includes a small interactive tool — a BMI calculator — that lets users enter their height and weight to get an instant baseline reading, framed as a first step before a coach-led assessment.

## Tech Stack

- **HTML** — page structure and markup
- **CSS** — styling, layout (CSS Grid), and responsive design
- **JavaScript** — form handling and BMI calculation logic

## Project Structure

```
multiple_gym/
├── generic-gym-info/   # Gym information pages/content
├── .gitignore
└── README.md
```

## Features

- Responsive, grid-based layout
- Gym information section with reusable/generic content blocks
- Interactive BMI (body index) calculator:
  - Accepts height (cm) and weight (kg)
  - Validates input ranges
  - Calculates and displays BMI along with a status (Underweight / Normal / Overweight / Obese)

## Getting Started

### Prerequisites

No build tools are required — this is a static site.

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/ritwik-999/multiple_gym.git
   cd multiple_gym
   ```
2. Open the relevant HTML file directly in your browser, or serve the folder with a lightweight local server, e.g.:
   ```bash
   npx serve .
   ```
   or
   ```bash
   python -m http.server
   ```
3. Visit `http://localhost:<port>` in your browser.

## Deployment

The project is deployed on [Vercel](https://vercel.com).

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](https://github.com/ritwik-999/multiple_gym/issues) if you want to contribute.

## License

No license has been specified for this project yet.

## Author

**Ritwik** — [@ritwik-999](https://github.com/ritwik-999)
