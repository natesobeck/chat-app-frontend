import Conversation from "../features/Conversation/Conversation"
import Sidebar from "./Sidebar"

const AppLayout = () => {
  return (
    <main className="flex">
      <Sidebar />
      <Conversation />
    </main>
  )
}

export default AppLayout
