"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

export default function RichText({ onChange, value }) {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: ["undo", "redo", "|", "bold", "italic"],
        },
        plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo],
        licenseKey: "<YOUR_LICENSE_KEY>",
        initialData: value,
      }}
      data={value}
      onChange={(data, editor) => {
        onChange({
          target: {
            name: "content",
            value: editor.getData(),
          },
        });
      }}
    />
  );
}
