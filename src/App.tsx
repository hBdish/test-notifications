import './App.css'
import { useLayoutEffect} from "react";


function App() {


  useLayoutEffect(() => {
    if ("serviceWorker" in navigator) {
      // Регистрация service worker-а, расположенного в корне сайта
      // за счёт использования дефолтного scope (не указывая его)
      navigator.serviceWorker
        .register("/sw.js")
        .then(function (registration) {
          console.log("Service worker зарегистрирован:", registration);
        })
        .catch(function (error) {
          console.log("Ошибка при регистрации service worker-а:", error);
        });
    } else {
      // Текущий браузер не поддерживает service worker-ы.
      console.log("Текущий браузер не поддерживает service worker-ы");
    }
  }, []);

  return (
    <div onLoad={() => {
    }} style={{width: '100vw', height: '100vh', background: 'lavender'}}>
      <h1>TEST NOTIFICATIONS</h1>
    </div>
  )
}

export default App
