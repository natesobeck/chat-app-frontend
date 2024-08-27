// src/Tiptap.tsx
import { EditorProvider, FloatingMenu, BubbleMenu, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

// define your extension array
const extensions = [StarterKit]

const editor = new Editor({
  extensions: [StarterKit],
})

const content = '<p>Hello World!</p>'

const TipTap = () => {
  return (
    <EditorProvider extensions={extensions} content={content}>
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
    </EditorProvider>
  )
}

export default TipTap