const mutations = [
  {
    name: "Drug Resistance",
    description: "Reduces impact of medicine.",
    img: "assets/shield.svg", // было images/resistance.png
  },
  {
    name: "Fast Replication",
    description: "Increases infection rate.",
    img: "assets/speed.svg", // было images/replication.png
  },
  {
    name: "Immune Stealth",
    description: "Avoid detection by immune system.",
    img: "assets/stealth.svg", // было images/stealth.png
  },
];

const container = document.getElementById("mutation-container");

mutations.forEach((mutation) => {
  const card = document.createElement("div");
  card.className = "mutation-card";

  const img = document.createElement("img");
  img.src = mutation.img;
  img.alt = mutation.name;

  const title = document.createElement("h4");
  title.textContent = mutation.name;

  const desc = document.createElement("p");
  desc.textContent = mutation.description;

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(desc);
  container.appendChild(card);
});
