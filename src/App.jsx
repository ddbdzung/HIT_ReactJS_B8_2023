import Parent from './components/Parent';
import store from './context/store'
import { loadState } from './utils/localStorage';
import staticData from './components/mock.json'

function App() {
  const { UserContext } = store
  const states = loadState('data')?.data
  const defaultUserState = (states && states.length > 0) ? states : staticData
  
  return (
    <UserContext.Provider value={defaultUserState}>
    {/* <UserContext.Provider value={staticData}> */}
      <div className="text-center bg-slate-300">
        <main className="min-h-screen flex flex-col items-center justify-center text-template">
          <Parent />
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;
