import Title from "./Title";
import Categories from "./Categories";
import Menu from "./Menu";
import data from "./data";
import { useState, useEffect } from "react";

const findCategory = data.map((item) => item.category);

const tempSet = new Set(findCategory);
const tempItems = ["all", ...tempSet];

const App = () => {
  const [menu, setMenu] = useState(data);

  const [categories, setCategories] = useState(tempItems);

  const filteredMenu = (cat) => {
    const filter = data.filter((food) => food.category === cat);

    if (cat === "all") {
      setMenu(data);
    } else {
      setMenu(filter);
    }

    // si cat est === égal au string all alors renvoyer setMenu(data)
  };

  return (
    <main>
      <section className="menu">
        <Title title="Our menu" />
        <Categories categories={categories} filteredMenu={filteredMenu} />
        <Menu menu={menu} />
      </section>
    </main>
  );
};
export default App;
