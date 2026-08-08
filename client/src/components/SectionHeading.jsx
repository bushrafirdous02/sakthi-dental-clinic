function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}) {
  return (
    <div
      className={`max-w-2xl ${
        centered ? 'mx-auto text-center' : 'text-left'
      }`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-purple-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-gray-600">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading