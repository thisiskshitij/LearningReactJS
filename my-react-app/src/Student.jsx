import PropTypes from 'prop-types'


// props -
// read-only properties that are shared between components.
// A parent componenet can send data to a child component.
// <Component key = value/>


//prop types
//default props


function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

// Validates data types
Student.propTypes ={
    name: PropTypes.string,
    age: PropTypes.int,
    isStudent: PropTypes.boolean,
}

// As the name suggests , provides default values
Student.defaultProps ={
    name:"Guest",
    age: 0,
    isStudent:false
}
export default Student
