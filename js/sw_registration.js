/**
 *     Register a service worker
 */
self.addEventListener("DOMContentLoaded", event => {
  if ('serviceWorker' in navigator) {

    navigator.serviceWorker
      .register("sw.js")
      .catch(e => console.log("Registration failed :(", e));

      //.then(registration => console.log("SW registered", registration))
  }
});
