const {useContext, useState, createContext, useMemo} = React
const AppContext = createContext()

function useAppContext() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useAppContext must be used within AppProvider!')
  return context
}

function AppProvider(props) {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hello from Context!')
  const value = useMemo(() => ({
    count,
    setCount,
    message,
    setMessage
  }), [count, message])
  return <AppContext.Provider value={value} {...props}/>
}

// this component does NOT consume the context
// but is still within the Provider component
function IndependentMessage() {
  const getColor = () => (Math.floor(Math.random() * 255))
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`
  }
  return (
    <div>
      <h4 style={style}>I'm my own Independent Message!</h4>
    </div>
  )
}

function Message() {
  const { message } = useAppContext()
  const getColor = () => (Math.floor(Math.random() * 255))
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`
  }
  return (
    <div>
      <h4 style={style}>{message}</h4>
    </div>
  )
}

function Count() {
  const {count, setCount} = useAppContext()
  return (
    <div>
      <h3>Current count from context: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <AppProvider>
        <h2>Re-renders! 😩</h2>
        <Message />
        <Message />
        <Message />
        <IndependentMessage />
        <Count />
      </AppProvider>
    </div>
  )
}
render(App)