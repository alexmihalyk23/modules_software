import React from 'react';
import { YMaps, Map,FullscreenControl, ZoomControl, Placemark, TypeSelector } from 'react-yandex-maps'

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const Map1 = () => {
    return (
        <YMaps>
            <Map
                width = '800px'
                height = '500px'

                defaultState={{
                    center: [55.018803, 82.933952],
                    zoom: 9,
                    controls: [],

                }}


            >
                <TypeSelector></TypeSelector>
                {/*Глобус*/}
                <Placemark defaultGeometry = {[55.025275, 82.928328]} onClick = { ( )  => openInNewTab('img/istockphoto-1346856470-612x612%201.png')}/>
                {/*Бугринка*/}
                <Placemark defaultGeometry = {[54.974867, 82.962731]} properties={{balloonContent: 'Бугринский мост'}} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                {/*Оперный*/}
                <Placemark defaultGeometry = {[55.030409, 82.924497]} onClick = { ( )  => openInNewTab('img/Rectangle 38@2x.png')}/>
                {/*Академ*/}
                <Placemark defaultGeometry = {[54.843583,83.107401]} properties={{balloonContent: 'Академгородок Известное место науки и достижений'}} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                {/*Поставьте 5 пожалуйста*/}
                <Placemark defaultGeometry = {[54.980207,82.897808]}
                           properties={{ hintContent: 'Поставьте 5 пожалуйста'}} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                <FullscreenControl />
                <ZoomControl options={{ float: 'left' }} />
            </Map>
        </YMaps>
    );
};

export default Map1;
