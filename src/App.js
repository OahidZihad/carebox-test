import MainForm from "./Components/MainForm/MainForm";
import GetData from "./Components/GetData/GetData";
// import firebaseConfig from "./firebase.config";
import firebase from "firebase";
import MainForm2 from "./Components/MainForm/MainForm2";

if (!firebase.apps.length) {
  // firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <div className="App">
      <MainForm></MainForm>
      <GetData></GetData>
    </div>
  );
}

export default App;
