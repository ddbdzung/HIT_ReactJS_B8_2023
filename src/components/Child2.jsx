import Child1OfChild2 from "./Child1OfChild2";

function Child2(props) {
  const { increaseAgeById, data } = props
  const { renameById } = props

  const handleIncreaseAgeById = () => {
    if (!data.id) return

    increaseAgeById(data.id)
  }

  return (
    <div>
      <div>Hello I'm Child2 component.</div>
      <div>My name is: {data.name}</div>
      <div>My age is: {data.age}</div>
      <button onClick={handleIncreaseAgeById} type="button" className="bg-slate-500 text-white p-2 rounded-md active:bg-slate-700">Increase age</button>
      <hr className="bg-red-500 h-1" />
      <Child1OfChild2 daddyName={data.name} renameById={renameById} />
      <hr className="bg-red-500 h-1" />
    </div>
  );
}

export default Child2;
