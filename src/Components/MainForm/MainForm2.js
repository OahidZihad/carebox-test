// import React from "react";
// import { useForm } from "react-hook-form";
// import { useState } from "react";

// const MainForm2 = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const initialFormData = Object.freeze({
//     Title: "",
//     Author_Name: "",
//     Phone: "",
//     Email: "",
//     Description: "",
//   });

//   const [formData, setFormData] = useState(initialFormData);
//   console.log("this is formdata", formData);

//   const handleChange = (e) => {
//     if (
//       ([e.target.name] === "Title",
//       "Description",
//       "Email",
//       "Phone",
//       "Author_Name")
//     ) {
//       setFormData({
//         // ...formData,
//         [e.target.name]: e.target.value.trim(),
//       });
//     }
//   };

//   const onSubmit = (data) => {
//     console.log(data);
//     fetch("https://care-box-backend.herokuapp.com/api/v1/applicant_test/", {
//       method: "POST",
//       headers: {
//         "Custom-User-Agent": "gsdf#g3243F466$",
//       },
//       //   headers: {
//       //     "Content-Type": "application/json; charset=UTF-8",
//       //   },
//       //   mode: "no-cors",
//       //   cache: "no-cache",
//       //   credentials: "same-origin",
//       //   headers: {
//       //     Accept: "application/json",
//       //     "Content-Type": "application/json; charset=utf8",
//       //   },
//       body: JSON.stringify({
//         Title: formData.Title,
//         Author_Name: formData.Author_Name,
//         Phone: formData.Phone,
//         Email: formData.Email,
//         Description: formData.Description,
//       }),
//     }).then((result) => {
//       result.json().then((response) => {
//         console.log(response, result);
//       });
//     });
//   };

//   return (
//     <section className="mt-5 d-flex justify-content-center">
//       <div
//         style={{ boxShadow: "3px 3px 5px gray" }}
//         className="card w-75 px-4 pt-5"
//       >
//         <h2 className="text-center">Care-Box Form</h2>
//         <div className="card-body">
//           <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
//             <div class="form-group mb-3">
//               <input
//                 type="text"
//                 placeholder="Title"
//                 className="form-control"
//                 {...register("Title", { required: true })}
//                 onChange={handleChange}
//               />
//               {errors.Title && (
//                 <span className="text-danger">This field is required</span>
//               )}
//             </div>
//             <div class="form-group mb-3">
//               <input
//                 type="text"
//                 placeholder="Author_Name"
//                 className="form-control"
//                 {...register("Author_Name", { required: true })}
//                 onChange={handleChange}
//               />
//               {errors.Author_Name && (
//                 <span className="text-danger">This field is required</span>
//               )}
//             </div>
//             <div class="form-group mb-3">
//               <input
//                 type="text"
//                 placeholder="Phone"
//                 className="form-control"
//                 {...register("Phone", { required: true })}
//                 onChange={handleChange}
//               />
//               {errors.Phone && (
//                 <span className="text-danger">This field is required</span>
//               )}
//             </div>
//             <div class="form-group mb-3">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="form-control"
//                 {...register("Email", { required: true })}
//                 onChange={handleChange}
//               />
//               {errors.Email && (
//                 <span className="text-danger">This field is required</span>
//               )}
//             </div>
//             <div class="form-group">
//               <textarea
//                 type="text"
//                 className="form-control mb-3"
//                 placeholder="Description"
//                 rows="3"
//                 {...register("Description", { required: true })}
//                 onChange={handleChange}
//               ></textarea>
//               {errors.Description && (
//                 <span className="text-danger">This field is required</span>
//               )}
//             </div>

//             <div className="form-group text-center">
//               <button type="submit" className="btn btn-dark">
//                 Send
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MainForm2;
