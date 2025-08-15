// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Holdings() {
//   const [allHoldings, setAllHoldings] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3002/allHoldings").then((res) => {
//       setAllHoldings(res.data);
//     });
//   }, []);

//   return (
//     <div className="holdings-container p-5">
//       <h3 className="title">Holdings ({allHoldings.length})</h3>

//       <table className="table mt-4">
//         <thead>
//           <tr>
//             <th>Instrument</th>
//             <th>Qty.</th>
//             <th>Avg. cost</th>
//             <th>LTP</th>
//             <th>Cur. val</th>
//             <th>P&L</th>
//             <th>Net chg.</th>
//             <th>Day chg.</th>
//           </tr>
//         </thead>
//         <tbody>
//           {allHoldings.map((stock, index) => {
//             const currValue = stock.price * stock.qty;
//             const isProfit = stock.net.includes("+");

//             return (
//               <tr key={index}>
//                 <td>{stock.name}</td>
//                 <td>{stock.qty}</td>
//                 <td>{stock.avg.toFixed(2)}</td>
//                 <td>{stock.price.toFixed(2)}</td>
//                 <td>{currValue.toFixed(2)}</td>
//                 <td className={isProfit ? "text-success" : "text-danger"}>
//                   {(currValue - stock.avg * stock.qty).toFixed(2)}
//                 </td>
//                 <td className={isProfit ? "text-success" : "text-danger"}>{stock.net}</td>
//                 <td className={isProfit ? "text-success" : "text-danger"}>{stock.day}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Holdings;