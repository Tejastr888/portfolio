export interface StackGroup {
  category: string;
  description: string;
  items: {
    name: string;
    note?: string;
    highlight?: boolean;
  }[];
}

export const stackGroups: StackGroup[] = [
  {
    category: "Languages & Core",
    description: "Strong foundation in typed, object-oriented systems and clean concurrency",
    items: [
      { name: "Java 17/21", note: "Primary: Virtual Threads, Records, Streams", highlight: true },
      { name: "SQL", note: "PostgreSQL dialect, EXPLAIN ANALYZE, Index tuning", highlight: true },
      { name: "Kotlin", note: "Android client apps & coroutines" },
      { name: "TypeScript", note: "React frontends & tooling" },
      { name: "Bash / Shell", note: "Server automation & diagnostics" }
    ]
  },
  {
    category: "Frameworks & Backend Architecture",
    description: "Enterprise microservices, robust API gateways and fault tolerance",
    items: [
      { name: "Spring Boot 3", note: "Microservices, WebFlux, Data JPA, Security", highlight: true },
      { name: "Resilience4j", note: "Circuit Breakers, Bulkheads, Retries, Rate Limiters", highlight: true },
      { name: "Design Patterns", note: "Strategy, Factory, Adapter, Saga, Outbox", highlight: true },
      { name: "Spring Security", note: "OAuth2, JWT claims, stateless RBAC" },
      { name: "Hibernate / JPA", note: "N+1 prevention, entity lifecycle, optimistic locking" },
      { name: "Bucket4j", note: "Token-bucket API rate limiting" }
    ]
  },
  {
    category: "Distributed Systems & Streaming",
    description: "Event-driven architecture, caching topologies and message reliability",
    items: [
      { name: "Apache Kafka", note: "Consumer groups, partition keying, DLQ, outbox delivery", highlight: true },
      { name: "Redis", note: "Distributed locks, atomic Lua scripts, tiered caching", highlight: true },
      { name: "REST API Design", note: "Idempotency keys, OpenAPI/Swagger, RFC 7807 error formats" },
      { name: "Microservices", note: "Service decomposition, independent deployments, zero dual-writes" }
    ]
  },
  {
    category: "Databases & Storage",
    description: "Relational persistence tuning and document stores",
    items: [
      { name: "PostgreSQL", note: "Query optimization, connection pool tuning (HikariCP), B-tree & GIN indices", highlight: true },
      { name: "MongoDB", note: "Polymorphic document models, read-through caching" },
      { name: "AWS S3", note: "Multi-part direct uploads, pre-signed URLs, lifecycle rules" },
      { name: "Microsoft Graph", note: "SharePoint & OneDrive storage integration" }
    ]
  },
  {
    category: "DevOps, Tooling & Cloud",
    description: "Containerization, automated delivery and observability",
    items: [
      { name: "Docker", note: "Multi-stage builds, rootless containers", highlight: true },
      { name: "CI/CD & GitHub Actions", note: "Automated test suites, artifact packaging, GitHub Pages" },
      { name: "Linux / Ubuntu", note: "Systemd, networking, log inspection" },
      { name: "Git", note: "Trunk-based workflow, clean commit hygiene" },
      { name: "Maven & Gradle", note: "Multi-module builds, dependency management" }
    ]
  },
  {
    category: "Active Explorations",
    description: "Current deep dives and engineering curiosities",
    items: [
      { name: "Spring AI", note: "Structured LLM prompting, retrieval augmented generation (RAG)", highlight: true },
      { name: "Model Context Protocol (MCP)", note: "Standardized agent-to-tool client/server interfaces", highlight: true },
      { name: "Competitive Programming", note: "300+ LeetCode solved (Arrays, Graphs, DP)", highlight: true }
    ]
  }
];
