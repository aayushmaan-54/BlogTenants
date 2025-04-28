"use client";
import { EditorCommand, EditorCommandEmpty, EditorCommandItem, EditorCommandList, EditorContent, EditorRoot, handleCommandNavigation, JSONContent } from "novel";
import { defaultExtensions } from "./extensions";
import { slashCommand, suggestionItems } from "./slash-command";

interface EditorProps {
  initialValue?: JSONContent | string;
  onChagne: (value: JSONContent) => void;
}


const extensions = [...defaultExtensions, slashCommand];


const TailwindEditor = ({
  initialValue,
  onChagne
}: EditorProps) => {

  return (
    <EditorRoot>
      <EditorContent
        editorProps={{
          handleDOMEvents: {
            keydown: (_view, event) => handleCommandNavigation(event),
          },
          attributes: {
            class: `prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none input max-w-full h-96`,
          },
        }}
        immediatelyRender={false}
        extensions={extensions}
        initialContent={initialValue as JSONContent}
        onUpdate={({ editor }) => {
          const json = editor.getJSON();
          onChagne(json);
        }}
      >
        <EditorCommand className='z-50 h-auto max-h-[330px]  w-72 overflow-y-auto rounded-md border border-border bg-background px-1 py-2 shadow-md transition-all'>
          <EditorCommandEmpty className='px-2 text-text-muted'>No results</EditorCommandEmpty>
          <EditorCommandList>
            {suggestionItems.map((item) => (
              <EditorCommandItem
                value={item.title}
                onCommand={(val) => item.command?.(val)}
                className={`flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-secondary aria-selected:bg-secondary`}
                key={item.title}>
                <div className='flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background'>
                  {item.icon}
                </div>
                <div>
                  <p className='font-medium'>{item.title}</p>
                  <p className='text-xs text-text-muted'>{item.description}</p>
                </div>
              </EditorCommandItem>
            ))}
          </EditorCommandList>
        </EditorCommand>
      </EditorContent>
    </EditorRoot>
  );
};


export default TailwindEditor;