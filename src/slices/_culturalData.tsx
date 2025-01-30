import { CulturalPlace } from "./cultureSlice";

export const initialState: {
  places: CulturalPlace[];
  active: string | null;
  place: boolean;
  showLines: boolean;
  showDetail: boolean;
} = {
  active: "Debre Damo",
  place: false,
  showLines: false,
  showDetail: false,
  
  places: [
    {
      name: "Debre Damo",
      latitude: 14.3764,
      longitude: 39.1865,
      description:
        "An ancient cliff-top monastery accessible only by climbing a rope. It is known for its preserved manuscripts and rich history.",
      region: "Tigray",
    },
    {
      name: "Abuna Yemata Guh",
      latitude: 13.8983,
      longitude: 39.2778,
      description:
        "A stunning rock-hewn church famous for its dramatic cliffside location and beautiful ancient frescoes.",
      region: "Tigray",
    },
    {
      name: "Wukro Chirkos",
      latitude: 13.7971,
      longitude: 39.5982,
      description:
        "An ancient rock-hewn church featuring intricate carvings, located in Wukro town.",
      region: "Tigray",
    },
    {
      name: "Abraha we Atsbeha",
      latitude: 13.7613,
      longitude: 39.5608,
      description:
        "A rock church attributed to the Axumite kings, known for its beautiful interior carvings and historical significance.",
      region: "Tigray",
    },
    {
      name: "Yemrehana Krestos",
      latitude: 12.0356,
      longitude: 39.0311,
      description:
        "A cave church built in the Axumite style with wooden ceilings, located near Lalibela, showcasing unique architecture.",
      region: "Tigray",
    },
    {
      name: "Gheralta Churches",
      latitude: 13.8355,
      longitude: 39.3096,
      description:
        "A group of rock-hewn churches located on the Gheralta mountains, known for their stunning views and historical significance.",
      region: "Tigray",
    },
    {
      name: "Aksum Obelisks",
      latitude: 14.1195,
      longitude: 38.7331,
      description:
        "Ancient stelae and obelisks that are symbols of the Aksumite civilization, representing its grandeur and engineering skills.",
      region: "Tigray",
    },
    {
      name: "Kibre Negest",
      latitude: 14.1207,
      longitude: 38.739,
      description:
        "The historical site containing the remains of an ancient Aksumite palace, with significant archaeological value.",
      region: "Tigray",
    },
    {
      name: "Church of St. Mary of Zion",
      latitude: 14.126,
      longitude: 38.7339,
      description:
        "An important Ethiopian Orthodox church believed to house the Ark of the Covenant, holding great religious significance.",
      region: "Tigray",
    },
    {
      name: "Mariam Tsiyon Church",
      latitude: 14.1287,
      longitude: 38.7345,
      description:
        "A historic church in Aksum that is significant in Ethiopian religious tradition and features beautiful architecture.",
      region: "Tigray",
    },
    {
      name: "Tsion Church",
      latitude: 14.12,
      longitude: 38.7367,
      description:
        "Located in Axum, this church is associated with the Ark of the Covenant and holds a central place in Ethiopian Christianity.",
      region: "Tigray",
    },
    {
      name: "Gudit Stelae",
      latitude: 14.0919,
      longitude: 38.7464,
      description:
        "A set of ancient stone markers associated with the legendary Queen Gudit, located in the region of Aksum.",
      region: "Tigray",
    },
    {
      name: "Axum Museum",
      latitude: 14.12,
      longitude: 38.7367,
      description:
        "A museum showcasing artifacts from the ancient Aksumite civilization and its history.",
      region: "Tigray",
    },
    {
      name: "Medhane Alem Adi Kesho",
      latitude: 13.7483,
      longitude: 39.3724,
      description:
        "An ancient rock-hewn church in Tigray known for its stunning architecture and historical relevance.",
      region: "Tigray",
    },
    {
      name: "Daniel Korkor",
      latitude: 13.836,
      longitude: 39.341,
      description:
        "A beautiful rock-hewn church located in the Gheralta area, noted for its serene atmosphere and historical significance.",
      region: "Tigray",
    },
    {
      name: "Kokob Tsion Church",
      latitude: 14.0841,
      longitude: 38.71,
      description:
        "A historic church in Aksum known for its architectural beauty and religious importance in Ethiopian Orthodox Christianity.",
      region: "Tigray",
    },
    {
      name: "Saba Kela",
      latitude: 14.1123,
      longitude: 38.7711,
      description:
        "An archaeological site with ancient ruins and structures, offering insights into the Aksumite civilization.",
      region: "Tigray",
    },
    {
      name: "Shire Endaselassie",
      latitude: 14.1532,
      longitude: 38.4263,
      description:
        "A historic town with ancient churches and significant religious heritage.",
      region: "Tigray",
    },
    {
      name: "Abreha we Atsbeha",
      latitude: 13.868,
      longitude: 39.066,
      description:
        "A rock-hewn church known for its unique architectural style and historical importance.",
      region: "Tigray",
    },
    {
      name: "Hawzien",
      latitude: 13.9114,
      longitude: 39.275,
      description:
        "A town with several historic churches and archaeological sites that reflect the region's rich history.",
      region: "Tigray",
    },
    {
      name: "Barka Church",
      latitude: 14.0694,
      longitude: 38.6987,
      description:
        "An ancient church located in the Tigray region, notable for its historical architecture and religious significance.",
      region: "Tigray",
    },
    {
      name: "Atsbi Wenberta",
      latitude: 13.8277,
      longitude: 39.3066,
      description:
        "A historic town known for its proximity to ancient rock-hewn churches and traditional Tigrayan culture.",
      region: "Tigray",
    },
    {
      name: "Selam Keddem",
      latitude: 14.084,
      longitude: 38.7619,
      description:
        "A historical site with remnants of ancient structures, representing the architectural heritage of the Aksumite period.",
      region: "Tigray",
    },
    {
      name: "Mai Shum",
      latitude: 14.024,
      longitude: 39.2711,
      description:
        "A historic site known for its ancient structures and significance in the study of Ethiopian history.",
      region: "Tigray",
    },
    {
      name: "Adigrat",
      latitude: 14.2843,
      longitude: 39.47,
      description:
        "A town rich in history, with several churches and historical landmarks reflecting the cultural heritage of the region.",
      region: "Tigray",
    },
    {
      name: "Abba Garima Monastery",
      latitude: 13.6446,
      longitude: 39.2864,
      description:
        "One of the oldest monasteries in Ethiopia, known for its ancient manuscripts and historical significance.",
      region: "Tigray",
    },
    {
      name: "Tsigereda",
      latitude: 14.1564,
      longitude: 39.2571,
      description:
        "An ancient settlement with significant archaeological sites that provide insight into the early civilizations of Tigray.",
      region: "Tigray",
    },
    {
      name: "Nigste Saba",
      latitude: 14.0055,
      longitude: 39.0525,
      description:
        "Nigste Saba is a historical site believed to be linked to the ancient kingdom of Aksum. It features remnants of structures that hint at its significance during the Axumite period. The area is rich in archaeological finds, and its landscape offers insights into the lifestyle and culture of the people who once inhabited the region. Scholars and historians often visit this site for research and exploration of Ethiopia's deep-rooted history.",
      region: "Tigray",
    },
    {
      name: "Hasey Yohans Mekelle",
      latitude: 13.487,
      longitude: 39.475,
      description:
        "Hasey Yohans is a prominent church located in Mekelle, known for its intricate architecture and historical significance. The church serves as a center for religious activities and a pilgrimage site for many Orthodox Christians in the region. With its stunning frescoes and serene ambiance, Hasey Yohans is not only a place of worship but also a testament to the rich religious heritage of Ethiopia. Visitors can appreciate both its spiritual significance and artistic beauty.",
      region: "Tigray",
    },
    {
      name: "Yeha",
      latitude: 14.2195,
      longitude: 39.5088,
      description:
        "Yeha is home to the remains of an ancient Aksumite temple and is one of the oldest archaeological sites in Ethiopia. The temple is renowned for its impressive architecture, showcasing the advanced engineering skills of the Aksumite civilization. Yeha has been a focal point for researchers studying the history of pre-Aksumite cultures and their influence on the development of the Ethiopian state. The site offers a glimpse into Ethiopia's ancient past and its connections to broader historical narratives.",
      region: "Tigray",
    },
    {
      name: "Hawelti Semaetat",
      latitude: 14.0321,
      longitude: 39.4294,
      description:
        "Hawelti Semaetat is an ancient church located near Mekelle, known for its historical and religious significance. The church is characterized by its beautiful rock-hewn architecture and serves as a center for local religious practices. It is a popular destination for pilgrims, especially during major religious festivals. The surrounding area is rich in history, making it an essential site for those interested in the religious heritage of the Tigray region.",
      region: "Tigray",
    },
    {
      name: "Mariam Tsion",
      latitude: 14.112,
      longitude: 39.7386,
      description:
        "Mariam Tsion is one of the most revered churches in Ethiopia, believed to house the Ark of the Covenant. This site holds immense significance for Ethiopian Orthodox Christians and has a rich history intertwined with the legends of the Ark's journey. The church's architecture reflects traditional Ethiopian styles, and it is adorned with beautiful murals depicting biblical scenes. Pilgrims travel from far and wide to visit Mariam Tsion, making it a pivotal place for faith and cultural heritage.",
      region: "Tigray",
    },
    {
      name: "King Aleb",
      latitude: 14.0976,
      longitude: 39.7061,
      description:
        "King Aleb is a historical figure associated with the Aksumite Empire, and this site is believed to be linked to his reign. It offers insights into the political history of the region and the impact of royal rule on the development of Tigray. Archaeological explorations have uncovered artifacts that shed light on the governance, culture, and societal structures during King Aleb's time. The site remains a significant point of interest for historians studying Ethiopia's royal lineage.",
      region: "Tigray",
    },
    {
      name: "Cathedral of the Holy Saviour",
      latitude: 13.5062,
      longitude: 39.4701,
      description:
        "The Cathedral of the Holy Saviour in Mekelle is a landmark church known for its stunning architecture and historical importance. It serves as the seat of the Tigray Diocese and plays a central role in the religious life of the community. The cathedral features beautiful stained glass windows and intricate carvings that reflect the rich artistic traditions of Ethiopian Orthodox Christianity. As a site of worship and community gatherings, it symbolizes the spiritual heart of Mekelle.",
      region: "Tigray",
    },
  ].reduce<CulturalPlace[]>((acc, place) => {
    if (!acc.includes(place)) {
      acc.push(place);
    }
    return acc;
  }, []),
};
