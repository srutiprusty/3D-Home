
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "./components/Experience";
//import { Overlay } from "./components/Overlay";
import "./App.css"

function App() {
  const redirectToWebsite = () => {
    window.location.href = "http://localhost:5173/";
  };

  return (
    <>
      <Leva hidden />
      {/* <Overlay />  */}
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["#232323"]} />
        <Experience />
      </Canvas>

      <div style={{ textAlign: "center", marginBottom: "5px", marginTop: "5px" }}>
        <button class="button-36" role="button" onClick={redirectToWebsite}>
          <span class="text">HOMYZ</span>
        </button>
        <div></div>
      </div>
    </>
  );
}

export default App;




