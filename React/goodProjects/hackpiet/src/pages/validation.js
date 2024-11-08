import React, { useState ,  useRef} from "react";
import "../css/validation.css"
import logo from "../logo.png"
import axios from "axios";
import exclamation from "../exclamation.png"
import tick from "../check.png"


const CertificateVerification = () => {
  const candidateNameRef = useRef(null);
  const certificationNumberRef = useRef(null);
  const [src , setSrc] = useState(null)
  const [present , setPresent] = useState(false)

    let data = "No member found"
    let img = exclamation

  const [response , setResponse] = React.useState([data , img])

  const handleSubmit = async(e) => {
    e.preventDefault();
    const name = candidateNameRef.current.value;
    const certificateNumber = certificationNumberRef.current.value;



    try{
        const imgSrc = await axios.post("https://hackpietbackend-8267t8xm.b4a.run/api/certificates/validate" , {name , certificateNumber})
        // console.log(imgSrc.data)
        // setSrc(imgSrc.data.cerificateSrc)

        console.log(imgSrc)
        setPresent(true)
        try {
          setResponse([imgSrc?.data , tick])
        } catch (error) {
          console.log(error)
        }
    }catch(error){
      console.log(error)
      setPresent(true)
      setResponse([error?.response?.data || "No Member Found" , exclamation])
    }

    console.log(src)
    

    e.target.reset();
  };
  const handleDownload = async () => {
    try {
      const response = await axios.get(src, {
        responseType: "blob", 
      });
      const blob = new Blob([response.data], { type: "image/png" });

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "certificate.png"; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); 
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log("Download failed:", error);
    }
  };

  return (
    <div className="verify-certificates">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo_img"></img>
        </div>
        <span className="brand">H4CKP13T</span>
      </header>
      <main className="container">
        <h1>Verify Certificates</h1>
        <div className="content">

          {/* <div className="certificate-area">


            { present &&  
              <img src={src} alt ="certificate"></img>
            }

            {    present &&  
              <div className="download_area">
                <button onClick={handleDownload} >Download</button>
              </div>
            }
          </div> */}


          <div className="form-area">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="candidateName">Candidate Name</label>
                <input 
                  type="text" 
                  id="candidateName" 
                  name="candidateName" 
                  ref={candidateNameRef}
                  required
                />
              </div>
              <div>
                <label htmlFor="certificationNumber">Certification Number</label>
                <input 
                  type="text" 
                  id="certificationNumber" 
                  name="certificationNumber" 
                  ref={certificationNumberRef}
                  required
                />
              </div>
          
              <button type="submit">Submit</button>


              {      present &&   
              <div className="result_area">
                <div className="image_area">
                  <img src={response[1]} alt="result_img"></img>
                </div>
                <div className="response_area">
                  <p>{response[0]}</p>
                </div>
              </div>
              }


            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
export default CertificateVerification;