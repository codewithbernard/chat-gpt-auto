import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "zc1yyogj",
  dataset: "production",
  token:
    "skZPmdRBzyWEvgl3e7OxwXptSxQ1vImZseo20nSjaUifg8SZfEtmwcrjBeDK50hvQeD7pDPQn1P1wciXPeQYuOYb6iwAKP73C39RtgiEkueMiUytgvFlOr52boJiFx6lPreCxjIF95RRvgjZvgPNrWKJQTdTDqOSqxFRWfHEgC1Mligifc40",
  useCdn: false,
  apiVersion: "2024-01-12",
});

export default client;
