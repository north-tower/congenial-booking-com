import Image from "next/image";

export default function Home() {
  return (
    <main 
    className="bg-[#013B94]">
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-5xl text-white">Find your Next Stay</h2>
        <h3 className="text-white py-5 text-xl">Search low prices on hotels, homes and much more...</h3>
     
      </section>

    <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
      <div className="pt-5">
        <h3 className="text-xl font-bold">Trending Destinations</h3>
        <p className="font-light">
          Most popular choices for travellers from around the world
        </p>
      </div>
    </section>

     
    </main>
  );
}
