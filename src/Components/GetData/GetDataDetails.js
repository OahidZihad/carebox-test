// import React from "react";

// const GetDataDetails = ({ getItem }) => {
//   return (
//     <section>
//       <div className="col-md-12">
//         <div className="row mt-4 ms-2"></div>
//         <div className="d-flex justify-content-center mt-4">
//           <div className="" style={{ backgroundColor: "#F4FDFB" }}>
//             <table className="table color-brand2 text-dark text-lowercase">
//               <thead>
//                 <tr>
//                   <th className="text-center text-uppercase" scope="col">
//                     Sr No
//                   </th>
//                   <th className="text-center text-uppercase" scope="col">
//                     Title
//                   </th>
//                   <th className="text-center text-uppercase" scope="col">
//                     Author_Name
//                   </th>

//                   <th className="text-center text-uppercase" scope="col">
//                     Phone
//                   </th>
//                   <th className="text-center text-uppercase" scope="col">
//                     Email
//                   </th>
//                   <th className="text-center text-uppercase" scope="col">
//                     Description
//                   </th>
//                   <th className="text-center text-uppercase" scope="col">
//                     Posted_At
//                   </th>
//                   <th className="text-center text-uppercase" scope="col">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {getItem.map((item, index) => (
//                   <tr>
//                     <td className="text-center">{index + 1}</td>
//                     <td className="text-center">{item.Title}</td>
//                     <td className="text-center">{item.Author_Name}</td>
//                     <td className="text-center">{item.Phone}</td>
//                     <td className="text-center">{item.Email}</td>
//                     <td className="text-center">{item.Description}</td>
//                     <td className="text-center">{item.Posted_At}</td>
//                     <td
//                       className="text-center text-uppercase"
//                       onClick={handleUpdate()}
//                     >
//                       update
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GetDataDetails;
