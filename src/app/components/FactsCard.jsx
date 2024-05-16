export default function FactsCard({ title, data }) {
  return (
    <div className="flex w-full flex-row items-center justify-between gap-2 border border-solid border-light-gray px-6 py-6 md:flex-col md:items-start md:px-4">
      <div className="font-spartan text-sm tracking-widest text-light-gray">
        {title}
      </div>
      <div className="text-3xl lg:text-5xl">{data}</div>
    </div>
  );
}
