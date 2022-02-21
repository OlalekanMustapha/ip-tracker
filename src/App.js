import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import IpDetails from './components/IpDetails';
import { getIpInfo } from './utils/request';
import './App.css';
import ArrowIcon from './images/icon-arrow.svg';

const App = () => {
  const [location, setLocation] = useState([51.505, -0.09])
  const [ipDetails, setIpDetails] = useState({})
  const [userText, setUserText] = useState('')
  const [map, setMap] = useState(null)


  function handleSubmit(evt) {
    evt.preventDefault()
    let requestType = ''

    if (userText.split('.').length === 4) {
      requestType = 'ip'
    } else if (userText.includes('@')) {
      requestType = 'email'
    } else {
      requestType = 'domain'
    }

    getIpInfo(userText, requestType)
      .then(data => {
        setIpDetails(data)
        console.log(data)
        let center = {
          lat: data?.location?.lat,
          lng: data?.location?.lng
        }
        setLocation([center.lat, center.lng])
        map.setView(center)
        map.flyTo(center)
      })
  }

  useEffect(() => {
    getIpInfo('w3schools.com', 'domain')
      .then(data => {
        setIpDetails(data)
        console.log(data);
      })
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Ip Address Tracker</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter an ip address, domain or email...' onChange={(evt) => setUserText(evt.target.value)} />
          <button>
            <img src={ArrowIcon} alt="" />
          </button>
        </form>
      </header>
      <main>
        <MapContainer center={location} zoom={13} whenCreated={setMap}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={location}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </main>
      <IpDetails detailsObj={ipDetails} />
    </div>
  )
}

export default App;