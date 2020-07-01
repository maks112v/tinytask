const classes = {
  default: {
    primary:
      "bg-gray-600 text-white border-gray-600 hover:bg-muted hover:border-muted",
    secondary:
      "bg-blue-400 text-white border-blue-400 hover:bg-secondary-light hover:border-secondary-light",
    dark:
      "bg-gray-900 text-white border-gray-900 hover:bg-gray-700 hover:border-gray-700",
  },
  outlined: {
    primary:
      "bg-transparent border-gray-600 text-gray-600 font-bold hover:bg-gray-600 hover:text-white",
    secondary:
      "bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white",
  },
};

export default function Button({
  variant = "default", // default, outlined, link
  color = "primary", // primary, secondary
  className,
  children,
  button,
  ...rest
}) {
  if (button) {
    return (
      <button
        className={[
          "border border-4 cursor-pointer block py-2 px-4 rounded duration-200 focus:outline-none",
          classes?.[variant]?.[color],
          ,
          className,
        ].join(" ")}
        {...rest}
      >
        {children}
      </button>
    );
  }
  return (
    <a
      className={[
        "border border-4 cursor-pointer block py-2 px-4 rounded duration-200 flex items-center justify-center",
        classes?.[variant]?.[color],
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </a>
  );
}
