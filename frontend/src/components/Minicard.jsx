export default function Minicard({data}){
    return (
    <div className="flex flex-col ">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <h1 className="font-mono text-2xl m-4 text-white">Top buy Items</h1>
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4 text-white">Rank</th>
                  <th scope="col" className="px-6 py-4 text-white">Name</th>
                  <th scope="col" className="px-6 py-4 text-white">Price</th>
                  <th scope="col" className="px-6 py-4 text-white">Handle</th>
                </tr>
              </thead>
              <tbody>
                {
                 data.sort((a,b)=>b.totalprice-a.totalprice)
                 .slice(0,5)
                 .map((item,idx)=>{
                   return(
                  <tr key={idx}
                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-white">{idx+1}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-white">{item.title}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-white">{item.totalprice}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-white">{item.totalcount}</td>
                </tr>
                   )
                 })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    )
}