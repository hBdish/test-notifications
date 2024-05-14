import './App.css'
import {useEffect} from "react";

const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("service-worker-test.js", {
        scope: '/'
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

function App() {

  useEffect(() => {
    registerServiceWorker();
    // if ("serviceWorker" in navigator) {
    //   navigator.serviceWorker
    //     .register("service-worker.js", {
    //       scope: "./",
    //     })
    //     .then(function (registration) {
    //       let serviceWorker: ServiceWorker | undefined
    //
    //       if (registration.installing) {
    //         serviceWorker = registration.installing;
    //         document.querySelector("#kind")!.textContent = "installing";
    //       } else if (registration.waiting) {
    //         serviceWorker = registration.waiting;
    //         document.querySelector("#kind")!.textContent = "waiting";
    //       } else if (registration.active) {
    //         serviceWorker = registration.active;
    //         document.querySelector("#kind")!.textContent = "active";
    //       }
    //
    //       console.log(serviceWorker)
    //
    //       if (serviceWorker) {
    //         console.log(serviceWorker.state)
    //         // logState(serviceWorker.state);
    //         serviceWorker.addEventListener("statechange", function (e) {
    //           console.log(e.target);
    //         });
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log(`
    //         // Произошла ошибка при регистрации Service Worker.
    //         // Файл service-worker.js может быть недоступным или содержать ошибки синтаксиса.
    //         ${error}`)
    //
    //     });
    // } else {
    //   console.log('// Данный браузер не поддерживает Service Worker.')
    // }
  }, []);

  return (
    <div onLoad={() => {
    }} style={{width: '100vw', height: '100vh', background: 'lavender'}}>
      <h1>TEST NOTIFICATIONS</h1>
    </div>
  )
}

export default App
