import './App.css'
import {useEffect, useLayoutEffect} from "react";

// const registerServiceWorker = async () => {
//   if ("serviceWorker" in navigator) {
//     try {
//       const registration = await navigator.serviceWorker.register("service-worker-test.js", {
//         scope: '/'
//       });
//       if (registration.installing) {
//         console.log("Service worker installing");
//       } else if (registration.waiting) {
//         console.log("Service worker installed");
//       } else if (registration.active) {
//         console.log("Service worker active");
//       }
//     } catch (error) {
//       console.error(`Registration failed with ${error}`);
//     }
//   }
// };

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
