export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
  current?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    company: "Soft Suave Technologies",
    role: "Software Engineer — Backend",
    period: "2023 — Present",
    location: "Bengaluru, India",
    current: true,
    summary:
      "Core Java & Spring Boot engineer responsible for designing resilient microservices, high-throughput REST APIs, and event-driven data pipelines for enterprise clients.",
    highlights: [
      "Engineered pluggable file management engine supporting AWS S3 and Microsoft Graph/OneDrive with Strategy and Factory patterns, eliminating code duplication across multi-tenant clients.",
      "Architected integration layer translating Oracle Health Insurance (OHI) data contracts, cutting P95 response times from 1,450ms to 110ms with tiered MongoDB caching and Resilience4j bulkheads.",
      "Tuned PostgreSQL indexing, connection pool topologies (HikariCP), and query execution plans, resolving critical transaction locking bottlenecks.",
      "Implemented Kafka event streams for asynchronous audit logging and notification systems, ensuring zero message loss with outbox persistence."
    ],
    tech: ["Java 17/21", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Resilience4j", "Docker", "AWS S3", "Microservices"]
  },
  {
    company: "Rendered Ideas",
    role: "Software Development Engineer",
    period: "2022 — 2023",
    location: "Bengaluru, India",
    summary:
      "Engineered backend game services, concurrency-safe player session state synchronization, and low-latency REST endpoints handling real-time scoreboards and asset deliveries.",
    highlights: [
      "Developed high-concurrency player profile and leaderboard APIs maintaining sub-50ms latency under simultaneous matchmaking spikes.",
      "Optimized in-memory state caching and memory allocations, mitigating garbage collection pauses on high-traffic server nodes.",
      "Engineered automated asset compression and delta delivery endpoints, reducing mobile game patch download sizes by 35%."
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "Redis", "PostgreSQL", "Multi-threading", "Git"]
  },
  {
    company: "Ascent Staffing Solutions",
    role: "Software Engineer",
    period: "2021 — 2022",
    location: "Bengaluru, India",
    summary:
      "Built internal candidate matching workflows, resume processing pipelines, and data verification services.",
    highlights: [
      "Designed normalized relational schemas and optimized complex candidate search queries across 100k+ applicant records.",
      "Built secure role-based API authentication and automated candidate status transition notifications.",
      "Integrated automated CI/CD build scripts with Docker container packaging, reducing deployment verification times."
    ],
    tech: ["Java", "Spring", "SQL", "RESTful Web Services", "Docker", "CI/CD"]
  }
];
