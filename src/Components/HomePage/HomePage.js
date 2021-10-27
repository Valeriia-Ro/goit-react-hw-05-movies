import React from "react";
import { useState, useEffect } from "react";
// import * as moviesAPi from "../../services/film-api";
import { fetchTrading } from "../../services/film-api";
import HomeView from "../../view/HomeView";
export default function HomePage() {
  const [trends, setTrends] = useState(null);

  useEffect(() => {
    fetchTrading().then(({ results }) => setTrends(results));
  }, [setTrends]);

  return <HomeView data={trends} />;
}
