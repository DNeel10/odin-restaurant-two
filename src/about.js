export default function about() {
  const aboutDiv = document.createElement("div");

  const histHeader = document.createElement("h2");
  const history = document.createElement("p");

  histHeader.innerText = "About Us";
  history.innerText =
    "We were formed on a whim by a crazy man trying to come up with the worst restaurant ever.";
  aboutDiv.appendChild(histHeader);
  aboutDiv.appendChild(history);

  return aboutDiv;
}
