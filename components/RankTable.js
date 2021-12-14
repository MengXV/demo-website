import React from 'react'

function RankTable() {
    return (
        <>
           
            <table className="content-table ">
                <thead>
                  <tr className="bg-gray-900 border-b-8 text-sm md:text-base lg:text-lg border-gray-800 uppercase tracking-widest ">
                    <th className="">Rank</th>
                    <th className="">Team</th>
                    <th className="">Points</th>
                  </tr>
                </thead>
                <tbody className="tracking-widest text-xs">
                  <tr className="active-row bg-gray-900 border-b border-gray-700 text-white text-lg">
                    <td>1</td>
                    <td>Domenic</td>
                    <td>88,110</td>
                  </tr>
                  <tr className="active-row bg-gray-900 border-b border-gray-700 text-white text-lg">
                    <td>2</td>
                    <td>Sally</td>
                    <td>72,400</td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 text-white text-lg">
                    <td>3</td>
                    <td>Nick</td>
                    <td>52,300</td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 text-white text-lg">
                    <td>4</td>
                    <td>Sentinels</td>
                    <td>22,300</td>
                  </tr>
                </tbody>
              </table>
        </>

    )
}

export default RankTable
