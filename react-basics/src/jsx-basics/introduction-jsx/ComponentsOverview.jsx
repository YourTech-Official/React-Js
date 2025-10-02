// Components in same file 

function ComponentsOverview() {
 
// alert(sum())  // calling normal function

// component 1
  return (
  <>
  <h1>First Component {sum()}</h1> {/* calling normal function inside jsx this way we apply logic in react */}
  <Fruits /> 
  <Color />
  </>
  )
}

// component 2
function Fruits(){
 return(
  <div>
    <h1>Apple</h1>
    <h1>Mango</h1>
  </div>
 )
}

// Component 3 
function Color(){
  return(
    <div>
      <p>Red Color</p>
    </div>
  )
}

// normal function which are use to write logic in react
function sum(){
  return 2 + 3;
}
export default ComponentsOverview
