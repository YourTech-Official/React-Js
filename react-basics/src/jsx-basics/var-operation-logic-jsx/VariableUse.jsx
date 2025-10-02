import React from 'react'

function VariableUse() {
    const name = "Adils";         
    // const name = undefined;         
    // const name = "";         

    let x = 20;
    let y = 10;

    function fruit() {
        return "Apple";
    }

    function sum(a,b) {
        return a + b;
    }

    function operation(a, b, op) {
        if (op == "+") {
            return a + b;
        }else if(op == "-")
        {
            return a - b;
        }
        else {
            return a * b;
        }
    }
    
    const userObj = {
        name: "Adi",
        age: 22,
        address: {
            city: 'bbsr',
        }
    }
    const arr = ["Asi", "Mia", "Eve"];

let img = "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f";

  return (
    <div>
          <h1>{name? name : "User Not Found"}</h1>
          <h1>{x + y}</h1>
          <h1>{fruit()}</h1>
          <h1>{sum(10, 30)}</h1>
          <h1>{operation(2, 4, "+")}</h1>

          <h1>{userObj.address.city }</h1>
          <h1>{userObj.name }</h1>
          <h1>{userObj.age}</h1>
          <h1>{arr[0]}</h1>
          <h1>{arr[1]}</h1>
          <h1>{arr[2]}</h1>

          <img src={img} height={200} width={200} alt="photo" />
    </div>
  )
}

export default VariableUse





