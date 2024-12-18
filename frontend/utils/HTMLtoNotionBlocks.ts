import { fromHtml } from "hast-util-from-html"
import { toMdast } from "hast-util-to-mdast"
import { toMarkdown } from "mdast-util-to-markdown"
import { markdownToBlocks } from "@tryfabric/martian"

// https://zirkelc.dev/posts/html-to-notion-blocks
// Refer to this blog

export const convertHtmlToNotionBlock = (data: string) => {
    const hast = fromHtml(data)
    const mdast = toMdast(hast)
    const markdown = toMarkdown(mdast)
    const blocks = markdownToBlocks(markdown)

    return blocks
}