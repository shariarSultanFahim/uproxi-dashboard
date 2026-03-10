"use client";

import { useState } from "react";


import { SerializedEditorState } from "lexical";
import { Button } from "@/components/ui/button";
import { RotateCcw, Save } from "lucide-react";
import { Editor } from "@/components/blocks/editor-00/editor";

interface LegalEditorProps {
    initialContent?: SerializedEditorState;
    onSave: (content: SerializedEditorState | undefined) => void;
}

const defaultInitialValue = {
    root: {
        children: [
            {
                children: [
                    {
                        detail: 0,
                        format: 0,
                        mode: "normal",
                        style: "",
                        text: "Hello World 🚀",
                        type: "text",
                        version: 1,
                    },
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "paragraph",
                version: 1,
            },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "root",
        version: 1,
    },
} as unknown as SerializedEditorState;

export function LegalEditor({ initialContent, onSave }: LegalEditorProps) {
    const [content, setContent] = useState<SerializedEditorState | undefined>(
        initialContent || defaultInitialValue
    );

    const handleSave = () => {
        onSave(content);
    };

    const handleReset = () => {
        setContent(initialContent || defaultInitialValue);
    };

    return (
        <div className="flex flex-col gap-6 mt-6">
            <div className="min-h-[400px]">
                <Editor
                    editorSerializedState={content}
                    onSerializedChange={setContent}
                />
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                <Button
                    variant="ghost"
                    onClick={handleReset}
                    className="text-[#475467] hover:text-[#202c45] font-medium"
                >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset to Default
                </Button>

                <Button
                    onClick={handleSave}
                    className="h-11 px-8 rounded-xl bg-[#3dbcf9] hover:bg-[#3dbcf9]/90 text-white font-bold shadow-sm shadow-[#3dbcf9]/20"
                >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                </Button>
            </div>
        </div>
    );
}
