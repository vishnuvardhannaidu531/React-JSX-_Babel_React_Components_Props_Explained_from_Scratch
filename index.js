// const element=React.createElement("h1",{className:"e1",id:"i1"},"I am vishnu vardhan")
// //Main container to render the react element
// const root=ReactDOM.createRoot(document.querySelector(".c1"));
// root.render(element);
// const element=<h1 id="title">Hello</h1>
//Something should be there top convert html tag into js 
//Because we cant right evcery time that React.createElment that stuff all those things 
//So if we are abloe to us html tag instead of js code then our problem will  be resolved 
//Now  the quetion is node.js can understand only js 
//But we want to write code in html.so that means the html  code should be converted into js because browser and nodejs can understand only js 


//Now the question is how will convert this html code into js  code
//For this purpose only the bable coame into view
//So bable convert the html code into js 

// const element=<h1 id="title">Hello</h1>
// const root=ReactDOM.createRoot(document.querySelector(".c1"))
// root.render(element);

//Below code s give  us  the error
// const element=(<h1 id="title">Hello</h1>
// <h1 id="title">Hello</h1>
// <h1 id="title">Hello</h1>)
// const root=ReactDOM.createRoot(document.querySelector(".c1"))
// root.render(element);

//React Element
// const element=(<div>
//         <h1 id="title">Hello</h1>
//         <h1 id="title">Hello</h1>
//         <h1 id="title">Hello</h1>
//     </div>)
// const root=ReactDOM.createRoot(document.querySelector(".c1"))
// root.render(element);

//React Component---->it just an function that's it
// function App(){
//     return (
//         <div>
//             <h1 id="title">Hello</h1>
//             <h1 id="title">Hello</h1>
//             <h1 id="title">Hello</h1>
//         </div>
//     )
// }
// //The function should has to start with an capital letter only
// const root=ReactDOM.createRoot(document.querySelector(".c1"))
// // root.render(App());
// root.render(<App/>);
// const a=<h1>Hello {[10,20,30]}</h1>
// const root=ReactDOM.createRoot(document.querySelector(".c1"))
// root.render(a);

//Now lets check whart are the tyhings  that we can  write in {} this one
//Lets see 

//{}-->works fine for numbers ,string that it
//{}-->true,false,null,undefined (rendering of ui will done but can't display anything)//Because these are logical operators so these will render the ui and  didn't display anything
//{}--->Object :(that gives error because the js will get confused  and produces the error)
// const a=<h1>Hello {{name:"vishnu",age:19}}</h1>
// const root=ReactDOM.createRoot(document.querySelector(".c1"))
// root.render(a);

// const a=<h1>Hello {<h1>Hello</h1>}</h1>
// const root=ReactDOM.createRoot(document.querySelector(".c1"))
// root.render(a);

// const courses=["HTML","CSS","JS","React"]
// const element=(
//     <ul>
//         {courses.map(courses=><li>{courses}</li>)}
//     </ul>
// )
// const root=ReactDOM.createRoot(document.querySelector(".c1"))
// root.render(element);

// function App(props){
//     return (
//         <h1>
//             Hello World
//         </h1>
//     )
// }
// //Here below age=19-->this is an javascript code so we have to write inside of it{} 
// //How this variable are passing 
// //the varable will strore in the object form as 
// // {
// //     name:"vishnu",
// //     age:19
// // }
// //In the above manner the values will passes and that object will be taken by the props thats it
// const element=<App name="vishnu" age={19}/>

// const abs = {
//   "background-color": "black",
//   color: "blue"
// };

// function App(props){
//     return (
//         <h1 style={props.style}>I am Vishnu vardhan naidu</h1>
//     )
// }
// const element=<App name="Vishnu" age={19} style={abs}/>
// const root=ReactDOM.createRoot(document.querySelector(".c1"))
// root.render(element)



// function App(props){
//     return (
//         <h1 style={props.style}>I am Vishnu vardhan naidu</h1>
//     )
// }
// const element=<App name="Vishnu" age={19} style={{"background-color": "black",
//   color: "blue"}}/>
// const root=ReactDOM.createRoot(document.querySelector(".c1"))
// root.render(element)

function Header({name}){
    return (
        <h1>Welcome to Election Commision {name}</h1>
    )
}
function Main({user}){
    return(
        // <div>
        //     <h1>Hello</h1>
        //     <p>{user.age>18?"You are eligible to vote":"You are not eligible to vote"}</p>
        // </div>
        //These are known as fragments //That simply tells to the js as wrap up the entire content as single one we can also use div but that will not like an extra ciontainer will be added
        <>
        <h1>Hello</h1>
        <p>{user.age>18?"You are eligible to vote":"You are not eligible to vote"}</p>
        </>
        
    )
}
function Footer(){
    return (
        <h1>Thanks for visiting our website</h1>
    )
}
function App() {
    const user = {
        name: "Vishnu",
        age: 19
    };
    return (
        <div>
            <Header name={user.name} />
            <Main user={user} />
            <Footer />
        </div>
    )
}
const root=ReactDOM.createRoot(document.querySelector(".c1"))
root.render(<App/>)