import ConversationList from "../features/Conversation/ConversationList"
import SearchConversations from "../features/Conversation/SearchConversations"

const Sidebar = () => {
  return (
    <div className="h-dvh border-red-400 border-2 p-4 w-80 flex">
      <SearchConversations />
      <ConversationList />
    </div>
  )
}

export default Sidebar
