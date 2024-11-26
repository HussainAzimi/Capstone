import metroBusStops from './data/Metro_St._Louis_MetroBus_Stops_By_Line';
export default {
  header: "location page",
  view: "location",
  category:"",
  zipcode:"",
  places: [],
  stops: metroBusStops || []
};
