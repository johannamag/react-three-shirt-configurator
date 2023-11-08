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
            <button
              onClick={() => {
                state.intro = false;
              }}
              style={{ background: "black" }}
            >
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
  const snap = useSnapshot(state);

  return (
    <section key="custom">
      <div className="customizer">
        <div className="color-options">
          {snap.colors.map((color) => (
            <div
              key={color}
              className="circle"
              style={{ background: color }}
              onClick={() => (state.selectedColor = color)}
            ></div>
          ))}
        </div>
      </div>

      <div className="decals">
        <div className="decals--container">
          {snap.decals.map((decal) => (
            <div
              onClick={() => (state.selectedDecal = decal)}
              key={decal}
              className="decal"
            >
              <img src={decal + "_thumb.png"} alt="brand" />
            </div>
          ))}
        </div>
      </div>

      <button
        className="share"
        style={{ background: snap.selectedColor }}
        onClick={() => {
          const link = document.createElement("a");
          link.setAttribute("download", "canvas.png");
          link.setAttribute(
            "href",
            document
              .querySelector("canvas")
              .toDataURL("image/png")
              .replace("image/png", "image/octet-stream")
          );
          link.click();
        }}
      >
        DOWNLOAD
        <AiFillCamera size="1.3rem" />
      </button>
      <button
        onClick={() => {
          state.intro = true;
        }}
        className="exit"
        style={{ background: snap.selectedColor }}
      >
        GO BACK
        <AiOutlineArrowLeft size="1.3rem" />
      </button>
    </section>
  );
}
