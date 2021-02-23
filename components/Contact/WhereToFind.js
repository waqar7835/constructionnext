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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis molestie nulla, quis ullamcorper leo tristique ut. Fusce suscipit eget mi in semper.
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
