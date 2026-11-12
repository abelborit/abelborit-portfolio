import styles from "./Constellation.module.css";

/* nodos de la constelación: el stack frontend, con React en el centro */
const NODES = [
  { id: "react", x: 260, y: 220, label: "React" },
  { id: "ts", x: 130, y: 120, label: "TypeScript" },
  { id: "js", x: 70, y: 250, label: "JavaScript" },
  { id: "html", x: 140, y: 370, label: "HTML" },
  { id: "css", x: 290, y: 390, label: "CSS" },
  { id: "mfe", x: 420, y: 300, label: "Microfrontends" },
  { id: "zustand", x: 430, y: 140, label: "Zustand" },
  { id: "query", x: 310, y: 70, label: "TanStack Query" },
  { id: "a11y", x: 150, y: 30, label: "Accesibilidad" },
  { id: "perf", x: 450, y: 410, label: "Performance" },
  { id: "seo", x: 200, y: 300, label: "SEO" },
] as const;

type NodeId = (typeof NODES)[number]["id"];

const EDGES: [NodeId, NodeId][] = [
  ["react", "ts"], ["react", "zustand"], ["react", "mfe"], ["react", "css"],
  ["react", "seo"], ["ts", "js"], ["ts", "query"], ["js", "html"],
  ["html", "css"], ["css", "perf"], ["mfe", "perf"], ["mfe", "zustand"],
  ["zustand", "query"], ["query", "a11y"], ["a11y", "ts"], ["seo", "html"],
];

/* estrellas de fondo: [x, y, radio, retraso de la animación] */
const DUST: [number, number, number, number][] = [
  [40, 60, 1.2, 0], [110, 20, 1.4, 1.1], [210, 110, 1, 2.3], [360, 30, 1.5, 0.6],
  [480, 70, 1.1, 1.8], [500, 200, 1.3, 2.9], [25, 160, 1, 3.2], [180, 180, 1.4, 0.9],
  [350, 200, 1.1, 1.5], [470, 260, 1, 2.6], [30, 330, 1.5, 0.3], [100, 440, 1.2, 1.9],
  [220, 440, 1, 3.4], [380, 440, 1.4, 1.2], [500, 360, 1.1, 2.1], [330, 300, 1, 0.4],
  [200, 250, 1.2, 2.7], [60, 400, 1, 1.4], [420, 210, 1.3, 3], [270, 140, 1, 0.8],
  [150, 300, 1.1, 2.2], [390, 380, 1, 1.7], [250, 20, 1.3, 2.5], [10, 240, 1.2, 0.2],
];

const position = Object.fromEntries(NODES.map((node) => [node.id, node])) as Record<
  NodeId,
  (typeof NODES)[number]
>;

const LABEL =
  "Constelación con las tecnologías de mi stack frontend: " +
  NODES.map((node) => node.label).join(", ");

/* ilustración decorativa de la portada (reemplaza a la foto). Sin JavaScript: todo se anima con CSS */
export const Constellation = ({ className = "" }: { className?: string }) => (
  <div className={`${styles.wrapper} ${className}`}>
    <svg viewBox="0 0 520 460" role="img" aria-label={LABEL} className={styles.svg}>
      <g className={styles.float}>
        {DUST.map(([x, y, r, delay]) => (
          <circle key={`${x}-${y}`} className={styles.dust} cx={x} cy={y} r={r} style={{ animationDelay: `${delay}s` }} />
        ))}

        {EDGES.map(([from, to], i) => (
          <line
            key={`${from}-${to}`}
            className={styles.line}
            x1={position[from].x}
            y1={position[from].y}
            x2={position[to].x}
            y2={position[to].y}
            style={{ animationDelay: `${0.25 + i * 0.08}s` }}
          />
        ))}

        <circle className={styles.glow} cx={260} cy={220} r={16} />

        {NODES.map((node, i) =>
          node.id === "react" ? (
            <g key={node.id} className={styles.node}>
              <circle className={styles.core} cx={node.x} cy={node.y} r={7} />
              <text className={styles.label} x={node.x} y={node.y - 18}>
                {node.label}
              </text>
            </g>
          ) : (
            <g key={node.id} className={styles.node}>
              <circle
                className={styles.star}
                cx={node.x}
                cy={node.y}
                r={4}
                style={{ animationDelay: `${((i * 0.37) % 3).toFixed(2)}s` }}
              />
              <text className={styles.label} x={node.x} y={node.y - 13}>
                {node.label}
              </text>
            </g>
          ),
        )}
      </g>
    </svg>
  </div>
);
