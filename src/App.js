import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [image, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list")
      .then((response) => setImages(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="textbox">
        <p className="alignleft">Everyone photos</p>
        <p className="alignright">
          <a href="#">views all 2,724,700</a>
        </p>
      </div>
      <div className="images">
        {image.map((img, i) => (
          <img key={i} src={img.download_url} height={150}></img>
        ))}
      </div>
    </div>
  );
}

export default App;
