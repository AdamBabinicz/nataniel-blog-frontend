import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createCategory } from "../../redux/apiCalls/categoryApiCall";

const AddCategoryForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("Tytuł tematu jest wymagany");

    dispatch(createCategory({ title }));
    setTitle("");
  };

  return (
    <div className="add-category">
      <h6 className="add-category-title">Dodaj nowy temat</h6>
      <form onSubmit={formSubmitHandler}>
        <div className="add-category-form-group">
          <label htmlFor="title">Tytuł tematu</label>
          <input
            type="text"
            id="title"
            placeholder="Wpisz tytuł tematu"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="add-category-btn" type="submit">
          Dodaj
        </button>
      </form>
    </div>
  );
};

export default AddCategoryForm;
