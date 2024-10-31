import { CulturalPlace } from "./cultureSlice";

export const initialState: {
  places: CulturalPlace[];
  active: string | null;
  place: boolean;
  showLines: boolean;
} = {
  active: "Gishen Mariam",
  place: false,
  showLines: false,
  places: [
    {
      name: "Debre Damo",
      latitude: 14.3764,
      longitude: 39.1865,
      description:
        "Ancient cliff-top monastery accessible only by climbing a rope, known for its preserved manuscripts.",
      region: "Tigray",
    },
    {
      name: "Abuna Yemata Guh",
      latitude: 13.8983,
      longitude: 39.2778,
      description:
        "Rock-hewn church famed for its dramatic cliffside location and ancient frescoes.",
      region: "Tigray",
    },
    {
      name: "Debre Libanos",
      latitude: 9.7127,
      longitude: 38.7935,
      description:
        "Historic monastery and pilgrimage site with scenic views over the Jemma River Gorge.",
      region: "Oromia",
    },
    {
      name: "Debre Berhan Selassie",
      latitude: 13.5206,
      longitude: 37.4728,
      description:
        "Church renowned for its elaborate murals, including its famous ceiling of angel faces.",
      region: "Amhara",
    },
    {
      name: "Kidane Mehret Monastery",
      latitude: 12.0339,
      longitude: 39.0438,
      description:
        "Located on Lake Tana, known for its colorful murals and role in Ethiopian Orthodox Christianity.",
      region: "Amhara",
    },
    {
      name: "Narga Selassie",
      latitude: 11.6711,
      longitude: 37.2608,
      description:
        "Lake Tana island monastery with unique architecture and tranquil surroundings.",
      region: "Amhara",
    },
    {
      name: "Lake Tana Monasteries",
      latitude: 11.75,
      longitude: 37.5,
      description:
        "Collection of ancient monasteries located on the islands of Lake Tana.",
      region: "Amhara",
    },
    {
      name: "Ura Kidane Mihret",
      latitude: 11.7716,
      longitude: 37.2347,
      description:
        "One of Lake Tana's iconic monasteries with vibrant frescoes and lush surroundings.",
      region: "Amhara",
    },
    {
      name: "Kibran Gebriel",
      latitude: 11.6949,
      longitude: 37.3553,
      description:
        "One of the oldest Lake Tana monasteries, historically restricted to male visitors.",
      region: "Amhara",
    },
    {
      name: "Zengena Monastery",
      latitude: 10.5356,
      longitude: 36.9197,
      description:
        "Remote monastery near Lake Zengena, offering seclusion and panoramic views.",
      region: "Amhara",
    },
    {
      name: "Gishen Mariam",
      latitude: 11.3831,
      longitude: 39.5948,
      description:
        "Pilgrimage site believed to hold a piece of the True Cross of Christ.",
      region: "Amhara",
    },
    {
      name: "Tadbaba Mariam",
      latitude: 10.9667,
      longitude: 38.0,
      description:
        "Ancient monastery located near the historical town of Lalibela.",
      region: "Amhara",
    },
    {
      name: "Gorgora Monastery",
      latitude: 12.2345,
      longitude: 37.3002,
      description:
        "Historic site near Lake Tana with scenic surroundings and ancient structures.",
      region: "Amhara",
    },
    {
      name: "Wukro Chirkos",
      latitude: 13.7971,
      longitude: 39.5982,
      description:
        "Ancient rock-hewn church featuring intricate carvings, located in Wukro town.",
      region: "Tigray",
    },
    {
      name: "Abraha we Atsbeha",
      latitude: 13.7613,
      longitude: 39.5608,
      description:
        "Rock church attributed to the Axumite kings, with beautiful interior carvings.",
      region: "Tigray",
    },
    {
      name: "Yemrehana Krestos",
      latitude: 12.0356,
      longitude: 39.0311,
      description:
        "Cave church built in Axumite style with wooden ceilings, located near Lalibela.",
      region: "Amhara",
    },
    {
      name: "Hayk Istifanos Monastery",
      latitude: 11.3186,
      longitude: 39.6908,
      description:
        "Island monastery on Lake Hayk, known for its rich manuscript collection.",
      region: "Amhara",
    },
    {
      name: "Debre Selam Mikael",
      latitude: 11.5978,
      longitude: 38.3747,
      description:
        "Ancient rock-hewn church known for its intricate wall carvings and frescoes.",
      region: "Amhara",
    },
    {
      name: "Asheten Mariam Monastery",
      latitude: 11.795,
      longitude: 39.6803,
      description:
        "Monastery located on a hill near Lalibela, with stunning views over the town.",
      region: "Amhara",
    },
    {
      name: "Lalibela Rock-Hewn Churches",
      latitude: 12.0306,
      longitude: 39.0441,
      description:
        "UNESCO World Heritage site known for its monolithic churches carved from rock.",
      region: "Amhara",
    },
  ],
};
