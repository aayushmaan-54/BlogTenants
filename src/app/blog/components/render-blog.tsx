"use client";
import { generateHTML } from "@tiptap/html";
import { JSONContent } from "novel";
import { useMemo } from "react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import Code from "@tiptap/extension-code";
import BlockQuote from "@tiptap/extension-blockquote";
import TextStyle from "@tiptap/extension-text-style";
import CodeBlock from "@tiptap/extension-code-block";
import OrderList from "@tiptap/extension-ordered-list";
import Bold from "@tiptap/extension-bold";
import HardBreak from "@tiptap/extension-hard-break";
import { TaskList, TaskItem } from "novel";

export default function RenderBlog({ blogJson }: { blogJson: JSONContent }) {
  const output = useMemo(() => {
    return generateHTML(blogJson, [
      Document,
      Paragraph,
      Text,
      Link,
      Underline,
      Heading,
      ListItem,
      BulletList,
      Code,
      BlockQuote,
      TextStyle,
      CodeBlock,
      OrderList,
      Bold,
      HardBreak,
      TaskList,
      TaskItem,
    ])
  }, [blogJson]);

  return (
    <>
      <div
        className="prose m-auto w-11/12 sm:prose-lg dark:prose-invert sm:w-2/3 prose-li:marker:text-primary"
        dangerouslySetInnerHTML={{ __html: output }}
      />
    </>
  );
}