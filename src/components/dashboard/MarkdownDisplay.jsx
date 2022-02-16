import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {nord} from 'react-syntax-highlighter/dist/esm/styles/prism'


const MarkdownDisplay = (props) => {

    return (
        <div class="flex flex-col items-center w-full">


            <div class="pb-12 text-center">
                <h class="text-8xl text-zinc-900 break-all text-center">{props.postName}</h>
            </div>
            
            <div className="prose lg:prose-xl max-w-prose w-full break-all prose-pre:bg-transparent">
                
                <ReactMarkdown
                    children={props.markdown}
                    components={{
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            style={nord}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        />
                        ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                        )
                    }
                    }}
                />
            
            </div>
        </div>
        
    )
}

export default MarkdownDisplay

// <ReactMarkdown children={props.markdown} remarkPlugins={[remarkGfm]} rehypePlugins={[[rehypeHighlight, {ignoreMissing: true}]]} />