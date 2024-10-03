import dataSource from "@/models/dataSource";

export const getRankingsModel = async () => {
  const query = `
    SELECT * FROM game_rankings
    ORDER BY total_score DESC
    `;

  const results = await dataSource.query(query);

  return results;
};
