// const heading = React.createElement("h1",
//     {
//         id: "heading",
//         xyz: "abc"

// },
// "Hello from React");

// console.log(heading); //object


//     const root = ReactDOM.createRoot(document.getElementById("root"));

//     root.render(heading);

const heading = React.createElement("h1",{id : "heading", xyz: "abc"}, "Hello from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);