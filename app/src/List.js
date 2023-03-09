import HomePage from "./HomePage";
import SpicyLevel from "./SpicyLevel";

export default function List({ data, category }) {
  
  const data2 = require('./restaurant.json')
  console.log(data2)
  
  let menu = data2.filter((item) => item.category === category);

  if (category === "Home") {
    return (
      <div className="container-fluid">
        <HomePage />;
      </div>
    )
  } else {
    return menu.map((Item) => {
      return (
        <div id="Card" className="col-12 col-md-6 col-xl-4">
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
