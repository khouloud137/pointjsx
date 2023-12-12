import "./App.css";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import { Card } from "react-bootstrap";

function App() {
  let userName = "khouloud";
  return (
    <div className="App">
      <video id="bgvid" autoPlay loop muted src="/vedios/bgVideo.mp4" />
      {/* card body*/}
      <Card style={{ width: "25rem" }}>
        <Image variant="top" />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>

      {/* <UserName /> */}

      <h3>Hello, {userName || "there!"}</h3>
    </div>
  );
}

export default App;
