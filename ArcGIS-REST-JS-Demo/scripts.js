const accessToken = "YOUR_OWN_ARCGIS_API_KEY"; //Sign up for a free ArcGIS Location Platform Account to get your own at https://location.arcgis.com/sign-up/
const authentication = arcgisRest.ApiKeyManager.fromKey(accessToken);

arcgisRest
  .geocode({
    singleLine: "",
    authentication,
  })
  .then((res) => {
    console.log(res);
  });

//ibis Medellin, Calle 20 44, Villa Carlota, Medellín, Antioquia, COL
