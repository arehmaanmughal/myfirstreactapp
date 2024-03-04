import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [form, setForm] = useState({
    name: "Abdul Rehman",
    email: "arehmaanmughal@gmail.com",
    password: null,
    gender: null,
  });
  const [print, setPrint] = useState(false)
  return (
    <div className="w-50 mx-auto">
      <label className="form-label" htmlFor="">
        Name
      </label>
      <input
        className="form-control"
        type="text"
        onChange={(e) => {
          setForm({ ...form, name: e.target.value })
          setPrint(false)
        }}
      />
      <br />
      <label className="form-label" htmlFor="">
        Email
      </label>
      <input
        className="form-control"
        type="email"
        onChange={(e) => {
          setForm({ ...form, email: e.target.value })
          setPrint(false)
        }}
      />
      <br />
      <label className="form-label" htmlFor="">
        Password
      </label>
      <input
        className="form-control"
        type="password"
        onChange={(e) => {
          setForm({ ...form, password: e.target.value })
          setPrint(false)
        }}
      />
      <br />
      <label className="form-label" htmlFor="">
        Gender
      </label>
      <br />
      <input
        type="radio"
        value={"Male"}
        checked={form.gender === "Male"}
        onChange={(e) => {
          setForm({ ...form, gender: e.target.value })
          setPrint(false)
        }}
      />
      <label className="form-label" htmlFor="">
        Male
      </label>
      <input
        type="radio"
        value={"Female"}
        checked={form.gender === "Female"}
        onChange={(e) => {
          setForm({ ...form, gender: e.target.value })
          setPrint(false)
        }}
      />
      <label className="form-label" htmlFor="">
        Female
      </label>
      <input
        type="radio"
        value={"Other"}
        checked={form.gender === "Other"}
        onChange={(e) => {
          setForm({ ...form, gender: e.target.value })
          setPrint(false)
        }}
      />
      <label className="form-label" htmlFor="">
        Other
      </label>
      <button className="btn btn-success form-control" onClick={()=> setPrint(!print)}>{print ? "Hide" : "Show"}</button>

      <p>
        Name : {print ? form.name : null} <br />
        Email : {print ? form.email : null}
        <br />
        Password : {print ? form.password : null}
        <br />
        Gender : {print ? form.gender : null}
      </p>
    </div>
  );
}

export default App;
