import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  external = false,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-sm";

  const variants = {
    primary:
      "bg-accent text-dark hover:bg-accent-hover active:bg-accent-dark",
    secondary:
      "border border-text/20 text-text hover:border-accent hover:text-accent",
    outline:
      "border border-accent text-accent hover:bg-accent hover:text-dark",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-sm",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
