import HomePage from "./HomePage";
import SpicyLevel from "./SpicyLevel";

export default function List({ data, category }) {
  let menu = data.data.filter((item) => item.category.title === category);

  if (category === "Home") {
    return <HomePage />;
  } else {
    return menu.map((Item) => {
      return (
        <div className="col-12 col-md-6 col-xl-4">
          <div className="card text-center">
            <div className="card-header">{category}</div>
            <div className="card-body">
              <h5 className="card-title">{Item.title}</h5>
              <p className="card-text">{Item.description}</p>
              <h5>Spicy Level</h5>
              <p><SpicyLevel data={Item.spicy_level}/></p>
            </div>
            <div className="card-footer text-muted">${Item.price}</div>
          </div>
        </div>
      );
    });
  }
}
