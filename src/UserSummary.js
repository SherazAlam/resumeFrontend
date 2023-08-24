import React from 'react'
import "./resumeEditor.css"

const ResumeEditor = ({ fetchedData, setFetchedData }) => {


    return (
        <div className='resumeEditorContainer'>

            <h2>Give a brief Summary about your self</h2>
            <div className='jobDescriptionInfo'>
                <div className='jobDescriptionField'>
                    <label>Summary</label>
                    <textarea placeholder='Enter your career description here!' name='summary' value={fetchedData?.jobDescription} onChange={(e) => setFetchedData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></textarea>
                </div>

            </div>

        </div>
    )
}

export default ResumeEditor