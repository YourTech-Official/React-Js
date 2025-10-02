
// default export can have only one per file
// import App from "./App.jsx" this is how to import default export
function DefautComponent(){

  return(
    <>
     <h1>hello from Default component</h1>
    </>
  )
}
// defautl export only one per file but can have multiple named exports
export default DefautComponent

// named export can have multiple per file
// import {Hello} from "./App.jsx" this is how to import named export
export function NamedComponent(){
  return(
    <h1>Hello from named compone
    
    
    
    
    
    
    
      t </h1>
  )
}

// Note : -
// we can have both default and named export in single file
// in this file DefautComponent is default export and NamedComponent is named export
// we can import both in single line like this 
// import DefautComponent, { NamedComponent } from "./NamedComponent"

// we can also import or variable in this file and use it in component
// like this 
export const name = "John";