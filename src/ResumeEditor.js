import React from 'react'
import "./resumeEditor.css"

const ResumeEditor = ({ fetchedData, setFetchedData }) => {


    return (
        <div className='resumeEditorContainer'>
            <h2>Basic Info</h2>
            <div className='basicEditInfo'>
                <div className='fields'>
                    <label>Name</label>
                    <input type='text' name="name" placeholder='Name' value={fetchedData?.name} onChange={(e) => setFetchedData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></input>
                </div>
                <div className='fields'>
                    <label>Role</label>
                    <input type='text' name="role" placeholder='Role' value={fetchedData?.role} onChange={(e) => setFetchedData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></input>
                </div>
                <div className='fields'>
                    <label>Email</label>
                    <input type='email' name="email" placeholder='Email' value={fetchedData?.email} onChange={(e) => setFetchedData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></input>
                </div>
                <div className='fields'>
                    <label>Phone</label>
                    <input type='text' name="phone" placeholder='Phone' value={fetchedData?.phone} onChange={(e) => setFetchedData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></input>
                </div>
                <div className='fields'>
                    <label>Address</label>
                    <input type='text' name="address" placeholder='Addrress' value={fetchedData?.address} onChange={(e) => setFetchedData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></input>
                </div>
                <div className='fields'>
                    <label>Linkedin</label>
                    <input type='text' name="linkedin" placeholder='LinkedIn' value={fetchedData?.linkedin} onChange={(e) => setFetchedData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></input>
                </div>
            </div>
            <h2>Summary</h2>
            <div className='summaryInfo'>
                <div className='summaryField'>
                    <label>Summary</label>
                    <textarea name='summary' value={fetchedData?.summary} onChange={(e) => setFetchedData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></textarea>
                </div>

            </div>

        </div>
    )
}

export default ResumeEditor