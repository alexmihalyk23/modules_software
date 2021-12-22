import React from 'react';
import { YMaps, Map,FullscreenControl, ZoomControl  } from 'react-yandex-maps'

const Map1 = () => {
    return (
        <YMaps>
            <Map
                defaultState={{
                    center: [55.018803, 82.933952],
                    zoom: 9,
                    controls: [],
                }}
            >
                <Placemark defaultGeometry = {[55.018803, 82.933952]}/>
                <FullscreenControl />
                <ZoomControl options={{ float: 'left' }} />
            </Map>
        </YMaps>
    );
};

export default Map1;
