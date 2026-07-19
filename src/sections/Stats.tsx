import StatusCard from "@/components/StatusCard";

export default function Stats() {
  const stats = [
    {
      heading: "100+",
      subHeading: "Customers Served",
    },
    {
      heading: "600+",
      subHeading: "Wallboards Sold",
    },
    {
      heading: "99%",
      subHeading: "Customer Satisfaction",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-24">
      {stats.map((stat, index) => (
        <StatusCard key={index} heading={stat.heading} subHeading={stat.subHeading} />
      ))}
    </div>
  );
}
