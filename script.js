function toggleMode() {
  // to access the html of the document use documentElement
  const html = document.documentElement;

  //   if (html.classList.contains("light")) {
  //     html.classList.remove("light");
  //   } else {
  //     html.classList.add("light");
  //   }

  html.classList.toggle("light");
}
