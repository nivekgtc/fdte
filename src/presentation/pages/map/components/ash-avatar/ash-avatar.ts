export interface AshAvatarProps {
  position: "ashFront" | "ashLeftLeg" | "ashRightLeg" | "ashStop";
}

const MapPage = () => {
  return (
    <MapWrapper className="map">
      <Sidebar />
      {/* <AshAvatar /> */}
    </MapWrapper>
  );
};

export default MapPage;
