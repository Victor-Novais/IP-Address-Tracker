
import './index.css';
import MapComponent from '../../components/mapComponent/index.jsx';
import banner from '../../assets/banner.png'
import iconButton from '../../assets/icon-arrow.svg'
import axios from 'axios';
import React, { useState } from 'react';
function App() {
  const [ipAddress, setIpAddress] = useState('');
  const [location, setLocation] = useState({});
  const [isLoading, setLoading] = useState(false);


  const fetchIpAddressDetails = async () => {
    try {
      setLoading(true);
      setLocation({});
      const response = await axios.get(`http://ipwho.is/${ipAddress}`);
      setLocation(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching IP details', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">

      <div className='banner'>
        <h1>IP Address Tracker</h1>
        <img src={banner} alt="banner" />
        <div className='submit'>
          <input type="text" className='input'
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            placeholder='Search for any IP address or domain' />
          <button className='button'>
            <img src={iconButton} alt="botão"
              onClick={fetchIpAddressDetails}
              disabled={isLoading} />
          </button>
        </div>
      </div>
      <div className='infos-container'>
        <div className='infos'>
          <div className='info-results'>
            <div className='results'>
              <p>IP ADDRESS</p>
              <h1>{location.ip || '--'}</h1>
            </div>
            <div className='divider'></div>
            <div className='results'>
              <p>Location</p>
              <h1>{`${location.city || ''} ${location.region || '--'} `}</h1>
            </div>
            <div className='divider'></div>
            <div className='results'>
              <p>Timezone</p>
              <h1>{location.timezone && location.timezone.utc
                ? `UTC ${location.timezone.utc}`
                : '--'}
              </h1>
            </div>
            <div className='divider'></div>
            <div className='results'>
              <p>ISP</p>
              <h1>{location.connection && location.connection.isp
                ? `${location.connection.isp}`
                : '--'}
              </h1>

            </div>

          </div>
        </div>
      </div>
      <div className='map-container'>
        <MapComponent latitude={location.latitude} longitude={location.longitude} fetchLocation={fetchIpAddressDetails} />
      </div>
    </div >
  );
}

export default App;
