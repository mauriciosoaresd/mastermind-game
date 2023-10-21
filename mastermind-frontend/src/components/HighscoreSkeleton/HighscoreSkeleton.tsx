export default function HighscoreSkeleton () {
    return <table className="w-full text-md text-left">

          <thead className="uppercase text-pink border-b">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
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
          <tr className="border-b">
              <td
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap">
                <div className="hidden sm:block my-auto bg-pink rounded-lg h-12 w-12"></div>
              </td>

              <td
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap">
                <div className="hidden sm:block m-auto bg-pink rounded-full h-12 w-12"></div>
              </td>

              <td
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap">
                <div className="hidden sm:block m-auto bg-pink rounded-full h-8 w-24"></div>
              </td>

              <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                <div className="hidden sm:block m-auto bg-pink rounded-full h-12 w-12"></div>
              </td>
            </tr>
            <tr className="border-b">
              <td
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap">
                <div className="hidden sm:block my-auto bg-pink rounded-lg h-12 w-12"></div>
              </td>

              <td
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap">
                <div className="hidden sm:block m-auto bg-pink rounded-full h-12 w-12"></div>
              </td>

              <td
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap">
                <div className="hidden sm:block m-auto bg-pink rounded-full h-8 w-24"></div>
              </td>

              <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                <div className="hidden sm:block m-auto bg-pink rounded-full h-12 w-12"></div>
              </td>
            </tr>
            <tr className="border-b">
              <td
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap">
                <div className="hidden sm:block my-auto bg-pink rounded-lg h-12 w-12"></div>
              </td>

              <td
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap">
                <div className="hidden sm:block m-auto bg-pink rounded-full h-12 w-12"></div>
              </td>

              <td
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap">
                <div className="hidden sm:block m-auto bg-pink rounded-full h-8 w-24"></div>
              </td>

              <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                <div className="hidden sm:block m-auto bg-pink rounded-full h-12 w-12"></div>
              </td>
            </tr>
          </tbody>
        </table>
}