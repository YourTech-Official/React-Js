function Task() {
  function callfun() {
    alert("Callfun called !");
  }
  return (
    <div>
      <h1>Adils</h1>
      <img
        src="https://images.unsplash.com/photo-1416339306562-f3d12fefd36f"
        height={100}
        width={100}
        alt="img"
      />
      <ul>
        <li>Invent new traffic lights </li>
        <li>Rehearse a movie scene </li>
        <li>Improvr the spectrum technology </li>
      </ul>
      <button onClick={callfun}>Click Me</button>
    </div>
  );
}

export default Task;
