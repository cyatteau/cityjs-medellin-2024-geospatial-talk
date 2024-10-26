map.on("style.load", () => {
  map.addSource("layer-id", {
    type: "vector",
    tiles: [
      `https://vectortileservices3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/USA_Public_School_Characteristics/VectorTileServer/tile/{z}/{y}/{x}.pbf`,
    ],
  });

  map.addLayer({
    id: "usa_public_school_characteristics_2020211",
    type: "circle",
    source: "layer-id",
    "source-layer": "usa_public_school_characteristics_2020211",
    // paint: {
    //   "circle-radius": 5,
    //   "circle-color": "#ff5722",
    //   "circle-stroke-color": "#000",
    //   "circle-stroke-width": 2,
    // },
  });
});
