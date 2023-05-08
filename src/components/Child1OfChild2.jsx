import { useContext } from "react"

import store from '../context/store'

const ID = 1

function Child1OfChild2(props) {
  const { renameById, daddyName } = props
  // Use context
  const userContext = useContext(store.UserContext)

  const handleRenameById = () => {
    const randomString = (Math.random() + 1).toString(36).substring(7)

    renameById(ID, randomString)
  }

  return (
    <div>
      <div>Hello I'm Child1OfChild2 component.</div>
      <div>I will rename my grandpa: Parent component</div>
      {/* <div>My grandpa name: {daddyName}</div> */}
      <div>My grandpa name: {userContext[1].name}</div>
      <button
        type="button"
        className="bg-slate-500 text-white p-2 rounded-md active:bg-slate-700"
        onClick={handleRenameById}
      >
        Random name by id ({ID})
      </button>
    </div>
  );
}

export default Child1OfChild2;
