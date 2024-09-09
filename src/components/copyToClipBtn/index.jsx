import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from "react-bootstrap";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons/faCheckSquare";
import './style.css'
import {  faCopy } from "@fortawesome/free-regular-svg-icons";

  function CopyUrlButton  () {
    const [isCopiedToClipboard, setIsCopiedToClipboard] = useState(false);

    const copyToClipboard = () => {
      const url = window.location.href; 
      navigator.clipboard.writeText(url).then(() => {
        setIsCopiedToClipboard(true);
        setTimeout(() => {
            setIsCopiedToClipboard(false);
        }, 2 * 1000)
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    };

    return (
        <>
             <Button                                    
             variant="primary"
             size="sm"
             id="copy-url-btn"
             onClick={copyToClipboard}
             title="Copied to clipboard"
             >
              {isCopiedToClipboard ? (

               <FontAwesomeIcon icon={faCheckSquare} />
            
            ) : (
                <FontAwesomeIcon icon={faCopy} />
            )}
             </Button>
        </>
    )
}

export default CopyUrlButton;