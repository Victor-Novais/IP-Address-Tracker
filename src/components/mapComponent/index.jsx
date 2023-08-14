import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import popup from '../../assets/iconMap.svg';

function MapComponent({ latitude, longitude }) {

    const mapRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        if (latitude !== undefined && longitude !== undefined) {

            if (!mapRef.current) {
                mapRef.current = L.map('map').setView([latitude, longitude], 13);

                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                }).addTo(mapRef.current);

                mapRef.current.removeControl(mapRef.current.zoomControl);
            }

            if (latitude && longitude) {
                const mapInstance = mapRef.current;

                if (!markerRef.current) {

                    const customIcon = L.divIcon({
                        className: 'custom-popup-icon',
                        html: `<img src="${popup}" alt="Custom Icon" />`,
                        iconSize: [32, 32],
                    });

                    markerRef.current = L.marker([latitude, longitude], { icon: customIcon }).addTo(mapInstance);
                } else {

                    markerRef.current.setLatLng([latitude, longitude]);
                }

                mapInstance.setView([latitude, longitude], 13);
                mapInstance.getContainer().style.zIndex = '0';
                mapInstance.scrollWheelZoom.disable();
                mapInstance.dragging.disable();
                mapInstance.touchZoom.disable();
                mapInstance.doubleClickZoom.disable();
            }
        }
    }, [latitude, longitude]);

    return <div id="map" className="map-container" style={{ width: '100%', height: '640px' }}></div>;
}

export default MapComponent;