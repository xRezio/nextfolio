import { Typography, IconButton } from '@mui/material';
import React, { useState } from 'react';
import Collapse from 'react-collapse';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ readmeContent }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

return (
    <div >
        <IconButton  color="primary" onClick={toggle}  sx={{fontSize:'20px', border:'1px', boxShadow:"0 4px 4px 0 rgba(0, 0, 0, 0.5)"}}>
            {isOpen ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
        </IconButton>
        <Collapse isOpened={isOpen}>
        <Typography variant="body2" component="div" sx={{ mt: '10px', backgroundColor:'#0d1117', color:'#e8ecf4', padding:'10px', borderRadius:'20px', textAlign:'left' }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                {readmeContent}
                </ReactMarkdown>
            </Typography>
        </Collapse>
    </div>
    );
};

export default Dropdown;