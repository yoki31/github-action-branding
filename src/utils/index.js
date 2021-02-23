const getIcon = (e, text, title, fn) => {
  var el = document.getElementById("copy-text");
  el.value = text;
  el.select();
  document.execCommand("copy");
  fn?.()
  const message = document.createElement("div");
  message.innerHTML = title ? title : "Copy successfully";
  message.setAttribute(
    "style",
    "position:fixed;top:" +
    (e.y + 20) +
    "px;left:" +
    (e.x + 20) +
    "px;opacity:0;transition:all 0.3s;background: #eee; color: #000; height:0px;overflow:hidden; padding:4px 12px;border-radius: 2px;"
  );
  document.body.append(message);
  setTimeout(() => {
    message.style.height = "20px";
    message.style.opacity = '1';
  });

  setTimeout(() => {
    setTimeout(() => {
      document.body.removeChild(message);
    }, 500)
    message.style.height = "0px";
    message.style.opacity = '0';
  }, 1200);
};

export {
  getIcon
}