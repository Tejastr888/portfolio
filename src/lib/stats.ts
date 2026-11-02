export interface StatsData {
  github: {
    publicRepos: number;
    followers: number;
    totalStars: number;
    yearContributions: number;
  };
  leetcode: {
    totalSolved: number;
    easy: number;
    medium: number;
    hard: number;
    ranking: string;
  };
  updatedAt: string;
}

export const fallbackStats: StatsData = {
  github: {
    publicRepos: 27,
    followers: 12,
    totalStars: 8,
    yearContributions: 480
  },
  leetcode: {
    totalSolved: 320,
    easy: 115,
    medium: 178,
    hard: 27,
    ranking: "Top 12%"
  },
  updatedAt: new Date().toISOString()
};

export async function fetchStats(): Promise<StatsData> {
  try {
    const basePath = import.meta.env.BASE_URL || "/";
    const res = await fetch(`${basePath}stats.json`, { cache: "no-cache" });
    if (!res.ok) return fallbackStats;
    const data = await res.json();
    return data;
  } catch {
    return fallbackStats;
  }
}
