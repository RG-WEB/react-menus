const Categories = ({ categories, filteredMenu }) => {
  return (
    <div className="btn-container">
      {categories.map((item) => (
        <button key={item} className="btn" onClick={() => filteredMenu(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
