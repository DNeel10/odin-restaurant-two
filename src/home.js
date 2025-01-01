import odinImage from "./odin.png";

export default function home() {
  const heroSection = document.createElement("div");
  const heroTitle = document.createElement("p");
  const heroImg = document.createElement("img");

  heroImg.src = odinImage;

  heroTitle.innerText = "Restaurant Odin";

  heroSection.appendChild(heroTitle);
  heroSection.appendChild(heroImg);

  return heroSection;
}
