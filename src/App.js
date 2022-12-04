import './App.css';
import { useState, useEffect } from "react";
import { MarsGallery } from "./MarsGallery";
import { NasaAPIConnection } from "./DataConnection";
import Snowfall from 'react-snowfall';

function App() {

  const [year, setYear] = useState(2010);
  const [pics, setPics] = useState([]);

  
  useEffect(() => {
    const timer = setTimeout( async () => {
      let returnPictures = await NasaAPIConnection(year);
      /* Setting the state of the pics variable to the returnPictures.photos variable. */
      setPics(returnPictures.photos);
    }, 1000);

    return () => clearInterval(timer);
  }, [year])


  return (
    <div className="App">
      <h1>Christmas on Mars at...</h1>
      <input aria-label='date' 
             type="range"
             min="2008" max="2021"
             value={year}
             /* is called when the input value changes. */
             onChange={(e) => {
              setYear(e.target.value);
             }}
             />
             <div className='yearDv'>
              {year}
             </div>
             <MarsGallery images={pics}/>
             <Snowfall/>
    </div>
  );
}

export default App;
