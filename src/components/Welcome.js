export const Welcome = (props) => {
    const anotherLogin = () =>{
      alert("Temporary Function")
      window.location.reload()
    }
  return (
    <div className="Welcome-components">
      <h1> Hey, <span>{props.title}</span></h1>
      <h2>Welcome to College</h2>
      <p>Think Big</p>
      <button onClick={anotherLogin}>Another Login</button>
    </div>
  );
};

export default Welcome;
// Written by github: @03prashantpk