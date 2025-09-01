import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import { duotoneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      children={content}
      className="ch-overflow-auto ch-max-w-full ch-w-full"
      remarkPlugins={[remarkGfm]}
      components={{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={duotoneDark as any}
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
}
