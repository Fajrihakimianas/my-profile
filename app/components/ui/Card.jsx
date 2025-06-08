"use client";

export default function Card({
  children,
  className = "",
  hover = true,
  gradient = false,
  ...props
}) {
  const baseStyles =
    "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden";
  const hoverStyles = hover
    ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    : "";
  const gradientStyles = gradient
    ? "bg-gradient-to-br from-white to-gray-50"
    : "";

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
