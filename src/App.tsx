import { motion } from "framer-motion"

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="example-container">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
      </div>
    </div>
  )
}

export default App
