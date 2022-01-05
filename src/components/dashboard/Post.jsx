import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'

let markdown = `# File I/O and Exception Handling\n\n# Persistence of File Storage\n- RAM comes and goes\n\t- Programs crash\n\t- Systems reboot\n- File last\n- Program save data to files to\n\t- Recover from program crashes and system reboots\n\t- Provide as input to other programs\n- File I/O operations extend naturally to communication between programs\n\n# File and Java\n- java tries to be platform independent\n- Besides File class\n\t- File name is OS dependent\n\t- file path directory conventions are OS dependent\n\n# Generic File Operations (1)\n- Open: \n\t- Files must be opened before they can be used\n\t- Open method indicates \"for reading,\" \"for writing,\" or \"both\"\n\t- May also indicate \"append\" mode\n\t- Allows OS to establish \"buffers\" and other state info about the file being read or written\n- Read:\n\t- Transfers data from the file (or input stream) to the user process\n\t- Specific method signature indicate the type of data being transferred\n- Write:\n\t- Transfers data from the user process to the file (or output stream)\n\n# Generic File Ops (2)\n- File position\n\t- Sets the \"current input position\" to a specific byte address\n\t- Can be used to skip over data in file\n\t- Can be used to \"rewind\" the file to start reading from the beginning again\n- Close\n\t- Ensures that any \"queued data\" is \"flushed\" from the operating system buffers\n\t- Free OS resources being dedicated to managing the file\n\n# Importance of Buffering\n- Without buffering, each read or write may generate physical disk access\n- Can be extremely slow for large vols of data\n- Buffering has OS create an internal array\n\t- OS reads \"more than needed\" on input, keeps rest for next call to read method\n\t- OS doesn't send output right away, needs to flush\n\t- Important to close file (or flush buffers) when done\n\n# File I/O Layers in Java\n- Low-level\n\t- \"Raw\" data transfer: byte oriented\n\t- Classes: FileOutputStream, FileInputStream\n- High-Level\n\t- Java primitive types\n\t- Classes: DataOutputStream, DataInputStream\n- Object I/O\n\t- Java object types\n\t- Classes: ObjectOutputStream, ObjectInputStream\n\n## _Example: Low-Level I/O_\n\n## _Example: High-Level I/O_\n\n# Tricky Bits\n- You must keep track of what you're doing!\n- data vals must be read in the same roder in which they were written\n\t- write int, long, long, bool, double, float, char\n\t- read int, long, long, bool, double, float, char\n- if you try to read an int, but a double is next in the stream, you'll get garbage\n\n## _Example: (1)_\n## _Example: (2)_\n- \"implements Serializable\"\n\t- Creates serial# for that particular tree. If you use the exact tree again somewhere else, it doesn't put down all the info again, only the serial#. \n\n# File Content Types\n- Can consider file contents in two categories\n- Text (.java, .txt)\n\t- Store human-readable, character data\n\t- Mostly platform independent (except EOL)\n- Binaries (.class, .exe)\n\n# Writing and Reading Text\n- Java handles translation from internal primitive format to human-readable text\n- Writing\n\t- Class: PrintWriter (favored, more platform independent)\n\t- Class: PrintStream for System.out (but out of favor)\n- Reading\n\t- Classes: FileReader and BufferedReader\n\t- Also, Scanner\n\n## _Example: TextIO (1)_\n## _Example: TextIO (2)_\n\n`

const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: black;
`

const PostBody = styled.div`

    background-color: white;
    font-size: 20px;
    width: 60%;
    margin: 5vmin;
    padding: 5vmin;
    
`

function Post() {
    return(
        <Background>
            <PostBody>
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
            </PostBody>
        </Background>
    )
    
}

export default Post