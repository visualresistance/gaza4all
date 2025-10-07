# Gaza & West Bank Size Compare (Leaflet)

A tiny Leaflet app that lets you **drag Gaza and the West Bank** over any city to get a sense of relative size. Starts in **Los Angeles** and can **load Schools & Libraries** from OpenStreetMap (Overpass) in the current view.

> ⚠️ The GeoJSON files included here are **placeholders** (rough rectangles) so you can run locally without external requests.
> Replace them with **official polygons** before publishing.

## Quick Start (GitHub Pages-ready)

1. Put these files in a GitHub repo (root level).
2. Enable **GitHub Pages** → Source: `main` branch → root.
3. Visit your Pages URL (e.g., `https://yourname.github.io/yourrepo/`).

Or run locally:

```bash
npx serve
# or
python -m http.server 5173
```

Then open `http://localhost:5173` (port may vary).

## Replace placeholders with official polygons

- Source option: **geoBoundaries** (ADM1 for PSE) – provides **Gaza Strip** and **West Bank** as separate features.
- Steps:
  1. Download the ADM1 GeoJSON for `PSE` (State of Palestine).
  2. Split the file into two separate files (one feature per file): `gaza.geojson`, `west_bank.geojson`.
  3. Save them under `data/` and **overwrite** the placeholders in this repo.
  4. No code changes needed; `index.html` loads `data/gaza.geojson` and `data/west_bank.geojson` directly.

> Keep appropriate **attribution** and **license** from your data source (e.g., geoBoundaries is CC BY 4.0).

## Controls

- **Drag**: Click and drag the Gaza or West Bank polygon.
- **Load Schools & Libraries**: Fetches OSM `amenity=school|library` within the current map view (Overpass API).  
  Tip: Zoom to your neighborhood first for best results.

## Notes

- Overpass has usage limits; for production, consider caching results to static GeoJSON.
- You can add more layers (hospitals, parks, etc.) by copying the Overpass query in `index.html`.
- Styling is minimal; tweak in CSS/JS as you like.

## Attribution

- Base map © OpenStreetMap contributors.
- Code © MIT (see LICENSE).
- Data: replace placeholders with your chosen source (e.g., geoBoundaries). Make sure to respect their license.
