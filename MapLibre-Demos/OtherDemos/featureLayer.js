map.on("load", () => {
  map.addSource("earthquakes", {
    type: "geojson",
    data: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson",
  });

  map.addLayer({
    id: "earthquake-layer",
    type: "circle",
    source: "earthquakes",
    // paint: {
    //   "circle-radius": 5,
    //   "circle-color": "#ff5722",
    //   "circle-stroke-color": "#000",
    //   "circle-stroke-width": 2,
    // },
  });
});

// map.on("click", "earthquake-layer", (e) => {
//   console.log(e.features[0]);
// });

//USA Schools Feature Layer: https://data-nces.opendata.arcgis.com/datasets/nces::public-school-characteristics-current.geojson
