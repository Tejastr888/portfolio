export interface KeyDecision {
  title: string;
  tradeOff: string;
  rationale: string;
}

export interface Metric {
  label: string;
  value: string;
  detail: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  period: string;
  context: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  problem: string;
  architectureSummary: string;
  patternsUsed: string[];
  decisions: KeyDecision[];
  metrics: Metric[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

export const projects: Project[] = [
  {
    slug: "storage-agnostic-file-api",
    title: "Storage-Agnostic File Management API",
    tagline: "Pluggable multi-cloud object storage engine with Strategy, Factory & Adapter patterns",
    role: "Lead Backend Engineer",
    period: "2024",
    context: "Enterprise Multi-Tenant SaaS Platform",
    tags: ["Java 21", "Spring Boot 3", "AWS S3", "Microsoft Graph / OneDrive", "Redis", "Resilience4j", "Docker"],
    problem:
      "Enterprise clients required storing proprietary documents either in company-managed AWS S3 buckets or client-delegated Microsoft OneDrive/SharePoint tenancies based on regulatory data sovereignty rules. Directly coupling controllers to cloud SDKs produced fragile, branching code and duplicated access token negotiation on every single upload/download request.",
    architectureSummary:
      "Engineered an extensible file abstraction layer using the Strategy and Factory design patterns. A TenantStorageResolver inspects incoming tenant context and metadata headers, queries a local Caffeine/Redis tiered cache to resolve tenant storage configuration, and supplies the corresponding StorageService adapter instance. All provider specifics (chunked multi-part upload, pre-signed URL generation, OAuth2 refresh tokens) are encapsulated behind uniform StorageProvider SPI contracts.",
    patternsUsed: [
      "Strategy Pattern (Interchangeable S3 vs OneDrive upload/stream engines)",
      "Factory Pattern (Dynamic provider resolution by tenant identity & geography)",
      "Adapter Pattern (Normalizing heterogeneous cloud SDK exceptions to standard FileEngine errors)",
      "Two-tier Cache (Local Caffeine L1 + Redis L2 for sub-millisecond tenant provider resolution)"
    ],
    decisions: [
      {
        title: "Pre-signed direct uploads vs. streaming through application memory",
        tradeOff: "Direct client-to-cloud upload bypasses server memory bottlenecks, but loses intermediate malware scanning before receipt.",
        rationale: "Used pre-signed direct upload URLs for payloads > 10MB to maintain low server memory overhead, combined with an asynchronous S3 EventBridge webhook triggering an async antivirus verification job before marking file availability."
      },
      {
        title: "Tiered caching of OAuth2 access tokens for Microsoft Graph API",
        tradeOff: "Cached credentials risk temporary staleness during revocation.",
        rationale: "Short-lived tokens (50m TTL) cached in Redis with a 5-minute pre-expiry refresh thread cut Graph API handshake overhead by 94% across concurrent tenant sync operations."
      },
      {
        title: "Resilience4j circuit breakers on external storage calls",
        tradeOff: "Fail-fast responses return immediate HTTP 503 instead of hanging threads during cloud provider blips.",
        rationale: "Prevents Tomcat worker thread starvation when third-party cloud APIs experience upstream latency degradation."
      }
    ],
    metrics: [
      { label: "P99 Response Time", value: "24ms", detail: "Metadata retrieval & pre-signed URL emission" },
      { label: "Memory Overhead", value: "-68%", detail: "Eliminated server-side buffer bloat via streaming adapters" },
      { label: "Tenant Switch Time", value: "0ms", detail: "Dynamic runtime provider resolution without redeploying" }
    ],
    codeSnippet: {
      filename: "StorageServiceFactory.java",
      language: "java",
      code: `@Component
@RequiredArgsConstructor
public class StorageServiceFactory {

    private final Map<StorageType, StorageProviderAdapter> adapters;
    private final TenantConfigService tenantConfigService;

    public StorageProviderAdapter getProvider(UUID tenantId) {
        StorageType type = tenantConfigService.resolveStorageType(tenantId);
        StorageProviderAdapter adapter = adapters.get(type);
        if (adapter == null) {
            throw new UnsupportedStorageProviderException(
                "No registered adapter for storage type: " + type);
        }
        return adapter;
    }
}`
    }
  },
  {
    slug: "health-insurance-member-portal",
    title: "Health Insurance Member Portal & API Gateway",
    tagline: "High-compliance core integration translating Oracle Health Insurance (OHI) data contracts",
    role: "Backend Engineer",
    period: "2023 - 2024",
    context: "Healthcare Payer Integration at Soft Suave",
    tags: ["Spring Boot", "PostgreSQL", "MongoDB", "JWT / RBAC", "Resilience4j", "Docker", "REST API"],
    problem:
      "Legacy health insurance core systems (OHI) exposed rigid, heavy SOAP/REST endpoints with high latency (1200ms+) and unpredictable throttling during open enrollment periods. Mobile and web member portals required responsive (<200ms) member benefit cards, claim tracking, and policy verification with strict HIPAA-aligned data privacy.",
    architectureSummary:
      "Architected a modern Spring Boot API facade that acts as an orchestration gateway between patient portal clients and core insurance systems. Implemented an asynchronous read-through caching pipeline in MongoDB for high-frequency, slow-changing policy summary records, alongside cryptographically signed stateless JWT claims carrying role-based entitlements. Integrated Resilience4j retry and bulkhead isolators around legacy OHI upstream connectors.",
    patternsUsed: [
      "BFF (Backend-For-Frontend) orchestration pattern",
      "Bulkhead Pattern to isolate downstream legacy thread pools",
      "Read-Through Cache with TTL invalidation on policy event hooks",
      "Stateless JWT RBAC token validation with cryptographic public key rotation"
    ],
    decisions: [
      {
        title: "MongoDB document store for member policy snapshots vs relational cache",
        tradeOff: "Eventual consistency during policy modification windows (up to 2 minutes).",
        rationale: "Member benefit hierarchies and deductible accumulators are nested, polymorphic documents. Storing denormalized member snapshots allowed single-query O(1) reads without expensive 7-table SQL joins."
      },
      {
        title: "Resilience4j Bulkheads with concurrency caps",
        tradeOff: "Excess concurrent requests enter queue or fail fast rather than unbounded growth.",
        rationale: "Restricted concurrent outbound HTTP connections to core OHI to 40 threads, protecting legacy backend servers from collapsing during peak morning enrollment traffic."
      }
    ],
    metrics: [
      { label: "P95 Latency", value: "110ms", detail: "Reduced from 1,450ms direct core query latency" },
      { label: "Core System Load", value: "-75%", detail: "Absorbed by read-through caching & rate limiters" },
      { label: "Uptime During Enrollment", value: "99.98%", detail: "Zero cascade failures across 250k daily active members" }
    ],
    codeSnippet: {
      filename: "PolicyClientResilienceConfig.java",
      language: "java",
      code: `@Configuration
public class PolicyClientResilienceConfig {

    @Bean
    public Bulkhead coreSystemBulkhead(BulkheadRegistry registry) {
        BulkheadConfig config = BulkheadConfig.custom()
            .maxConcurrentCalls(40)
            .maxWaitDuration(Duration.ofMillis(300))
            .build();
        return registry.bulkhead("ohi-core-bulkhead", config);
    }
}`
    }
  },
  {
    slug: "order-inventory-platform",
    title: "Event-Driven Order & Inventory Platform",
    tagline: "Zero-overselling distributed inventory ledger with optimistic concurrency & Kafka outbox",
    role: "Backend Architect & Engineer",
    period: "2023",
    context: "High-Concurrency E-Commerce & Logistics Service",
    tags: ["Java 17", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Resilience4j", "Micrometer"],
    problem:
      "Flash-sale traffic spikes caused database row-lock contention on hot inventory rows, leading to transaction timeouts, connection pool exhaustion, and intermittent negative inventory balances (overselling). Additionally, dual-write vulnerabilities between database commits and message broker sends caused orphaned orders when Kafka brokers experienced network partitions.",
    architectureSummary:
      "Designed an asynchronous order processing pipeline combining a high-performance Redis Lua script reservation layer with a PostgreSQL persistent ledger backed by optimistic concurrency control (@Version). Utilized the Transactional Outbox Pattern with a CDC de-coupling worker to guarantee at-least-once Kafka event delivery for downstream fulfillment, invoice generation, and notification microservices. Consumers implement Redis idempotency keys to safely guarantee exactly-once processing semantics.",
    patternsUsed: [
      "Transactional Outbox Pattern (Eliminates dual-write anomalies between SQL & Kafka)",
      "Distributed Reservation with atomic Redis Lua script checks",
      "Optimistic Locking on relational ledger entries to prevent deadlocks",
      "Dead Letter Queue (DLQ) with exponential backoff retry policies"
    ],
    decisions: [
      {
        title: "Redis atomic Lua reservation vs SQL pessimistic SELECT ... FOR UPDATE",
        tradeOff: "Requires reconciling Redis in-memory reservation state with persistent PostgreSQL balance.",
        rationale: "Pessimistic DB row locking serialized all concurrent buyers and queued thousands of connections. Redis Lua script decrements execute in sub-millisecond atomic memory operations, shifting DB transactions to asynchronous batched persistence."
      },
      {
        title: "Idempotent consumer deduplication via Redis hash table",
        tradeOff: "Adds a fast 1ms Redis lookup per inbound Kafka message.",
        rationale: "Ensured order events could be replayed without creating duplicate charges or secondary shipping manifests during broker rebalances."
      }
    ],
    metrics: [
      { label: "Peak Throughput", value: "4,200 req/s", detail: "Sustained inventory reservation without locks" },
      { label: "Oversell Rate", value: "0.00%", detail: "Guaranteed atomic reservations across all SKUs" },
      { label: "Event Delivery SLA", value: "99.999%", detail: "Outbox pattern eliminated all dual-write message losses" }
    ],
    codeSnippet: {
      filename: "InventoryReservationService.java",
      language: "java",
      code: `@Service
@RequiredArgsConstructor
public class InventoryReservationService {

    private final StringRedisTemplate redisTemplate;
    private final DefaultRedisScript<Long> reservationScript;

    public boolean reserveStock(String sku, int quantity, String reservationId) {
        Long result = redisTemplate.execute(
            reservationScript,
            List.of("stock:" + sku, "reservations:" + sku),
            String.valueOf(quantity),
            reservationId,
            String.valueOf(System.currentTimeMillis())
        );
        return result != null && result == 1L;
    }
}`
    }
  },
  {
    slug: "sports-booking-microservices",
    title: "Sports Club & Court Booking Microservices",
    tagline: "Microservices ecosystem with JWT security, token-bucket rate limiting & event-driven booking",
    role: "Full Lifecycle Engineer",
    period: "2024 - 2025",
    context: "Personal & Production Open-Source Showcase",
    tags: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "Kotlin / Android", "React"],
    githubUrl: "https://github.com/Tejastr888/club-service",
    liveUrl: "https://frontend-git-main-tejastr888s-projects.vercel.app",
    problem:
      "Recreational sports facilities struggled with chaotic double-booking of badminton and turf courts across online booking portals and front-desk walk-ins. Mobile apps and web dashboards required a synchronized backend system capable of managing multi-court schedules, role-based member privileges, instant booking confirmations, and automated slot releases upon payment timeouts.",
    architectureSummary:
      "Constructed a multi-service architecture comprising club-service (managing clubs, facilities, courts, and slot scheduling) and auth-service (handling OAuth2/JWT issuance, user credentials, and RBAC authorization). Implemented an API gateway with token-bucket rate limiting to thwart automated slot scrapers. Scheduled reservation timeouts release unconfirmed slots via Kafka delay events. Paired with a native Kotlin Android application and a TypeScript React management portal.",
    patternsUsed: [
      "API Gateway Pattern with unified JWT signature verification",
      "Token Bucket Rate Limiting (Bucket4j) per client IP and user identity",
      "Saga / Compensating Transactions for unpaid booking expiry",
      "Event-Driven notifications dispatched over Kafka topic partitions"
    ],
    decisions: [
      {
        title: "Separate auth-service from domain club-service",
        tradeOff: "Cross-service network hop for token verification or public key distribution.",
        rationale: "Decoupling authentication allowed domain microservices to scale independently based on high-traffic weekend court search surges without impacting identity pipelines."
      },
      {
        title: "Expirable temporary slot holds with Kafka scheduled timeout events",
        tradeOff: "Requires managing intermediate 'HOLD' state vs instant charge.",
        rationale: "Gives players a 5-minute checkout grace period while preventing courts from remaining blocked indefinitely if payment is abandoned."
      }
    ],
    metrics: [
      { label: "Booking Conflict Rate", value: "0%", detail: "Enforced via composite database unique slot constraints" },
      { label: "Rate Limiting Defense", value: "100%", detail: "Thwarted bot scraping during weekend prime slot openings" },
      { label: "Client Platforms", value: "Web + Android", detail: "Seamless cross-platform member & manager workflows" }
    ],
    codeSnippet: {
      filename: "BookingSlotService.java",
      language: "java",
      code: `@Transactional
public BookingConfirmation holdSlot(UUID courtId, Instant startTime, Instant endTime, UUID userId) {
    boolean isAvailable = slotRepository.lockSlotForUpdate(courtId, startTime, endTime);
    if (!isAvailable) {
        throw new SlotUnavailableException("Selected court slot is already reserved.");
    }
    Booking booking = bookingRepository.save(new Booking(courtId, userId, startTime, endTime, BookingStatus.HELD));
    kafkaTemplate.send("booking-events", new SlotHeldEvent(booking.getId(), courtId, booking.getCreatedAt()));
    return new BookingConfirmation(booking.getId(), booking.getExpiresAt());
}`
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
