import {React,useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Container from '../Pages/Home/Container'

export default function MainPageText() {
    function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);


  const loaderGIF = <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif" alt="loader" className="loaderMain" />

   function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 4000));
}

  const [withGif,setWithGif] = useState(false);


 useEffect(() => {
    if (withGif) {
      simulateNetworkRequest().then(() => {
        setWithGif(false);
      });
    }
  }, [withGif]);

  const getLoader = () => setWithGif(true);
  const compStyle = {display:'none'}

    return (
      <div>
      <Button
      variant="primary"
      disabled={isLoading,withGif}
      onClick={!isLoading ? handleClick : null , !withGif? getLoader : null}>
      {isLoading ? 'Loading Movies....' : 'LET\' GET STARTED! Click here!'} 
      </Button>
      <div> {withGif? loaderGIF : null}</div>
      <Container style={compStyle} condition={withGif}/>
      </div>
    )
}
