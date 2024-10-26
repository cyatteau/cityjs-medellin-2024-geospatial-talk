const accessToken = "YOUR_OWN_ARCGIS_API_KEY"; //Sign up for a free ArcGIS Location Platform Account to get your own at https://location.arcgis.com/sign-up/
const authentication = arcgisRest.ApiKeyManager.fromKey(accessToken);

const basemapEnum = "arcgis/streets";
// items/f4331849dcac4e00ac2b047d9c716907

const map = new maplibregl.Map({
  container: "map",
  style: `https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/${basemapEnum}?token=${accessToken}`,
  zoom: 8,
  center: [-75.5800345, 6.2482172],
});

//DRAWING TOOL
// MapboxDraw.constants.classes.CONTROL_BASE = "maplibregl-ctrl";
// MapboxDraw.constants.classes.CONTROL_PREFIX = "maplibregl-ctrl-";
// MapboxDraw.constants.classes.CONTROL_GROUP = "maplibregl-ctrl-group";
// const draw = new MapboxDraw({ 
//   displayControlsDefault: false,
//   controls: {
//     point: true,
//     line_string: true,
//     polygon: true,
//   },
// });
// map.addControl(draw, "top-left");

// //add query layer
// function addQueryLayer() {
//   map.addSource("query", {
//     type: "geojson",
//     data: {
//       type: "FeatureCollection",
//       features: [],
//     },
//   });
//   map.addLayer({
//     id: "query-fill",
//     type: "fill",
//     source: "query",
//     paint: {
//       "fill-color": "red",
//       "fill-opacity": 0.5,
//     },
//     filter: ["==", ["geometry-type"], "Polygon"],
//   });
// }

// function addMunicipalitiesLayer() {
//   map.addSource("municipalities", {
//     type: "geojson",
//     data: {
//       type: "FeatureCollection",
//       features: [],
//     },
//   });
//   map.addLayer({
//     id: "municipalities-fill",
//     source: "municipalities",
//     type: "fill",
//     paint: {
//       "fill-color": "hsl(200, 80%, 50%)",
//       "fill-outline-color": "white",
//     },
//   });
// }

// map.on("load", () => {
//   addMunicipalitiesLayer();
//   addQueryLayer();
// });

// map.on("draw.create", (e) => {
//   const feature = e.features[0];
//   map.getSource("query").setData(feature);
//   draw.deleteAll();
//   const geometry = Terraformer.geojsonToArcGIS(feature.geometry);
//   let geometryType = "esriGeometry" + feature.geometry.type;
//   if (feature.geometry.type === "LineString") {
//     geometryType = "esriGeometryPolyline";
//   }
//   executeQuery(geometry, geometryType);
// });

// function executeQuery(geometry, geometryType) {
//   arcgisRest
//     .queryFeatures({
//       url: "https://services3.arcgis.com/8cBoM4o6pnuUb1z1/arcgis/rest/services/Municipios_Colombia_WFL1/FeatureServer/0",
//       geometry: geometry,
//       geometryType: geometryType,
//       spatialRel: "esriSpatialRelIntersects",
//       f: "geojson",
//       returnGeometry: true,
//     })
//     .then((response) => {
//       map.getSource("municipalities").setData(response);
//     });
// }

//GEOENRICHMENT
// map.on("click", async (e) => {
//   const res = await arcgisRest.queryDemographicData({
//     studyAreas: [
//       {
//         geometry: {
//           x: e.lngLat.lng,
//           y: e.lngLat.lat,
//         },
//       },
//     ],
//     authentication: authentication,
//     analysisVariables: [
//       "HouseholdTotals.AVGHHSZ_CY", //for more options go to: https://developers.arcgis.com/documentation/mapping-and-location-services/data-enrichment/tools/analysis-variable-finder/
//       "KeyFacts.MRST02_CY",
//     ],
//   });

//   const data = res.results[0].value.FeatureSet[0].features[0].attributes;
//   let message =
//     "<b>Data for a 1 mile search radius</b><br>" +
//     [
//       `Population: ${data.MRST02_CY}`,
//       `Average Household Size: ${data.AVGHHSZ_CY}`,
//       `# of people married: ${data.MRST02_CY}`,
//     ].join("<br>");

//   new maplibregl.Popup().setHTML(message).setLngLat(e.lngLat).addTo(map);
// });
