// Decorative editor window for the hero. Each line is a list of [className, text] tokens.
type Token = [string, string];

const lines: Token[][] = [
  [["kw", "const "], ["var", "trishal"], ["pun", " = {"]],
  [["key", "  role"], ["pun", ": "], ["str", '"Software Engineer"'], ["pun", ","]],
  [["key", "  based"], ["pun", ": "], ["str", '"San Francisco, CA"'], ["pun", ","]],
  [["key", "  stack"], ["pun", ": ["], ["str", '"TypeScript"'], ["pun", ", "], ["str", '"Python"'], ["pun", ", "], ["str", '"React"'], ["pun", ","]],
  [["str", '          "Redis"'], ["pun", ", "], ["str", '"AWS"'], ["pun", ", "], ["str", '"K8s"'], ["pun", "],"]],
  [["key", "  focus"], ["pun", ": ["], ["str", '"backend"'], ["pun", ", "], ["str", '"cloud"'], ["pun", ", "], ["str", '"AI agents"'], ["pun", "],"]],
  [["key", "  ships"], ["pun", ": "], ["str", '"idempotent, secure systems"'], ["pun", ","]],
  [["key", "  openToWork"], ["pun", ": "], ["kw", "true"], ["pun", ","]],
  [["pun", "};"]],
];

export default function CodeCard() {
  return (
    <div className="code-card" aria-hidden="true">
      <div className="code-card__bar">
        <span className="dot dot--r" />
        <span className="dot dot--y" />
        <span className="dot dot--g" />
        <span className="code-card__file">trishal.ts</span>
      </div>
      <pre className="code-card__body">
        {lines.map((tokens, i) => (
          <div key={i} className="code-line">
            <span className="ln">{i + 1}</span>
            {tokens.map(([cls, text], j) => (
              <span key={j} className={`tok-${cls}`}>{text}</span>
            ))}
          </div>
        ))}
        <div className="code-line">
          <span className="ln">{lines.length + 1}</span>
          <span className="code-caret" />
        </div>
      </pre>
    </div>
  );
}
