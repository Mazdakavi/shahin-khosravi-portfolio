type Fact = {
  label: string;
  value: string;
};

type Props = {
  facts: Fact[];
};

export default function FactsBar({ facts }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="bg-dark-card border border-dark-border/40 rounded-sm px-4 py-2"
        >
          <span className="text-text-muted text-[10px] uppercase tracking-widest block">
            {fact.label}
          </span>
          <span className="text-text text-sm mt-0.5 block">{fact.value}</span>
        </div>
      ))}
    </div>
  );
}
