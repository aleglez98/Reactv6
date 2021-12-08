import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';
import SearchParams from './SearchParams';

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-band" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Budy",
//       animal: "Dog",
//       breed: "Pequines",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Cat",
//       breed: "Ratata",
//     }),
//     React.createElement(Pet, {
//       name: "pikachu",
//       animal: "bird",
//       breed: "Loro",
//     }),
//   ]);
// };

const App = () => (
  <div>
    <h1 id="my-band">Adopt Me!</h1>
    <SearchParams></SearchParams>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"));
