import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import Ordering from "./Ordering.jsx";
import ColorPicker from "./ColorPicker.jsx";


// can only return one thing , so to return multiple things we need
// to put all these under one empty braces

// to use js under return statement use curly braces , outside no need

// Styling react components with css
// w/o using external frameworks or preprocessors

//1.EXTERNAL - Great for global style , smol projects
//2.MODULES - preffered for individual components with their own uniq styles
//3.INLINE - good for smol components with minimal styling

// use any as per your preference

function App() {
  return (
    <>
      <Card />

      <Button />

      <Student name="Spongebob" age={30} isStudent ={true}/>
      <Student name="Patrick" age={42} isStudent ={false}/>
      <Student name="Sandy" age={29} isStudent ={true}/>
      <Student/>

      <UserGreeting isLoggedIn = {true} username = "Kirito"/>

      <List/>
      <MyComponent/>
      <Counter/>
      <Ordering/>
      <ColorPicker/>
      
    </>
  );
}

export default App;
