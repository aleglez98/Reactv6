const Pet = (props) => {
    return React.createElement("div",{}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h3", {}, props.breed),
    ]

    )
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1",{},"Adopt Me!"),
            React.createElement(Pet, { name: "Budy", animal: "Dog", breed: "Pequines"}),
            React.createElement(Pet, { name: "Pepper", animal: "Cat", breed: "Ratata"}),
            React.createElement(Pet, { name: "pikachu", animal:"bird", breed: "Loro"}),
        ]
        
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));