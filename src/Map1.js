import React from 'react';
import { YMaps, Map,FullscreenControl, ZoomControl, Placemark } from 'react-yandex-maps'

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const Map1 = () => {
    return (
        <YMaps>
            <Map
                width = '800px'
                height = '200px'

                defaultState={{
                    center: [55.018803, 82.933952],
                    zoom: 9,
                    controls: [],

                }}


            >
                {/*Глобус*/}
                <Placemark defaultGeometry = {[55.025275, 82.928328]} onClick = { ( )  => openInNewTab('img/istockphoto-1346856470-612x612%201.png')}/>
                {/*Бугринка*/}
                <Placemark defaultGeometry = {[54.974867, 82.962731]}/>
                {/*Оперный*/}
                <Placemark defaultGeometry = {[55.030409, 82.924497]}/>
                {/*Академ*/}
                <Placemark defaultGeometry = {[54.843583,83.107401]}/>

                <FullscreenControl />
                <ZoomControl options={{ float: 'left' }} />
            </Map>
        </YMaps>
    );
};

export default Map1;
