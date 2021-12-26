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
                width = '100%'
                height = '400px'

                defaultState={{
                    center: [55.018803, 82.933952],
                    zoom: 9,
                    controls: [],

                }}


            >
                <TypeSelector></TypeSelector>
                {/*ЖД*/}
                <Placemark defaultGeometry = {[54.867407, 83.076493]} properties={{balloonContent: 'Музей железнодорожной техники'}} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                {/*Рерих*/}
                <Placemark defaultGeometry = {[55.022805, 82.920103]} properties={{balloonContent: 'Музей Н.К. Рериха'}} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                {/*СССР*/}
                <Placemark defaultGeometry = {[55.037415, 82.921811]} properties={{balloonContent: 'Здание Академии наук СССР'}} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                {/*Заельцовский*/}
                <Placemark defaultGeometry = {[55.051496, 82.840666]} properties={{balloonContent: '"ПКиО" "Заельцовский"'}} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                {/*первомайка*/}
                <Placemark defaultGeometry = {[55.029705, 82.924583]} properties={{balloonContent: 'Первомайский сквер'}} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                {/*Набережная*/}
                <Placemark defaultGeometry = {[55.006405, 82.939884]} properties={{balloonContent: 'Набережная Парк культуры и отдыха'}} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                {/*Театр крипоты*/}
                <Placemark defaultGeometry = {[55.029371, 82.910076]} properties={{balloonContent: 'Театр кукол'}} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                {/*Музыкальный театр*/}
                <Placemark defaultGeometry = {[55.035855, 82.928877]} properties={{balloonContent: 'Новосибирский музыкальный театр'}} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                {/*Глобус*/}
                <Placemark defaultGeometry = {[55.025275, 82.928328]} properties={{balloonContent: 'Театр Глобус'}} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                {/*Бугринка*/}
                <Placemark defaultGeometry = {[54.974867, 82.962731]} properties={{balloonContent: 'Бугринский мост'}} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                {/*Оперный*/}
                <Placemark defaultGeometry = {[55.030409, 82.924497]} properties={{balloonContent: 'Оперный театр'}} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
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
