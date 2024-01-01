function Profile(props){
//destructure the object from props.
    const { name, lastname} = props;
    return 
        <h1>
        {/* Name: {props.name} {props.lastname} */}
        Name: {name} {lastname}
          </h1>
   
}
export default Profile;

/*
Props are objects that hold information to control behavioir of a component.
Problem with props is that they are immutable.
State is also an object that holds some information but
that information may change over the lifetime of that component.
Props: 1) Passed to the component
2) Props are immutable
3) Props can be accessed as props, this.props
4)They are like parameters passed to a function
State: 1) contained inside component
2) state can be changed
3) Functional: useState Hook Class: this.state
4) They are lik variables declared in the function body
*/