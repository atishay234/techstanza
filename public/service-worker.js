self.addEventListener("push", async (event) => {
  data = event.data.json();
  const title = "Simple Title";
  const options = {
    body: "Simple piece of body text.\nSecond line of body text :)",
    icon: "https://desolate-badlands-28322.herokuapp.com/logo.png",
  };
  const promiseChain = self.registration.showNotification(title, options);
  event.waitUntil(promiseChain);
});
