import s from "./SearchBox.module.css";
export const SearchBox = ({ handleSearch }) => {
  return (
    <div className={s.box}>
      <p className={s.name}>Find your todo</p>
      <input onChange={handleSearch} type="text" />
    </div>
  );
};
