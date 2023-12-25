import FelizNavidad from "./components/FelizNavidad/FelizNavidad"

function App() {
  const imagen1URL = 'https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/FotoconMami.jpeg?alt=media&token=e9155552-3076-433c-b977-9158382c258c';
  const imagen2URL = 'https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Foto%20Santafe.jpeg?alt=media&token=9b36606f-3e4a-438e-a0ba-7060af7fd9e4';

  return (
    <>
     <FelizNavidad imagen1={imagen1URL} imagen2={imagen2URL}/>
    </>
  )
}

export default App
