import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './style.css'

function RenderBtn() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        
        function simulateRequest() {
            return new Promise((resolve) => setTimeout(resolve, 5000));
        }

        if (isLoading) {
            simulateRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    function handleClick() {
        setLoading(true);
        //add logic for rendering code think its just going to be window.location'pathname'
    }

    return (
        <>
            <Button
                variant='primary'
                size='sm'
                id='render-btn'
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
            >
                {isLoading ? 'Loading...' : 'Render code'}
            </Button>
        </>
    );
}

export default RenderBtn;