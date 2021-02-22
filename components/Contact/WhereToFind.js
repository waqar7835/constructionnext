import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
const MyMapComponent = withScriptjs(
  withGoogleMap((props) => {
    return (
      <>
        {/* <div class="container">
          <div class="section-title-primary text-center">
            <h2>where to find us</h2>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              te consec tetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt
            </p>
          </div>
        </div> */}
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          {props.isMarkerShown && (
            <Marker position={{ lat: -34.397, lng: 150.644 }} />
          )}
        </GoogleMap>
      </>
    );
  })
);
const Map = () => {
  return (
    <>
      <div class="section-space-top">
        <div class="container">
          <div class="section-title-primary text-center">
            <h2>where to find us</h2>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              te consec tetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt
            </p>
          </div>
        </div>
      </div>
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `515px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </>
  );
};

export default Map;
