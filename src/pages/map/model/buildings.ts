import building1 from "@assets/images/pages/map/buildings/building1.webp";
import building2 from "@assets/images/pages/map/buildings/building2.webp";
import building3 from "@assets/images/pages/map/buildings/building3.webp";
import building4 from "@assets/images/pages/map/buildings/building4.webp";
import building5 from "@assets/images/pages/map/buildings/building5.webp";
import building6 from "@assets/images/pages/map/buildings/building6.webp";
import building7 from "@assets/images/pages/map/buildings/building7.webp";
import building8 from "@assets/images/pages/map/buildings/building8.webp";
import building9 from "@assets/images/pages/map/buildings/building9.webp";
import building10 from "@assets/images/pages/map/buildings/building10.webp";

// UI buildings' data and reference to id of the real project
// projectId соответствует ключу в BUILDING_TO_PROJECT_MAP
export const mapBuildings = [
  {
    projectId: 7, // luden-cards
    name: "Luden Cards",
    src: building1,
    x: 64,
    y: 30,
  },
  {
    projectId: 1, // enola
    name: "Enola",
    src: building2,
    x: 60,
    y: 50,
  },
  {
    projectId: 3, // real-fishing
    name: "Real Fishing",
    src: building3,
    x: 47,
    y: 46,
  },
  {
    projectId: 8, // historical-journey
    name: "Historical Journey",
    src: building4,
    x: 70,
    y: 15,
  },
  {
    projectId: 4, // pulson
    name: "Pulson",
    src: building5,
    x: 55.5,
    y: 16,
  },
  {
    projectId: 9, // retorno
    name: "Retorno",
    src: building6,
    x: 77,
    y: 35,
  },
  {
    projectId: 6, // sos-band
    name: "SOS Band",
    src: building7,
    x: 67,
    y: 45,
  },
  {
    projectId: 2, // spork
    name: "Spork",
    src: building8,
    x: 44,
    y: 24,
  },
  {
    projectId: 10, // stygen
    name: "Stygen",
    src: building9,
    x: 51,
    y: 32,
  },
  {
    projectId: 5, // tresor
    name: "Tresor",
    src: building10,
    x: 72,
    y: 29,
  },
];
