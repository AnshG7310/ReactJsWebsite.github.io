// var React = require ('react');
// import React, { createElement } from 'react';

// var ReactDOM = require ('react-dom');
// import ReactDOM from 'react-dom';


// how react simply above code -->
// ReactDOM.render(React.createElement('h1','null','My name is Ansh Goyal'), document.getElementById("root"));


// Pure JavaScript -->
// var h1 = document.createElement("h1");
// h1.innerHTML="Ansh Goyal is my name";
// document.getElementById("root").appendChild(h1);


// Normal React Code -->
// ReactDOM.render('what to show','where to show',callback) 
// ReactDOM.render( 
//   <h1>Hello I am Ansh Goyal</h1>,
//   document.getElementById("root")
//  );


// when we are using multiple elements, then you are required to wrap it in a enclosing tag

//  or by using '[ ]'
// ReactDOM.render(
//   [
//     <h1> Hello My name is Ansh Goyal </h1>,
//     <p> and i am 19 year old </p>,
//   ],
//   document.getElementById("root")
// );

// By using 'Div' tag
//  ReactDOM.render(
//   <div>
//     <h1> Hello My name is Ansh Goyal </h1>
//     <p> and i am 19 year old </p>
//   </div>,
//   document.getElementById("root")
//  );


// when we are using a div tag to enclose multiple elements
// then another div tag is appended to the html documents
// to avoid this problem

// we make use React Fragments --> <React.Fragment> ..... </React.Fragment>
//  ReactDOM.render(
//   <React.Fragment>
//     <h1> Hello My name is Ansh Goyal </h1>
//     <p> and i am 19 year old </p>
//   </React.Fragment>,
//   document.getElementById("root")
//  ); 

// --> <> ..... </>
// ReactDOM.render(
//  <>
//    <h1> Hello My name is Ansh Goyal </h1>
//    <p> and i am 19 year old </p>
//  </>,
//  document.getElementById("root")
// );



// =======================================================================================================================================
// ============================ CHALLENGE 1: CREATE A APP HAVING H1 TAG, P TAG, AND LIST OF 5 NETFLIX SERIES NAME ========================
// =======================================================================================================================================



// ReactDOM.render(
//   <>
//     <h1> NETFLIX </h1>
//     <p> List of Netflix Series </p>
//     <ol> 
//       <li>Stranger Things</li>
//       <li>Mirzapur</li>
//       <li>Umbrella Academy</li>
//       <li>Dark</li>
//       <li>Mr Robot</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// );



// =======================================================================================================================
// ============================================ CHALLENGE FINISHED =======================================================
// =======================================================================================================================


// JSX Expression ==> 

// import React from 'react';
// import ReactDOM from 'react-dom';

// -> Using '{ }' which is used to print value of the variable
// const name = 'Ansh Goyal';

// ReactDOM.render(
//   <>
//     <h1>My Name is {name} </h1>
//     <p> I am {14+5} year old.</p>
//   </>,
//   document.getElementById("root")
// );


// Template Literals In React => Using ` `

// import React from 'react';
// import ReactDOM from 'react-dom';

// const fname = "Ansh";
// const lname = "Goyal";

// console.log(`My name is ${fname}`); 

// ReactDOM.render(
//   <>
//     <h1> My Name is {`${fname} ${lname}`} </h1> 
//     <h1> {`My Name is ${fname} ${lname}`} </h1>
//     <h1> {`My First Name is ${fname} and My Last Name is ${lname}`} </h1>
//     <h2> My Lucky Number is {1+2} </h2>
//   </>,
//   document.getElementById("root")
// )




// ==============================================================================================================
// =========================================== CHALLENGE 2: =====================================================
// ======================================== 1. H1 TAG - YOUR NAME ===============================================
// ======================================== 2. TODAYS DATE IS ...... ============================================
// ======================================== 3. CURRENT TIME IS ...... ===========================================
// ==============================================================================================================



// import react from 'react';
// import reactdom from 'react-dom';

// const name = "Ansh Goyal";
// const curDate = new Date().toLocaleDateString();
// const curTime = new Date().toLocaleTimeString();
// reactdom.render(
//   <>
//     <h1>Hello, My name is {name} </h1>
//     <h2>Today's Date is {curDate} </h2>
//     <h2>Current Time is {curTime} </h2>
//   </>,
//   document.getElementById("root")
// );



// =======================================================================================================================
// ============================================ CHALLENGE FINISHED =======================================================
// =======================================================================================================================




// JSX Attributes in ReactJS ==>

// import React from 'react';
// import ReactDOM from 'react-dom';

// const img1 = "https://picsum.photos/id/237/200/300";
// const img2 = "https://picsum.photos/id/237/200/300";
// const loc = "index.css";

// ReactDOM.render(
//   <>
//     <h1 contentEditable = "true">My name is Ansh Goyal</h1>
//     <img src={img1} alt='randomImages'/>
//     <a href={loc}>
//       <img src={img2} />
//     </a>
//   </>, document.getElementById("root")
// );


// CSS Styling and Importing CSS file in ReactJS ==>

// import react from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";

// const img1 = "https://picsum.photos/id/237/200/300";
// const img2 = "https://picsum.photos/id/237/200/300";

// ReactDOM.render(
//   <>
//     <h1 className='heading'>My name is Ansh Goyal</h1>
//     <div className='img_div'>
//       <img src={img1} />
//       <img src={img2} />
//     </div>
//   </>, document.getElementById("root")
// );



// Internal CSS and Inline CSS in ReactJS ==>

// import React from 'react';
// import ReactDOM from 'react-dom';

// const img1 = "https://picsum.photos/id/237/200/300";
// const img2 = "https://picsum.photos/id/237/200/300";


//  like Object
// const heading = {
//   color: 'blue',
//   textTransform: 'capitalize',
//   textAlign: 'center',
//   fontWeight: 'bold',
//   margin: '50px 0',
//   fontFamily: '"Josefin Slab", serif'
// }

// ReactDOM.render(
//   <>
//     {/* first Method */}
//     <h1 style={heading} > My name is Ansh Goyal </h1> 
//     {/* Second Method */}
//     <h1 style={{color: 'black', textAlign: 'center', fontFamily: '"Josefin Slab", serif'}} > I am 19 year old. </h1> 
//     <div>
//       <img src={img1} />
//       <img src={img2} />
//     </div>
//   </>, document.getElementById("root")
// );




// ==================================================================================================================
// ================================================ CHALLENGE 3: ====================================================
// =========================================== 1. Create React App ==================================================
// ================================== 2. Heading that shows Hello Sir, Good Morning =================================
// ================================== if time is between 1 to 11AM ==================================================
// ================================== 3. Heading that shows Hello Sir, Good Morning =================================
// =================================  if time is between 12 to 7PM ==================================================
// =================================  4. Heading that shows Hello Sir, Good Morning =================================
// ================================== if time is between 7PM till midnight ==========================================
// =========================================== 5. Apply CSS Inline ==================================================
// ==================================================================================================================



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// let curTime = new Date().getHours();
// let greeting = '';
// const cssStyle = {  };

// if(curTime >= 1 && curTime < 12){
//    greeting = 'Good Morning';
//    cssStyle.color = "green";
// }
// else if(curTime >= 12 && curTime < 19){
//    greeting = 'Good Afternoon';
//    cssStyle.color = "orange";
// }
// else{
//    greeting = 'Good Night';
//    cssStyle.color = "red";
// }

// ReactDOM.render(
//    <div className='center'>
//       <h1>Hello Sir, <span style={cssStyle}> {greeting} </span></h1>
//    </div>,
//    document.getElementById("root")
// );



// =======================================================================================================================
// ============================================ CHALLENGE FINISHED =======================================================
// =======================================================================================================================





// <== === === === === COMPONENTS IN REACT JS === === === === ==>

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Heading from './Heading';
// import Paragraph from './Paragraph';
// import List from './List';
// import App from './Component/App';

// ReactDOM.render(
//    <>
//       <App /> {/* Adding only one file to minimize this file. */}
//       {/* <Heading />
//       <Paragraph />
//       <List /> */}
//    </>, document.getElementById("root")
// );




// ==================================================================================================================
// ================================================ CHALLENGE 4: ====================================================
// =========================================== Break the Challenge 3 into components ================================
// ==================================================================================================================



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import ChallengeFour from './Component/ChallengeFour';

// ReactDOM.render(
//    <>
//       <ChallengeFour />
//    </>, document.getElementById("root")
// );



// =======================================================================================================================
// ============================================ CHALLENGE FINISHED =======================================================
// =======================================================================================================================



// <== === === === === IMPORT EXPORT IN REACT JS === === === === ==>

// import React from 'react';
// import ReactDOM from 'react-dom';
// import myFav,{favProgram,myName,myNames} from './Component/Importexport'; // but it will be too lengthy
// import * as any from './Component/Importexport'; // not it will import all as 'any'

// ReactDOM.render(
//    <>
//       <any.myName /> {/* here it is used as a tag */}
//       <h1>{any.myName()}</h1>
//       <ol>
//          <li> My Favourite Youtuber is {any.default} </li>
//          <li> My Favourite Langauge is {any.favProgram} </li>
//          <li> {any.myName()} </li> {/* here it is used as calling a function */}
//          <li> {any.myNames()} </li>
//          <li> {any.myNamess()} </li>
//       </ol>
//    </>, document.getElementById("root")
// );




// ==================================================================================================================
// ================================================ CHALLENGE 5: ====================================================
// ========================================== CREATE SIMPLE CALCULATOR APP ==========================================
// ==================================================================================================================


// import React from 'react';
// import ReactDOM from 'react-dom';
// import * as calc from './Component/Calculator';

// const root = document.getElementById("root")

// ReactDOM.render(
//    <>
//       <h3>Addition:{calc.add(10,20)}</h3>
//       <h3>Subtraction:{calc.subtract(100,50)}</h3>
//       <h3>Multiplication:{calc.multiply(10,20)}</h3>
//       <h3>Division:{calc.divide(10,3)}</h3>
//    </>, root
// );


// =======================================================================================================================
// ============================================ CHALLENGE FINISHED =======================================================
// =======================================================================================================================



// <== === === === === PROPS IN REACT JS === === === === ==>
// ====================================================================================================================================
// ============================================ CREATING NETFLIX APP ==================================================================
// ====================================================================================================================================
// PROPS helps us to create our own property/attribute
// like object

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from './Component/Card';
// import Sdata from './Component/Sdata';
// import Ncard from './Component/Ncard';
// import './index.css';

// console.log(Sdata[0].sname);

// function ncard(val){
//    return (
//       <Card
//          imgsrc={val.imgsrc}
//          title={val.title}
//          sname={val.sname}
//          link={val.link}
//       />
//    );
// }

// const root = document.getElementById("root")
// ReactDOM.render(
//    <>
//       <h1 className='headind_style'>List of Top Netflix Series in 2022</h1>
//       {Sdata.map(Ncard)}
//    </>, root
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Card from './Component/Card';
// import Ncard from './Component/Ncard';
// import Sdata from './Component/Sdata';

// ReactDOM.render(
//    <>
//       <h1 className='heading_style'>List of Top Netflix & IMDB Web Series</h1>
//       {Sdata.map(Ncard)}
//    </>, document.getElementById("root")
// );

// ============================================================================================================
// ===================================== NETFLIX APP FINISHED =================================================
// ============================================================================================================





// ==================================================================================================================
// ================================================ CHALLENGE 6: ====================================================
// ============================================= SLOT MACHINE GAME ==================================================
// ==================================================================================================================


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './Component/App';

// ReactDOM.render(<App />,document.getElementById("root"));



// ==================================================================================================================
// ================================================ CHALLENGE FINISHED ==============================================
// ==================================================================================================================


// <== === === === === HOOKS IN REACT JS === === === === ==>

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Component/App';

// ReactDOM.render(<App />, document.getElementById("root"));




// ==================================================================================================================
// ================================================ CHALLENGE 7: ====================================================
// ============================================= DIGITAL CLOCK ======================================================
// ==================================================================================================================

// import React from 'react';
// import ReactDom from 'react-dom';
// import App from './Component/App';
// import './index.css';

// ReactDom.render(
//    <App />, document.getElementById("root")
// );

// ==================================================================================================================
// ================================================ CHALLENGE FINISHED ==============================================
// ==================================================================================================================



// <== === === === === HANDLING EVENTS IN REACT JS === === === === ==>
// CREATING A MINI-PROJECT ==========================================>

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './Component/App';

// const root = document.getElementById("root")
// ReactDOM.render(<App />, root);



// <== === === === === FORMS IN REACT JS === === === === ==>
// CREATING A MINI-PROJECT ==========================================>

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Component/App';
// import './index.css';

// ReactDOM.render(<App />, document.getElementById("root"));


// CREATING A LOGIN FORM USING FORM TAG MINI-PROJECT ==========================================>

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './Component/App';

// ReactDOM.render(<App />, document.getElementById('root'))


// CREATING A COMPLEX MULTIPLE INPUT FORM USING FORM TAG MINI-PROJECT ==========================================>

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './Component/App';

// ReactDOM.render(<App />, document.getElementById('root'))




// ==================================================================================================================
// ================================================ CHALLENGE 8: ====================================================
// ============================================= CREATING TO DO LIST ================================================
// ==================================================================================================================



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './Component/App';

// ReactDOM.render(<App />, document.getElementById('root'))



// ==================================================================================================================
// ================================================ CHALLENGE FINISHED ==============================================
// ==================================================================================================================





// ==================================================================================================================
// ================================================ CHALLENGE 9: ====================================================
// ==================================== INCREMENTING / DECREMENTING THE VALUE =======================================
// ==================================================================================================================



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './Component/App';

// ReactDOM.render(<App />, document.getElementById('root'));



// ==================================================================================================================
// ================================================ CHALLENGE FINISHED ==============================================
// ==================================================================================================================




// ==================================================================================================================
// ================================================ CHALLENGE 10: ===================================================
// ======================================== DIGITAL CLOCK USING NPM ONLY ============================================
// ==================================================================================================================


// import react from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Digital from 'react-digital-clock';

// ReactDOM.render(<Digital />, document.getElementById("root"))


// ==================================================================================================================
// ================================================ CHALLENGE FINISHED ==============================================
// ==================================================================================================================




// ==================================================================================================================
// ================================================ CHALLENGE 11: ===================================================
// ======================================== CREATING TO DO LIST PART II =============================================
// ==================================================================================================================



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Todolist1 from './Component/Todolist1';

// ReactDOM.render(<Todolist1 />, document.getElementById('root'))



// ==================================================================================================================
// ================================================ CHALLENGE FINISHED ==============================================
// ==================================================================================================================


// <== === === === === USING BOOTSTRAP IN REACT JS === === === === ==>

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Component/App';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<App />, document.getElementById("root"));



// ==================================================================================================================
// ================================================ CHALLENGE 12: ===================================================
// =========================================== CREATING A ACCORDION APP =============================================
// ==================================================================================================================



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Component/App';
// import './index.css';

// ReactDOM.render(<App />, document.getElementById("root"));



// ==================================================================================================================
// ================================================ CHALLENGE FINISHED ==============================================
// ==================================================================================================================



// ==================================================================================================================
// ================================================ CHALLENGE 13: ===================================================
// ============================================ GOOGLE KEEP APP CLONE ===============================================
// ==================================================================================================================



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Component/App';
// import './index.css';
// ReactDOM.render(<App />, document.getElementById("root"));



// ==================================================================================================================
// ================================================ CHALLENGE FINISHED ==============================================
// ==================================================================================================================



// <== === === === === CONTEXT API IN REACT JS : createContext() useContext() === === === === ==>

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Component/App';
// import './index.css';
// ReactDOM.render(<App />, document.getElementById("root"));


// <== === === === === CONTEXT API IN REACT JS : useEffect() HOOK === === === === ==>

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Component/App';
// import './index.css';
// ReactDOM.render(<App />, document.getElementById("root"));



// ==================================================================================================================
// ================================================ CHALLENGE 14: ===================================================
// ======================================= CHANGING THE TITLE VALUE OF WEBSITE ======================================
// ==================================================================================================================



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Component/App';
// import './index.css';
// ReactDOM.render(<App />, document.getElementById("root"));



// ==================================================================================================================
// ================================================ CHALLENGE FINISHED ==============================================
// ==================================================================================================================



// <== === === === === REACT API CALL TO GET POKEMON REACT JS === === === === ==>
// CREATING A MINI-PROJECT ==========================================>

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Pokemon from './Component/Pokemon';
// ReactDOM.render(<Pokemon />, document.getElementById('root'))


// <== === === === === REACT ROUTER IN REACT JS === === === === ==>
// WHEN WE DONT WANT TO FULLY RELOAD THE PAGE =============================>


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Component/App';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// ReactDOM.render(
//    <BrowserRouter>
//       <App />
//    </BrowserRouter>, document.getElementById('root')
// );



// ==================================================================================================================
// ================================================ CHALLENGE 15: ===================================================
// ================================================ useLocation() ===================================================
// ===================================== MINI PROJECT--> THAT WILL SHOW BUTTON ======================================
// ================================ ONLY IF THE FIRSTNAME IS 'ANSH' OTHERWISE NOT--> ================================
// ==================================================================================================================



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Component/App';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// ReactDOM.render(
//    <BrowserRouter>
//       <App />
//    </BrowserRouter>, document.getElementById('root')
// );



// ==================================================================================================================
// ================================================ CHALLENGE FINISHED ==============================================
// ==================================================================================================================



// ==================================================================================================================
// ================================================ CHALLENGE 16: ===================================================
// ================================================= useHistory() ===================================================
// ===================================== MINI PROJECT--> THAT WILL SHOW BUTTON ======================================
// ================================ ONLY IF THE FIRSTNAME IS 'ANSH' OTHERWISE NOT --> ===============================
// ================================= AND THIS BUTTON WILL REDIRECT TO THE BACK  --> =================================
// ==================================================================================================================



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Component/App';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// ReactDOM.render(
//    <BrowserRouter>
//       <App />
//    </BrowserRouter>, document.getElementById('root')
// );



// ==================================================================================================================
// ================================================ CHALLENGE FINISHED ==============================================
// ==================================================================================================================


// ==================================================================================================================
// ================================================ CHALLENGE 17: ===================================================
// ======================================== LIVE SEARCH FILTER IN REACT JS  =========================================
// ============================================ USING HOOKS AND ROUTER ==============================================
// ==================================================================================================================



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Component/App';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// ReactDOM.render(
//    <BrowserRouter>
//       <App />
//    </BrowserRouter>, document.getElementById('root')
// );



// ==================================================================================================================
// ================================================ CHALLENGE FINISHED ==============================================
// ==================================================================================================================



// ==================================================================================================================
// ================================================ CHALLENGE 18: ===================================================
// ======================================== REDIRECTING TO THE HOME PAGE ============================================
// ============================================ IF PAGE IS NOT EXIST ================================================
// ==================================================================================================================



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Component/App';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// ReactDOM.render(
//    <BrowserRouter>
//       <App />
//    </BrowserRouter>, document.getElementById('root')
// );



// ==================================================================================================================
// ================================================ CHALLENGE FINISHED ==============================================
// ==================================================================================================================




// ==================================================================================================================
// ================================================== REACT JS WEBSITE ==============================================
// ==================================================================================================================


import React from 'react';
import ReactDOM from 'react-dom';
import App from './Website/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
ReactDOM.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>, document.getElementById("root")
);


// ==================================================================================================================
// ================================================ CHALLENGE FINISHED ==============================================
// ==================================================================================================================
