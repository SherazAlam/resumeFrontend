import React from 'react'
import "./resume.css"
import { FaAddressBook } from "react-icons/fa/";
import { MdEmail } from "react-icons/md/";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai"

const ResumePreview = ({ fetchedData, forDownload, color, setColor }) => {

    // const [color, setColor] = useState("teal")

    return (
        <>
            <div className='colorSelections'>
                <div className='color' style={{ backgroundColor: 'teal' }} onClick={() => setColor('teal')}></div>
                <div className='color' style={{ backgroundColor: 'crimson' }} onClick={() => setColor('crimson')}></div>
                <div className='color' style={{ backgroundColor: '#EA745D' }} onClick={() => setColor('#EA745D')}></div>
                <div className='color' style={{ backgroundColor: 'darkolivegreen' }} onClick={() => setColor('darkolivegreen')}></div>
            </div>
            <div className='outlineDiv'>
                <div className='resumeContainer' ref={forDownload}>
                    <div className='basicInfo' style={{ borderBottom: `1px solid ${color}` }}>
                        <h1 className='name'>{fetchedData?.name ? fetchedData?.name : "Your name"}</h1>
                        <h4 className='role' style={{ color: color }}>{fetchedData?.role ? fetchedData?.role : "Your Role"}</h4>

                        <div className='basicDetails'>
                            <div className='basicDetail'>
                                <MdEmail style={{ color: color }}></MdEmail>
                                {fetchedData?.email ? fetchedData?.email : "Your email"}
                            </div>
                            <div className='basicDetail'>
                                <BsFillTelephoneFill style={{ color: color }}></BsFillTelephoneFill>
                                {fetchedData?.phone ? fetchedData?.phone : "Your phone"}
                            </div>
                            <div className='basicDetail'>
                                <FaAddressBook style={{ color: color }}></FaAddressBook>
                                {fetchedData?.address ? fetchedData?.address : "Your address"}
                            </div>
                            <div className='basicDetail'>
                                <AiFillLinkedin style={{ color: color }}></AiFillLinkedin>
                                {fetchedData?.linkedin ? fetchedData?.linkedin : "Your linkedin"}
                            </div>
                        </div>
                    </div>
                    <div className='summarySection' style={{ borderBottom: `1px solid ${color}` }}>
                        <h2 className='summaryTitle'>Summary</h2>
                        <p className='summaryParagraph'>{fetchedData?.summary ? fetchedData?.summary : "Your summary"}</p>
                    </div>
                    <div className='educationSection' style={{ borderBottom: `1px solid ${color}` }}>
                        <h2 className='educationTitle'>Education</h2>
                        <div className='educations'>
                            {fetchedData?.education ?
                                fetchedData?.education?.map((item) => {
                                    return (
                                        <div className='education' style={{ borderColor: color }}>
                                            <div className='degreeName'>{item.degree}</div>
                                            <div className='universityName' style={{ color: color }}>{item.university}</div>
                                            <div className='passingYear'>{item.year}</div>
                                        </div>
                                    )
                                }) : <li>Education 1...</li>}
                        </div>
                    </div>
                    <div className='experienceSection' style={{ borderBottom: `1px solid ${color}` }}>
                        <h2 className='experienceTitle'>Experience</h2>
                        <div className='experiences'>
                            {fetchedData?.experience ?
                                fetchedData?.experience?.map((item) => {
                                    return (
                                        <div className='experience' style={{ borderColor: color }}>
                                            <div className='degreeName'>{item.position}</div>
                                            <div className='universityName' style={{ color: color }}>{item.company}</div>
                                            <div className='passingYear'>{`${item.dates}`}</div>
                                            <h4>Responsibilities</h4>
                                            <ul>
                                                {item?.responsibilities && item?.responsibilities?.map((responsibility) => {
                                                    return (
                                                        <li style={{ width: "100%" }}>{responsibility}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    )
                                }) : <li>Experience 1...</li>}
                        </div>
                    </div>
                    <div className='experienceSection' style={{ borderBottom: `1px solid ${color}` }}>
                        <h2 className='experienceTitle'>Projects</h2>
                        <div className='experiences'>
                            {fetchedData?.projects ?
                                fetchedData?.projects?.map((item) => {
                                    return (
                                        <div className='experience' style={{ borderColor: color }}>
                                            <div className='universityName' style={{ color: color }}>{item.title || item.name}</div>
                                            <div className='degreeName'>{item.description}</div>

                                            {/* <div className='passingYear'>{`${item.start_date} - ${item.end_date}`}</div> */}
                                            <a className='degreeName' style={{ color: "black" }}>{item.link}</a>
                                            <ul>
                                                {item?.tools && item?.tools?.map((responsibility) => {
                                                    return (
                                                        <li style={{ width: "100%" }}>{responsibility}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    )
                                }) : <li>Experience 1...</li>}
                        </div>
                    </div>
                    <div className='skillsSection' style={{ borderBottom: `1px solid ${color}` }}>
                        <h2 className='skillTitle'>Skills</h2>
                        <div className='skills'>
                            <ul>
                                {fetchedData?.skills ?
                                    fetchedData?.skills?.map((item) => {
                                        return (
                                            <li>{item}</li>
                                        )
                                    }) :
                                    <li>Skill 1...</li>}

                            </ul>
                        </div>
                    </div>
                    <div className='languageSection' >
                        <h2 className='languageTitle'>Languages</h2>
                        <div className='languages'>
                            <ul>
                                {fetchedData?.languages?.map((item) => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResumePreview