import "./LoanAppForm.css";
import { useState } from "react";
import Modal from "./Modal";
export default function LoanAppForm() {
  const [errorMasege, setErrorMasege] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState({
    fullName: "",
    phoneNumber: "",
    age: "",
    isEployee: "",
    selectNumber: "",
  });

  const isDisabled =
    response.fullName === "" ||
    response.phoneNumber === "" ||
    response.age === "";

  function handelClickBttn(e) {
    e.preventDefault();
    setShowModal(true);
    setErrorMasege(null);
    const { age, phoneNumber } = response;
    if (age < 18 || age > 100) {
      setErrorMasege("Age Is Not Allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMasege("The Phone Number is Incorect");
    }
  }
  return (
    <div
      onClick={() => {
        if (showModal) {
          setShowModal(false);
        }
      }}
      class="form-container"
    >
      <p>
        This Application For Take A Loan On The Bancaire <br />{" "}
        <span>Completed The Form</span>
      </p>
      <form>
        <label>Full Name:</label>
        <input
          value={response.fullName}
          type="text"
          onChange={(event) => {
            setResponse({ ...response, fullName: event.target.value });
          }}
          id="fullname"
        />
        <label>Phone Number:</label>
        <input
          value={response.phoneNumber}
          type="number"
          onChange={(event) => {
            setResponse({ ...response, phoneNumber: event.target.value });
          }}
          id="phone-number"
        />
        <label>Age:</label>
        <input
          value={response.age}
          type="number"
          onChange={(event) => {
            setResponse({ ...response, age: event.target.value });
          }}
          id="age"
        />
        <label>Are You Employee ?</label>
        <input
          checked={response.isEployee}
          type="checkbox"
          onChange={(event) => {
            setResponse({ ...response, isEployee: event.target.checked });
          }}
          id="checkbox"
        />
        <label>Select Number:</label>
        <select
          value={response.selectNumber}
          onChange={(event) => {
            setResponse({ ...response, selectNumber: event.target.value });
          }}
        >
          <option>Less Than 1000</option>
          <option>More Than 1000</option>
          <option>Less Than 10000</option>
          <option>More Than 10000</option>
        </select>

        <div id="bttn">
          <button
            disabled={isDisabled}
            className={isDisabled ? "disabled" : ""}
            onClick={handelClickBttn}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      <Modal isVisibile={showModal} erroeMasage={errorMasege} />
    </div>
  );
}
