
import './App.css';
import axios from 'axios';
import prompt from "./prompt.json";
import { useEffect, useRef, useState } from 'react';
import ResumePreview from './ResumePreview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ResumeEditor from './ResumeEditor';
import UserInfo from "./UserInfo"
import UserSummary from "./UserSummary"


function App() {

  const [fetchedData, setFetchedData] = useState("");
  const resumeRef = useRef();
  const [pngUrl, setPngUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("teal");
  const [cv, setCv] = useState("");
  const [userData, setUserData] = useState({})
  const [userSummary, setUserSummary] = useState({
    name: "Fatima Ali",
    role: "Network Administrator",
    address: "House 34, Jinnah Garden, Islamabad",
    email: "fatima@gmail.com",
    phone: "+92 372 382982"
  })

  const handleGenerateButton = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post("http://localhost:8080/textResume", userData);
      console.log(result.data);
      setFetchedData(result.data);
      downloadPng();
      setLoading(false);
    }
    catch (e) {
      console.error(e.message)
      setLoading(false);
    }

  }

  const handleSummaryGenerateButton = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post("http://localhost:8080/summaryResume", userSummary);
      console.log(result.data);
      setFetchedData(result.data);
      downloadPng();
      setLoading(false);
    }
    catch (e) {
      console.error(e.message)
      setLoading(false);
    }

  }

  const handleCvGenerateButton = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("cv", cv);
    try {
      const result = await axios.post("http://localhost:8080/pdfResume", formData);
      console.log(result.data);
      setFetchedData(result.data);
      setLoading(false);
      downloadPng();
    } catch (e) {
      console.error(e.message)
      setLoading(false);
    }

  }

  const downloadResume = () => {
    const input = resumeRef.current;
    html2canvas(input).then((canvas) => {
      // console.log("Canvas", canvas)
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;
      pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save("Cv.pdf")
    })
  }

  const resetFetchedData = () => {
    setFetchedData("");
  }

  const downloadPng = () => {
    const input = resumeRef.current;
    html2canvas(input).then((canvas) => {
      // console.log("Canvas", canvas)
      const imgData = canvas.toDataURL("image/png");
      setPngUrl(imgData);
    })
  }

  useEffect(() => {
    console.log(prompt);
    console.log(fetchedData);
    downloadPng();
  }, [fetchedData, color])

  useEffect(() => {
    if (cv !== "") {
      handleCvGenerateButton();
    }

  }, [cv])

  useEffect(() => {
    console.log(userData)

  }, [userData])


  return (
    <div className="App">
      <div className='header'>
        <h1>Resume Builder</h1>
        {!fetchedData && <> <UserInfo fetchedData={userData} setFetchedData={setUserData}></UserInfo>
          <p> Or </p>
          <UserSummary fetchedData={userSummary} setFetchedData={setUserSummary}></UserSummary>

        </>}


        {loading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> :
          <>
            {fetchedData ? <button className='generateButtons' onClick={resetFetchedData}>Generate Another CV</button> :
              <>
                <button disabled={loading} className='generateButtons' onClick={handleSummaryGenerateButton}>Generate From Your Summary</button>
                <button disabled={loading} className='generateButtons' onClick={handleGenerateButton}>Generate From Job Description</button>
              </>
            }

            <button disabled={loading} className='generateButtons'> <label htmlFor='uploadCv'>Generate From CV</label></button>
            <input id="uploadCv" type='file' style={{ display: 'none' }} onChange={(e) => setCv(e.target.files[0])}></input>
          </>}

      </div>
      {fetchedData && <ResumeEditor fetchedData={fetchedData} setFetchedData={setFetchedData}></ResumeEditor>}
      <ResumePreview color={color} setColor={setColor} fetchedData={fetchedData} forDownload={resumeRef}></ResumePreview>
      <button className="downloadButton" onClick={downloadResume}>Download PDF</button>
      <a href={pngUrl} download><button className="downloadButton">Download PNG</button></a>
    </div>
  );
}

export default App;
