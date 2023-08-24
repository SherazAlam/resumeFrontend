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
            <h2>Education</h2>
            <div className='basicEduInfo'>
                <div className='eduFields'>
                    <label>University name</label>
                    <input type='text' name="universityName" placeholder='University Name' value={fetchedData?.universityName} onChange={(e) => setFetchedData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></input>
                </div>
                <div className='eduFields'>
                    <label>Major</label>
                    <input type='text' name="major" placeholder='Majors' value={fetchedData?.major} onChange={(e) => setFetchedData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></input>
                </div>
                <div className='eduFields'>
                    <label>graduating Year</label>
                    <input type='text' name="graduatingYear" placeholder='Graduating Year' value={fetchedData?.graduatingYear} onChange={(e) => setFetchedData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></input>
                </div>
            </div>
            <h2>Skills</h2>
            <div className='basicEditInfo'>
                <div className='skillFields'>
                    <label>Skills</label>
                    <input type='text' name="skills" placeholder='ReactJS, MongoDB, NodeJS...' value={fetchedData?.skills} onChange={(e) => setFetchedData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></input>
                </div>

            </div>
            <h2>Certificates</h2>
            <div className='basicEditInfo'>
                <div className='skillFields'>
                    <label>Certificate names</label>
                    <input type='text' name="certificates" placeholder='Google Data Analyst, Meta ReactJS...' value={fetchedData?.certificates} onChange={(e) => setFetchedData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></input>
                </div>

            </div>
            <h2>Languages</h2>
            <div className='basicEditInfo'>
                <div className='skillFields'>
                    <label>Languages</label>
                    <input type='text' name="languages" placeholder='Urdu, English, Arabic...' value={fetchedData?.languages} onChange={(e) => setFetchedData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></input>
                </div>

            </div>
            <h2>Job Description</h2>
            <div className='jobDescriptionInfo'>
                <div className='jobDescriptionField'>
                    <label>Job Description</label>
                    <textarea placeholder='Enter your desired job description here!' name='jobDescription' value={fetchedData?.jobDescription} onChange={(e) => setFetchedData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}></textarea>
                </div>

            </div>

        </div>
    )
}

export default ResumeEditor