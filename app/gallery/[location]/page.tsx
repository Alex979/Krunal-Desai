

export default function Gallery({ params }: { params: { location: string } }) {
  return (
    <main>
      <div className="container mx-auto px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-32 text-center text-slate-800">
        <h1 className="text-5xl">{params.location}</h1>
      </div>
    </main>
  );
}
