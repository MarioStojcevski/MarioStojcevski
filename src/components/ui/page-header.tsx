interface PageHeaderProps {
  title: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const PageHeader = ({
  title,
  description,
  titleClassName = "text-6xl lg:text-7xl font-bold text-chart-5 mb-8",
  descriptionClassName = "text-xl text-gray-700 mb-8",
}: PageHeaderProps) => {
  return (
    <div>
      <h1 className={titleClassName}>{title}</h1>
      {description && <p className={descriptionClassName}>{description}</p>}
    </div>
  );
};
