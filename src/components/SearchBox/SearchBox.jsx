import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.name);

  return (
    <div className={css.form}>
      <label htmlFor="search" className={css.label}>
        Find contacts by name
      </label>

      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={css.field}
      />
    </div>
  );
}
