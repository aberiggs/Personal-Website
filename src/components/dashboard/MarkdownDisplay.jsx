import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'

const MarkdownDisplay = (props) => {

    const PostTitle = styled.h1`
        text-decoration: underline;
        font-size: 10vmin;
        margin: 0;
        padding: 0;
    `

    const PostBody = styled.div`
        font-size: 2vmin;
        width: 100%;
    `

    return (
        <>
            <PostTitle>{props.postName}</PostTitle>
                <PostBody>
                    <ReactMarkdown children={props.markdown} remarkPlugins={[remarkGfm]} />   
                </PostBody>
        </>
    )
}

export default MarkdownDisplay