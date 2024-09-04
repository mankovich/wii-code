import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import './style.css'

function Directory () {

    return (
        <>
            <div id="dir-div">
                <h5 id="dir-heading">File Directory</h5>
                <ul>
                    <li>file</li>
                    <li>file</li>
                    <li>file</li>
                    <li>file</li>
                </ul>
            </div>
        </>
    )
}

export default Directory;