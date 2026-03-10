import { useState } from "react"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { ListPlugin } from "@lexical/react/LexicalListPlugin"

import { ContentEditable } from "@/components/editor/editor-ui/content-editable"

import { ToolbarPlugin } from "@/components/editor/plugins/toolbar/toolbar-plugin"
import { BlockFormatDropDown } from "@/components/editor/plugins/toolbar/block-format-toolbar-plugin"
import { ElementFormatToolbarPlugin } from "@/components/editor/plugins/toolbar/element-format-toolbar-plugin"
import { FormatParagraph } from "@/components/editor/plugins/toolbar/block-format/format-paragraph"
import { FormatHeading } from "@/components/editor/plugins/toolbar/block-format/format-heading"
import { FormatBulletedList } from "@/components/editor/plugins/toolbar/block-format/format-bulleted-list"
import { FormatNumberedList } from "@/components/editor/plugins/toolbar/block-format/format-numbered-list"
import { FormatCheckList } from "@/components/editor/plugins/toolbar/block-format/format-check-list"
import { FormatQuote } from "@/components/editor/plugins/toolbar/block-format/format-quote"
import { ListMaxIndentLevelPlugin } from "@/components/editor/plugins/list-max-indent-level-plugin"
import { FontFormatToolbarPlugin } from "@/components/editor/plugins/toolbar/font-format-toolbar-plugin"
import { FontFamilyToolbarPlugin } from "@/components/editor/plugins/toolbar/font-family-toolbar-plugin"

export function Plugins() {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null)

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  return (
    <div className="relative flex flex-col w-full h-full">
      {/* toolbar plugins */}
      <div className="flex bg-white p-2 border-b border-border items-center">
        <ToolbarPlugin>
          {() => (
            <div className="flex gap-2 items-center flex-wrap">
              <BlockFormatDropDown>
                <FormatParagraph />
                <FormatHeading levels={["h1", "h2", "h3"]} />
                <FormatBulletedList />
                <FormatNumberedList />
                <FormatCheckList />
                <FormatQuote />
              </BlockFormatDropDown>
              <FontFamilyToolbarPlugin />
              <ElementFormatToolbarPlugin />
              <FontFormatToolbarPlugin />

            </div>
          )}
        </ToolbarPlugin>
      </div>

      <div className="relative">
        <RichTextPlugin
          contentEditable={
            <div className="p-4" style={{ minHeight: "400px" }}>
              <div className="outline-none min-h-[400px]" ref={onRef}>
                <ContentEditable placeholder={"Start typing ..."} />
              </div>
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        {/* editor plugins */}
        <ListPlugin />
        <ListMaxIndentLevelPlugin maxDepth={7} />
      </div>
      {/* actions plugins */}
    </div>
  )
}
