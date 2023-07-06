/* eslint-disable react/prop-types */
import MenuItem from "./MenuItem";

const Menu = ({ menu }) => {
  return (
    <>
      <div className="section-center">
        {menu.map((food) => (
          <MenuItem food={food} key={food.id} />
        ))}
      </div>
    </>
  );
};

export default Menu;
