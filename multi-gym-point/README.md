# Multi Gym Point

A responsive editorial-style website for a luxury gym and fitness studio.

## Features

- Single-page layout with smooth section navigation
- Responsive mobile menu
- Program and membership sections
- BMI calculator
- Gallery filtering with a simple lightbox
- Animated stats counters
- Floating WhatsApp contact button
- Premium fashion-inspired visual direction
- GSAP entrance and scroll transitions

## Project Structure

```text
multi-gym-point/
  index.html
  css/
    style.css
    responsive.css
    animations.css
  js/
    main.js
    bmi.js
    gallery.js
    counter.js
    whatsapp.js
  assets/
    images/
    icons/
    logo/
  README.md
```

## Usage

Open `index.html` in a browser. No build step is required.

The current design uses CDN-hosted GSAP scripts and remote photography URLs. For fully offline use, download those assets locally and update the paths.

## Customization

- Update phone number and default message in `js/whatsapp.js`.
- Update membership prices and contact details in `index.html`.
- Add real gym photos under `assets/images/` and wire them into the gallery.
