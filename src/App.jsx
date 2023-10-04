import React, { useState, useEffect } from 'react';
import './App.css';
import Avatar from './components/Avatar';
import PartList from './components/PartList';

const total = {
  body: 17,
  eyes: 17,
  eyebrows: 15,
  hair: 73,
  facialhair: 17,
  mouths: 24,
  glasses: 17,
  earrings: 32,
  hats: 28,
  neckwear: 18,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState(2);
  const [eyes, setEyes] = useState(2);
  const [eyebrows, setEyebrows] = useState(2);
  const [hair, setHair] = useState(2);
  const [facialhair, setFacialHair] = useState(2);
  const [mouths, setMouths] = useState(2);
  const [glasses, setGlasses] = useState(2);
  const [earrings, setEarrings] = useState(2);
  const [hats, setHats] = useState(2);
  const [neckwear, setNeckwear] = useState(2);
  const [clothing1, setClothing1] = useState(2);
  const [clothing2, setClothing2] = useState(2);
  const [clothing3, setClothing3] = useState(2);
  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setEyebrows(Math.floor(Math.random() * total.eyebrows));
    setHair(Math.floor(Math.random() * total.hair));
    setFacialHair(Math.floor(Math.random() * total.facialhair));
    setMouths(Math.floor(Math.random() * total.mouths));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setEarrings(Math.floor(Math.random() * total.earrings));
    setHats(Math.floor(Math.random() * total.hats));
    setNeckwear(Math.floor(Math.random() * total.neckwear));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
  };

  useEffect(() => {
    randomize();
  }, []);

  return (
    <div className="App">
      <div className="title-container">
        <div className="title">CHARACTER</div>
        <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
        <div className="divider"></div>
      </div>
      <div className="main">
        <div className="avatar-wrapper">
          <Avatar
            body={body}
            eyes={eyes}
            eyebrows={eyebrows}
            hair={hair}
            facialhair={facialhair}
            mouths={mouths}
            glasses={glasses}
            earrings={earrings}
            hats={hats}
            neckwear={neckwear}
            clothing1={clothing1}
            clothing2={clothing2}
            clothing3={clothing3}
          />
          <div className="text-center">
            <button className="button" onClick={randomize}>
              Randomize!
            </button>
          </div>
        </div>
        <div className="list-container">
          <div className="list-section">
            <h2>Body</h2>
            <PartList
              total={total.body}
              path="body"
              set={setBody}
              selected={body}
            />
          </div>
          <div className="list-section">
            <h2>Eyes</h2>
            <PartList
              total={total.eyes}
              path="eyes"
              set={setEyes}
              selected={eyes}
              // zoom={2.5}
              // top="35px"
            />
          </div>
          <div className="list-section">
            <h2>Eyebrows</h2>
            <PartList
              total={total.eyebrows}
              path="eyebrows"
              set={setEyebrows}
              selected={eyebrows}
            />
          </div>
          <div className="list-section">
            <h2>Hair</h2>
            <PartList
              total={total.hair}
              path="hair"
              set={setHair}
              selected={hair}
            />
          </div>
          <div className="list-section">
            <h2>Facial Hair</h2>
            <PartList
              total={total.facialhair}
              path="facial_hair"
              set={setFacialHair}
              selected={facialhair}
            />
          </div>
          <div className="list-section">
            <h2>Mouths</h2>
            <PartList
              total={total.mouths}
              path="mouths"
              set={setMouths}
              selected={mouths}
            />
          </div>
          <div className="list-section">
            <h2>Glasses</h2>
            <PartList
              total={total.glasses}
              path="accessories/glasses"
              set={setGlasses}
              selected={glasses}
            />
          </div>
          <div className="list-section">
            <h2>Earrings</h2>
            <PartList
              total={total.earrings}
              path="accessories/earrings"
              set={setEarrings}
              selected={earrings}
            />
          </div>
          <div className="list-section">
            <h2>Hats</h2>
            <PartList
              total={total.hats}
              path="accessories/hats"
              set={setHats}
              selected={hats}
            />
          </div>
          <div className="list-section">
            <h2>Neckwear</h2>
            <PartList
              total={total.neckwear}
              path="accessories/neckwear"
              set={setNeckwear}
              selected={neckwear}
              top="-50%"
            />
          </div>
          <div className="list-section">
            <h2>Clothes - Layer 1</h2>
            <PartList
              total={total.clothing1}
              path="clothes/layer_1"
              set={setClothing1}
              selected={clothing1}
            />
          </div>
          <div className="list-section">
            <h2>Clothes - Layer 2</h2>
            <PartList
              total={total.clothing2}
              path="clothes/layer_2"
              set={setClothing2}
              selected={clothing2}
            />
          </div>
          <div className="list-section">
            <h2>Clothes - Layer 3</h2>
            <PartList
              total={total.clothing3}
              path="clothes/layer_3"
              set={setClothing3}
              selected={clothing3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
