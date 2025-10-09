window.GAZA4ALL_CONFIG = {
  // Start view
  start: { center: [34.0522, -118.2437], zoom: 11 },

  // Where your GeoJSON lives (defaults to this repo)
  repo: { owner: "visualresistance", name: "gaza4all", branch: "main" },

  // Markdown file paths (relative to site root)
  md: {
    about:     "content/about.md",
    data:      "content/data.md",
    resources: "content/resources.md",
    readme:    "content/readme.md"
  },

  // City presets folks can extend
  presets: [
    { name: "Los Angeles, CA", center: [34.0522, -118.2437], zoom: 11 },
    { name: "New York City, NY", center: [40.7128, -74.0060], zoom: 11 },
    { name: "Chicago, IL", center: [41.8781, -87.6298], zoom: 11 },
  ]
  // Sidebar toggle
const toggleBtn = document.getElementById('toggleSidebar');

// initialize from saved preference (optional)
if (localStorage.getItem('sidebarHidden') === 'true') {
  document.body.classList.add('sidebar-hidden');
  toggleBtn.textContent = 'Show sidebar';
}

// click handler
toggleBtn.addEventListener('click', () => {
  const hidden = document.body.classList.toggle('sidebar-hidden');
  toggleBtn.textContent = hidden ? 'Show sidebar' : 'Hide sidebar';
  localStorage.setItem('sidebarHidden', hidden ? 'true' : 'false');

  // Let Leaflet re-measure the map after layout change
  // Do it on next frame to ensure CSS has applied
  requestAnimationFrame(() => map.invalidateSize());
});

};
