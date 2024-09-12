import CodeBlock from "@tiptap/extension-code-block";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import Button from "./Button";

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
        className={`${editor.isActive("bold") ? "rounded-md bg-slate-200" : ""}`}
      >
        <div className="flex items-center p-2">
          <FaBold />
        </div>
      </button>
      <div className="h-8 w-[1px] bg-slate-200"></div>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${editor.isActive("italic") ? "rounded-md bg-slate-200" : ""}`}
      >
        <div className="flex items-center p-2">
          <FaItalic />
        </div>
      </button>
      <div className="h-8 w-[1px] bg-slate-200"></div>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={
          editor.isActive("codeBlock") ? "rounded-md bg-slate-200" : ""
        }
      >
        <div className="flex items-center p-2">
          <FaCode />
        </div>
      </button>
    </div>
  );
};

const TipTap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlock.configure({
        HTMLAttributes: {
          class: "bg-slate-200 w-fit px-2 py-1 rounded-md text-sm",
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "focus:outline-none bg-slate-50 focus:ring-2 ring-green-200 rounded-md p-1 h-24 overflow-scroll",
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="relative flex flex-col gap-2 ring-slate-200">
      {editor && <TipTapMenu editor={editor}></TipTapMenu>}

      <div>
        <EditorContent editor={editor} />
      </div>

      <Button
        type="secondary"
        className="absolute bottom-2 right-2 rounded bg-green-400 py-2 px-4 font-medium text-green-950 hover:bg-green-300 transition-all focus:ring-2 ring-offset-2 ring-green-400"
      >
        <IoMdSend className="fill-green-950"/>
      </Button>
    </div>
  );
};

export default TipTap;
