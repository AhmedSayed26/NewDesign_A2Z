import Link from "next/link";

const SIZES = {
  md: "px-4 py-2 text-xs sm:text-sm",
  lg: "px-6 py-3.5 text-sm sm:text-base",
};

// `fill` is the panel that sweeps in on hover; `text` is the label colour once it has.
const VARIANTS = {
  outline: {
    base: "border border-(--black-color) text-(--black-color)",
    fill: "bg-(--black-color)",
    hover: "hover:text-(--white-color) focus-visible:text-(--white-color)",
  },
  solid: {
    base: "border border-(--black-color) bg-(--black-color) text-(--white-color)",
    fill: "bg-(--main-color)",
    hover: "hover:border-(--main-color) focus-visible:border-(--main-color)",
  },
  // For dark surfaces (hero, etc.)
  inverse: {
    base: "border border-(--white-color) bg-(--white-color) text-(--black-color)",
    fill: "bg-(--main-color)",
    hover: "hover:border-(--main-color) hover:text-(--white-color) focus-visible:border-(--main-color) focus-visible:text-(--white-color)",
  },
  ghost: {
    base: "border border-(--white-color) text-(--white-color)",
    fill: "bg-(--white-color)",
    hover: "hover:text-(--black-color) focus-visible:text-(--black-color)",
  },
};

const EXTERNAL = /^(https?:)?\/\/|^(mailto|tel):/;

function ArrowIcon({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="relative z-10 shrink-0 transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5 rtl:group-focus-visible:-translate-x-0.5"
    >
      {/* Material "arrow outward" glyph */}
      <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z" />
    </svg>
  );
}

/**
 * Square, outlined button/link with a left-to-right fill sweep on hover.
 *
 * Renders a next/link for internal paths, a plain <a> for external URLs
 * (opened in a new tab), and a <button> when there is no `href`.
 * Display is always `inline-flex`; to hide it at some breakpoints wrap it in
 * an element instead of passing `hidden` (utility order would make that unreliable).
 */
export default function Button({
  href,
  children,
  variant = "outline",
  size = "md",
  arrow = true,
  type = "button",
  className = "",
  ...props
}) {
  const v = VARIANTS[variant] ?? VARIANTS.outline;
  const classes = [
    "group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden font-medium transition-colors duration-500 ease-out",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--main-color)",
    SIZES[size] ?? SIZES.md,
    v.base,
    v.hover,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 rtl:origin-right ${v.fill}`}
      />
      <span className="relative z-10">{children}</span>
      {arrow && <ArrowIcon size={size === "lg" ? 18 : 15} />}
    </>
  );

  if (!href) {
    return (
      <button type={type} className={classes} {...props}>
        {content}
      </button>
    );
  }

  if (EXTERNAL.test(href)) {
    const newTab = /^(https?:)?\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
