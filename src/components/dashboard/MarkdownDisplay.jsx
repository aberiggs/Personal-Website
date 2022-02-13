import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const MarkdownDisplay = (props) => {

    return (
        <div class="flex flex-col items-center w-full">
            <div class="pb-12 text-center">
                <h class="text-8xl text-zinc-900 break-all text-center">{props.postName}</h>
            </div>
            
            <div className="prose lg:prose-xl max-w-prose w-full break-all">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{props.markdown}</ReactMarkdown>
            </div>
        </div>
    )
}

export default MarkdownDisplay