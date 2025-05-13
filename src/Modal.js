export default function Modal({ isVisibile, erroeMasage = null }) {
  if (isVisibile) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1 style={{ color: erroeMasage ? "red" : "green" }}>
            {erroeMasage != null
              ? erroeMasage
              : "The Form Has Been Submited Succesfuly"}
          </h1>
        </div>
      </div>
    );
  } else {
    return "";
  }
}
