type Props = {
    searchParams: SearchParams;
}

type SearchParams = {
    url: URL;
    group_adults: string;
    group_children: string;
    no_rooms: string;
    checkin: string;
    checkout: string;
};


function SearchPage({ searchParams }: Props) {
    console.log(searchParams);
  return (
    <div>page</div>
  )
}

export default SearchPage;