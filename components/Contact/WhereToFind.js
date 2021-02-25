import ReactHtmlParser from "react-html-parser";
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
const Map = ({findUs}) => {
  return (
    <>
      <div className="section-space-top">
        <div className="container">
          <div className="section-title-primary text-center">
            <h2>{!!findUs && findUs.title}</h2>
            {ReactHtmlParser(!!findUs && findUs.body)}
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
