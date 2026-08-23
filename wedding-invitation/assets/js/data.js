/**
 * #HandaSharmaGaya — central content object.
 * Edit copy, times, images, links here. Layout/components read from this file only.
 */
const WEDDING = {
  couple: {
    partner1: "Parth",
    partner2: "Tanisha",
    hashtag: "#HandaSharmaGaya",
    monogram: ["P", "T"]
  },

  dates: {
    display: "1 – 2 November 2026",
    startISO: "2026-11-01",
    endISO: "2026-11-02"
  },

  venue: {
    name: "The Uttrayan",
    place: "Chakrata, Uttarakhand",
    mapsUrl: "" // add a Google Maps link when ready
  },

  hero: {
    tagline: "A weekend of mountains, marigolds and our favourite people.",
    image: "assets/images/hero-marigold-arch.jpg"
  },

  home: {
    eyebrow: "Our home for the weekend",
    line: "7,000 feet up, where the deodars start and the phone signal politely stops.",
    images: {
      primary: "assets/images/home-veranda.jpg",
      secondary: "assets/images/home-veranda.jpg"
    }
  },

  events: [
    {
      id: "mehndi",
      day: "Day 1",
      date: "Saturday, 1 November",
      name: "Mehndi",
      time: "10:00 AM",
      dressMood: "As colourful as you can",
      note: "",
      theme: "mehndi",
      images: {
        primary: "assets/images/mehndi-teepee.jpg",
        secondary: "assets/images/mehndi-canopy-detail.jpg"
      }
    },
    {
      id: "engagement",
      day: "Day 1",
      date: "Saturday, 1 November",
      name: "Engagement",
      time: "7:00 PM",
      dressMood: "Bling",
      note: "",
      theme: "engagement",
      images: {
        primary: "assets/images/engagement-fairylights.jpg",
        secondary: "assets/images/engagement-fairylights.jpg"
      }
    },
    {
      id: "haldi",
      day: "Day 2",
      date: "Sunday, 2 November",
      name: "Haldi",
      time: "8:00 AM",
      dressMood: "Bandhani & Bandhej",
      note: "",
      theme: "haldi",
      images: {
        primary: "assets/images/haldi-genda-brass.jpg",
        secondary: "assets/images/haldi-genda-brass.jpg"
      }
    },
    {
      id: "shaadi",
      day: "Day 2",
      date: "Sunday, 2 November",
      name: "Baraat &amp; Shaadi",
      time: "2:00 PM onwards",
      dressMood: "",
      note: "",
      theme: "shaadi",
      images: {
        primary: "assets/images/shaadi-mandap-closeup.jpg",
        secondary: "assets/images/shaadi-aisle-wide.jpg"
      }
    }
  ],

  travel: {
    note: "Plan to arrive on 31 October and leave on 3 November. Mountain roads begin after Kalsi — aim to complete the hill drive during daylight.",
    byRoad: [
      { from: "Delhi", time: "8 – 9 hrs" },
      { from: "Noida", time: "8 – 9 hrs" },
      { from: "Gurgaon", time: "9 – 10 hrs" },
      { from: "Chandigarh", time: "6 – 7 hrs" },
      { from: "Dehradun", time: "3 – 3.5 hrs" }
    ],
    byAir: {
      airport: "Jolly Grant Airport, Dehradun",
      distance: "~90 km from the venue",
      duration: "~3 – 3.5 hrs by road"
    },
    byTrain: {
      station: "Dehradun Railway Station",
      duration: "~3 hrs to the venue"
    },
    image: "assets/images/travel-hillside.jpg"
  },

  rsvp: {
    deadlineDisplay: "15 September 2026",
    linkUrl: "",
    linkLabel: "RSVP link — coming soon",
    conciergeName: "",
    conciergePhone: "",
    conciergeLabel: "Wedding concierge — details coming soon"
  }
};
