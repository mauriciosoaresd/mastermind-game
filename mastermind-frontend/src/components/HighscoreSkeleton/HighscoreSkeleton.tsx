export default function HighscoreSkeleton() {
  const tRow = (key: number) =>  (
    <tr key={key} className="border-b">
      <td
        scope="row"
        className="hidden sm:block py-4 font-medium whitespace-nowrap"
      >
        <div className="block my-auto bg-pink rounded-lg h-12 w-12"></div>
      </td>

      <td scope="row" className="py-4 font-medium whitespace-nowrap">
        <div className="block m-auto bg-pink rounded-full h-12 w-12"></div>
      </td>

      <td scope="row" className="py-4 font-medium whitespace-nowrap">
        <div className="block m-auto bg-pink rounded-full h-8 w-32"></div>
      </td>

      <td scope="row" className="py-4 font-medium whitespace-nowrap">
        <div className="block m-auto bg-pink rounded-full h-12 w-12"></div>
      </td>
    </tr>
  );

  return (
    <table className="w-full text-md text-left">
      <thead className="uppercase text-pink border-b">
        <tr>
          <th scope="col" className="hidden sm:block px-6 py-3"></th>
          <th scope="col" className="px-6 py-3">
            User
          </th>
          <th scope="col" className="px-6 py-3"></th>
          <th scope="col" className="px-6 py-3">
            Score
          </th>
        </tr>
      </thead>
      <tbody className="text-sm animate-pulse">
        {
          Array(5).fill(null).map((n ,idx) => tRow(idx))
        }
      </tbody>
    </table>
  );
}
