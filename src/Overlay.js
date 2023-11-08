import { Logo } from "@pmndrs/branding";
import {
  AiOutlineHighlight,
  AiOutlineShopping,
  AiOutlineArrowLeft,
  AiFillCamera,
} from "react-icons/ai";
import { useSnapshot } from "valtio";
import { state } from "./store.js";

export default function Overlay() {
  const snap = useSnapshot(state);
  return (
    <div className="container">
      <header>
        <Logo width="40" height="40" />
        <AiOutlineShopping size="3em" />
      </header>
      {snap.intro ? <Intro /> : <Customizer />}
    </div>
  );
}

function Intro() {
  return (
    <section key="main">
      <div className="section--container">
        <div>
          <h1>LET'S DO IT</h1>
        </div>
        <div className="support--content">
          <div>
            <p>
              Create your unique and exclusiv shirt with our brand-new 3D
              customization tool. <strong>Unleash your imagination </strong>
              and define your own style.
            </p>
            <button onClick={() => {state.intro = false}} style={{ background: "black" }}>
              CUSTOMIZE IT
              <AiOutlineHighlight size="1.3em" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Customizer() {
  const colors = [
    "#ccc",
    "#efbd4e",
    "#80c670",
    "#726de8",
    "#ef674e",
    "#353934",
  ];
  const decals = ["react", "three2", "pmndrs"];
  return (
    <section key="custom">
      <div className="customizer">
        <div className="color-options">
          {colors.map((color) => (
            <div
              key={color}
              className="circle"
              style={{ background: color }}
            ></div>
          ))}
        </div>
      </div>

      <div className="decals">
        <div className="decals--container">
          {decals.map((decal) => (
            <div key={decal} className="decal">
              <img src={decal + "_thumb.png"} alt="brand" />
            </div>
          ))}
        </div>
      </div>

      <button className="share" style={{ background: "black" }}>
        DOWNLOAD
        <AiFillCamera size="1.3rem" />
      </button>
      <button onClick={() => {state.intro = true}} className="exit" style={{ background: "black" }}>
        GO BACK
        <AiOutlineArrowLeft size="1.3rem" />
      </button>
    </section>
  );
}
