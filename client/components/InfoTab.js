export default function InfoTab({
  title,
  subtitle,
  icon: Icon,
  bgColor,
  color,
}) {
  return (
    <div className="flex">
      <div
        className="rounded mr-3 flex items-center justify-center"
        style={{ width: 48, height: 48, backgroundColor: bgColor }}
      >
        {Icon && <Icon size={30} color={color} />}
      </div>
      <div>
        <h5 style={{ color }} className="text-base font-medium">
          {title}
        </h5>
        <p style={{ color }} className="text-sm opacity-75">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
