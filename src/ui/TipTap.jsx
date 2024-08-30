import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const TipTapMenu = ({ editor }) => {
  if (!editor) return null;

  const logContent = () => {
    const jsonContent = editor.getJSON();
    console.log("Editor JSON Content:", JSON.stringify(jsonContent, null, 2));
  };
  logContent();

  return (
    <div className="flex w-fit gap-1 rounded-md bg-slate-50 p-1">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${editor.isActive("bold") ? "bg-slate-200 rounded-md" : ""}`}
      >
        <div className="p-2 flex items-center">
          <FaBold />
        </div>
      </button>
      <div className="h-8 w-[1px] bg-slate-200"></div>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${editor.isActive("italic") ? "bg-slate-200 rounded-md" : ""}`}
      >
        <div className="p-2 flex items-center">
          <FaItalic />
        </div>
      </button>
      <div className="h-8 w-[1px] bg-slate-200"></div>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "bg-slate-200 rounded-md" : ""}
      >
        <div className="p-2 flex items-center">
          <FaCode />
        </div>
      </button>
    </div>
  );
};

const TipTap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "focus:outline-none bg-slate-50 focus:ring-2 ring-green-200 rounded-md px-2 py-1 h-24",
      },
    }
  });

  if (!editor) {
    return null; // Ensure the editor is initialized before rendering
  }

  return (
    <div className="flex flex-col gap-2 ring-slate-200">
      {/* BubbleMenu will render when text is selected */}
      {editor && <TipTapMenu editor={editor}></TipTapMenu>}

      {/* The actual editor content */}
      <div>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TipTap;
