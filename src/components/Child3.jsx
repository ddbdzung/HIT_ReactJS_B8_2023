function Child3(props) {
  const { decreaseAgeById, data } = props

  const handleDecreaseAgeById = () => {
    if (!data.id) return

    decreaseAgeById(data.id)
  }

  return (
    <div>
      <div>Hello I'm Child3 component.</div>
      <div>My name is: {data.name}</div>
      <div>My age is: {data.age}</div>
      <button onClick={handleDecreaseAgeById} type="button" className="bg-slate-500 text-white p-2 rounded-md active:bg-slate-700">Decrease age</button>
    </div>
  );
}

export default Child3;
