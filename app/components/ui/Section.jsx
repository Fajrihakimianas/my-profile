"use client";

export default function Section({
  children,
  id,
  title,
  subtitle,
  className = "",
  background = "white",
}) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-blue-50 via-white to-indigo-50",
  };

  return (
    <section
      id={id}
      className={`py-20 ${backgrounds[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
