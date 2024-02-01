import { fetchResults } from "@/lib/fetchResults";
import Link from "next/link";
import { notFound } from "next/navigation";


type Props = {
    searchParams: SearchParams;
}

export type SearchParams = {
    url: URL;
    group_adults: string;
    group_children: string;
    no_rooms: string;
    checkin: string;
    checkout: string;
};


async function SearchPage({ searchParams }: Props) {
    if(!searchParams.url) return notFound();

    const results = await fetchResults(searchParams);

    // if(!results) return <div>No results...</div>;

    console.log(results);


  return (
    <section>
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <h1 className="text-4xl font-bold pb-3">Your Trip Results</h1>

        <h2 className="pb-3">
          Dates of Trip:
          <span className="italic ml-2">
            {searchParams.checkin} to {searchParams.checkout}
          </span>
        </h2>

        <hr className="mb-5" />

        <h3 className="font-semibold text-xl">
          Dubai: 1689 properties found
        </h3>

        <div className="space-y-2 ml-5">
          {/* {results?.content.listings.map((item, i) => ( */}
            <div  className="flex space-y-2 justify-between
             space-x-4 p-5 border rounded-lg">
              <img src="https://links.papareact.com/xqj"
              alt="image of property"
              className="h-44 w-44 rounded-lg" />

              <div className="flex flex-1 space-x-5 justify-between">
                <Link href="" className="font-bold text-blue-500
                hover:text-blue-600 hover:underline">
                  Burrows
                </Link>
                <p className="text-xs">item.description</p>
              </div>

              <div className="flex flex-col justify-between">
                <div className="flex items-start justify-end space-x-2 text-right">
                  <div>
                    <p className="font-bold">item.rating_word</p>
                    <p className="text-xs">item.rating_count</p>
                  </div>

                  <p className="flex items-center justify-center font-bold text-sm w-10 h-10 text-white bg-blue-900 rounded-lg flex-shrink-0">
                    item.rating || "NA"
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs">item.booking_metadata</p>
                  <p className="text-2xl font-bold">item.price</p>

                </div>
              </div>
            </div>
          {/* ))} */}
        </div>
      </div>


      </section>
  )
}

export default SearchPage;