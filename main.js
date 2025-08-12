history.scrollRestoration = "manual";

const removeURLAnchor = () => {
  setTimeout(() => {
    window.history.replaceState({}, "", window.location.href.split("#")[0]);
  }, 100);
};
