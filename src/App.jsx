import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [explanation, setExplanation] = useState('');
  const [url, setUrl] = useState('');
  const [mediaType, setMediaType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        const data = await response.json();
        setExplanation(data.explanation);
        setUrl(data.url);
        setMediaType(data.media_type);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  
  if (!url) {
    return <>Loading...</>
  }

  if (mediaType === 'image') {
    return (
      <>
        <p>Explanation: {explanation}</p>
        <img alt="Nasa APOD" src={url} />
      </>
    );
  }
  else {
    return (
      <>
        <p>Explanation: {explanation}</p>
        <iframe width="520" height="415" src={url} title="Nasa APOD"></iframe>
      </>
    );
  }
}

export default App;