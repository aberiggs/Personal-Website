import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const MarkdownDisplay = (props) => {

    return (
        <div class="flex flex-col items-center w-full">
            <div class="pb-12">
                <h class="text-8xl text-zinc-900">{props.postName}</h>
            </div>
            
            <div className="prose lg:prose-xl max-w-prose">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{props.markdown}</ReactMarkdown>
            </div>
        </div>
    )
}

export default MarkdownDisplay