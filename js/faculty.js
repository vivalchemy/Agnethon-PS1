const events = [
  {
    title: "Agnethon",
    imageUrl:
      "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla orci nec lectus interdum, at sagittis lorem varius.",
    timestamp: new Date().toISOString(),
  },
  {
    title: "Committee XYZ",
    imageUrl:
      "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg",
    description:
      "Nulla facilisi. Integer suscipit magna ut mauris semper, vel tincidunt ipsum pellentesque. Nunc tincidunt.",
    timestamp: new Date().toISOString(),
  },
  {
    title: "Event ABC",
    imageUrl:
      "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas pretium.",
    timestamp: new Date().toISOString(),
  },
  {
    title: "Team PQR",
    imageUrl:
      "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg",
    description:
      "Suspendisse potenti. Proin sit amet feugiat ipsum. Sed quis nisi nec magna eleifend ullamcorper non at ex.",
    timestamp: new Date().toISOString(),
  },
  {
    title: "Project LMN",
    imageUrl:
      "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg",
    description:
      "Fusce eget tristique justo, ac tincidunt leo. Nunc ultricies vel urna nec hendrerit. Duis sit amet.",
    timestamp: new Date().toISOString(),
  },
  {
    title: "Task UVW",
    imageUrl:
      "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed gravida turpis.",
    timestamp: new Date().toISOString(),
  },
  {
    title: "Organization DEF",
    imageUrl:
      "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg",
    description:
      "In hac habitasse platea dictumst. Donec tempus ipsum id elit feugiat, sed commodo velit dictum.",
    timestamp: new Date().toISOString(),
  },
  {
    title: "Workshop HIJ",
    imageUrl:
      "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg",
    description:
      "Curabitur ut dolor in sem vehicula ultricies. Aliquam at lorem non ante vestibulum congue id ac.",
    timestamp: new Date().toISOString(),
  },
  {
    title: "Group RST",
    imageUrl:
      "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg",
    description:
      "Ut at pharetra enim. Fusce luctus mi sed lacus malesuada, eu convallis sapien pharetra. Nam.",
    timestamp: new Date().toISOString(),
  },
  {
    title: "Seminar KLM",
    imageUrl:
      "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg",
    description:
      "Praesent vestibulum, purus in pharetra tristique, magna metus vehicula tellus, eget eleifend est tortor eu.",
    timestamp: new Date().toISOString(),
  },
];

async function showEvents(events) {
  const eventsContainer = document.querySelector(".events");
  const eventTemplate = document.getElementById("eventTemplate");

  events.forEach((event) => {
    const clone = eventTemplate.content.cloneNode(true);

    clone.querySelector(".event.image").src = event.imageUrl;
    clone.querySelector(".event.title").textContent = event.title;
    clone.querySelector(".event.description").textContent = event.description;
    clone.querySelector(".event.timestamp").textContent = event.timestamp;
    // console.log(clone);
    eventsContainer.appendChild(clone);
  });

  console.log;
}

showEvents(events);

//for details button
// function details() {
//   window.location = "https://www.agnethon.tech/";
// }
