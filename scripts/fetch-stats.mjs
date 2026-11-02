import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const statsPath = path.resolve(__dirname, "../public/stats.json");

async function fetchGitHubStats() {
  const username = "Tejastr888";
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
    const data = await res.json();
    return {
      publicRepos: data.public_repos || 27,
      followers: data.followers || 12,
      totalStars: 8,
      yearContributions: 480
    };
  } catch (err) {
    console.warn("Could not fetch fresh GitHub stats, using fallback:", err.message);
    return { publicRepos: 27, followers: 12, totalStars: 8, yearContributions: 480 };
  }
}

async function fetchLeetCodeStats() {
  const username = "tejasacharya078";
  try {
    const query = `
      query userPublicProfile($username: String!) {
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `;
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { username } })
    });
    if (!res.ok) throw new Error(`LeetCode GraphQL error: ${res.status}`);
    const body = await res.json();
    const subs = body?.data?.matchedUser?.submitStats?.acSubmissionNum || [];
    const all = subs.find((s) => s.difficulty === "All")?.count || 320;
    const easy = subs.find((s) => s.difficulty === "Easy")?.count || 115;
    const medium = subs.find((s) => s.difficulty === "Medium")?.count || 178;
    const hard = subs.find((s) => s.difficulty === "Hard")?.count || 27;

    return {
      totalSolved: all,
      easy,
      medium,
      hard,
      ranking: "Top 12%"
    };
  } catch (err) {
    console.warn("Could not fetch fresh LeetCode stats, using fallback:", err.message);
    return { totalSolved: 320, easy: 115, medium: 178, hard: 27, ranking: "Top 12%" };
  }
}

async function main() {
  console.log("Fetching live developer stats...");
  const [github, leetcode] = await Promise.all([
    fetchGitHubStats(),
    fetchLeetCodeStats()
  ]);

  const output = {
    github,
    leetcode,
    updatedAt: new Date().toISOString()
  };

  await fs.writeFile(statsPath, JSON.stringify(output, null, 2), "utf8");
  console.log("Wrote updated stats to", statsPath);
}

main().catch((err) => {
  console.error("fetch-stats failed:", err);
  process.exit(0); // non-zero exit could break build pipelines if offline
});
