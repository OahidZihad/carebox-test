import React, { useEffect, useState } from "react";
import GetDataDetails from "./GetDataDetails";

const GetData = () => {
  const [getItems, setGetItems] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    getUpdatedInfo();
  }, []);

  const getUpdatedInfo = () => {
    fetch("https://care-box-backend.herokuapp.com/api/v1/applicant_test/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGetItems(data);
        setTitle(data[0].Title);
        setAuthor(data[0].Author_Name);
        setPhone(data[0].Phone);
        setEmail(data[0].Email);
        setDescription(data[0].Description);
        setDate(data[0].Posted_At);
        setUpdateId(data[0].id);
      });
  };

  const selectField = (id) => {
    let item = getItems.filter((item) => item.id === id)[0];
    console.log(item);
    setTitle(item.Title);
    setAuthor(item.Author_Name);
    setPhone(item.Phone);
    setEmail(item.Email);
    setDescription(item.Description);
    setDate(item.Posted_At);
    setUpdateId(item.id);
  };
  const updateInfo = () => {
    console.log(title, author, phone, email, description, date, updateId);
    let item = { title, author, phone, email, description, date, updateId };
    fetch(
      `https://care-box-backend.herokuapp.com/api/v1/applicant_test/update_blog/${updateId}/`,
      {
        method: "PUT",
        headers: {
          "Custom-User-Agent": "gsdf#g3243F466$",
        },
        body: JSON.stringify(item),
      }
    ).then((result) => {
      result.json().then((response) => {
        console.log(response);
        getUpdatedInfo();
      });
    });
  };

  return (
    <section>
      <div className="mt-4" style={{ backgroundColor: "#F4FDFB" }}>
        <table className="table color-brand2 text-dark text-lowercase">
          <thead>
            <tr>
              <th className="text-center text-uppercase" scope="col">
                ID
              </th>
              <th className="text-center text-uppercase" scope="col">
                Title
              </th>
              <th className="text-center text-uppercase" scope="col">
                Author_Name
              </th>

              <th className="text-center text-uppercase" scope="col">
                Phone
              </th>
              <th className="text-center text-uppercase" scope="col">
                Email
              </th>
              <th className="text-center text-uppercase" scope="col">
                Description
              </th>
              <th className="text-center text-uppercase" scope="col">
                Posted_At
              </th>
              <th className="text-center text-uppercase" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {getItems.map((item, index) => (
              <tr>
                <td className="text-center">{item.id}</td>
                <td className="text-center">{item.Title}</td>
                <td className="text-center">{item.Author_Name}</td>
                <td className="text-center">{item.Phone}</td>
                <td className="text-center">{item.Email}</td>
                <td className="text-center">{item.Description}</td>
                <td className="text-center">{item.Posted_At}</td>
                <td>
                  <button
                    className="btn btn-dark text-uppercase"
                    onClick={() => selectField(item.id)}
                  >
                    update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />{" "}
          <br />
          <br />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />{" "}
          <br />
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />{" "}
          <br />
          <br />
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />{" "}
          <br />
          <br />
          <button className="btn btn-dark" onClick={updateInfo}>
            Update Information
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetData;
