"use client";

import {
  Map as YMap,
  Placemark,
  YMaps as YMapsProvider,
} from "@pbe/react-yandex-maps";

export const Map = () => (
  <YMapsProvider>
    <YMap
      width="100%"
      height="100%"
      defaultState={{
        center: [55.806216, 37.51111],
        zoom: 15,
        controls: [
          "zoomControl",
          "fullscreenControl",
          "geolocationControl",
          "trafficControl",
          "typeSelector",
        ],
      }}
      modules={[
        "control.ZoomControl",
        "control.FullscreenControl",
        "control.GeolocationControl",
        "control.TrafficControl",
        "control.TypeSelector",
      ]}
    >
      <Placemark
        options={{
          iconColor: "#ff0000",
        }}
        defaultGeometry={[55.808543, 37.512389]}
      />
    </YMap>
  </YMapsProvider>
);
