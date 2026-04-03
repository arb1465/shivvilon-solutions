import { useState } from 'react'
import './Nalles.css'

import aasutosh from '/assets/aasutosh.jpg';
import akshat from '/assets/akshat.jpg';
import chahat from '/assets/chahat.jpg';
import darshit from '/assets/darshit.jpg';
import keval from '/assets/keval.jpg';
import ocean from '/assets/ocean.jpg';
import param from '/assets/param.jpg';
import parth_tita from '/assets/parth--tita.jpg';


const nalles_details = [
  {
    admission_no : 'U22CS109',
    name: "Aasutosh Baraiya",
    state: "Gujarat",
    dept: "Computer Science & Engineering",
    linkedin_id: "https://www.linkedin.com/in/arb1465/",
    insta_id: "https://www.instagram.com/arb_1465/",
    photo: aasutosh,
    isPlaced: true,
    company: "Accenture",
    package: "10.89 LPA",
  },
  {
    admission_no : 'U22CS023',
    name: "Param Pathak",
    state: "Gujarat",
    dept: "Computer Science & Engineering",
    photo: param,
    linkedin_id: "https://www.linkedin.com/in/param-pathak/",
    insta_id: "https://www.instagram.com/param._.pathak/",
    isPlaced: true,
    company: "Visa",
    package: "32 LPA",
  },
  {
    admission_no : 'U22EE046',
    name: "Parth Tita",
    state: "Gujarat",
    dept: "Electrical Engineering",
    photo: parth_tita,
    linkedin_id: "https://www.linkedin.com/in/parth-tita-58123b248/",
    insta_id: "https://www.instagram.com/tita.parth_/",
    isPlaced: false,
  },
  {
    admission_no : 'U22EE025',
    name: "Keval Hirapara",
    state: "Gujarat",
    dept: "Electrical Engineering",
    photo: keval,
    linkedin_id: "https://www.linkedin.com/in/keval-hirpara/",
    insta_id: "https://www.instagram.com/keval_._2003/",
    isPlaced: false,
  },
  {
    admission_no : 'U22EE106',
    name: "Ocean Jayant",
    state: "Uttar Pradesh",
    dept: "Electrical Engineering",
    photo: ocean,
    linkedin_id: "https://www.linkedin.com/in/ocean-jayant-469943212/",
    insta_id: "https://www.instagram.com/oceannn_19/",
    isPlaced: false,
  },
  {
    admission_no : 'U22EC008',
    name: "Darhit Desai",
    state: "Gujarat",
    dept: "Electronic & Communication Engineering",
    photo: darshit,
    linkedin_id: "https://www.linkedin.com/in/darshit-desai-70a345256/",
    insta_id: "https://www.instagram.com/darshit_333/",
    isPlaced: true,
    company: "Atlas Copco",
    package: "14 LPA",
  },
  {
    admission_no : 'U22CS034',
    name: "Akshat Sahu",
    state: "Uttar Pradesh",
    dept: "Computer Science & Engineering",
    photo: akshat,
    linkedin_id: "https://www.linkedin.com/in/akshatsahu25/",
    insta_id: "https://www.instagram.com/_akshu.25_/",
    isPlaced: true,
    company: "Publicis Sapient",
    package: "20 LPA",
  },
  {
    admission_no : 'U22EE099',
    name: "Chahat Bedi",
    state: "Madhya Pradesh",
    dept: "Electrical Engineering",
    photo: chahat,
    linkedin_id: "https://www.linkedin.com/in/chahatbedi099//",
    insta_id: "https://www.instagram.com/bediiiiiiiichahatttttt/",
    isPlaced: false,
  },
]

function Nalles() {

  const [nallas, setNallas] = useState(nalles_details)

  const [formData, setFormData] = useState({
    name: "",
    admission_no: "",
    state: "",
    dept: "",
    linkedin_id: "",
    insta_id: "",
    photo: "",
    isPlaced: false,
    company: "",
    package: ""
  })

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value)
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "isPlaced" ? value === "true" : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const firstName = formData.name.trim().split(" ")[0].toLowerCase();

    const finalData = {
      ...formData,
      insta_id: `https://www.instagram.com/${formData.insta_id}`,
      linkedin_id: `https://www.linkedin.com/in/${formData.linkedin_id}`,
      photo: `./assets/${firstName}.jpg`
    };

    console.log(finalData)

    setNallas([
      ...nallas,
      finalData
    ])

    setFormData({
      name: "",
      admission_no: "",
      state: "",
      dept: "",
      linkedin_id: "",
      insta_id: "",
      photo: "",
      isPlaced: false,
      company: "",
      package: ""
    });
  }

  return (
    <>
    <div className="container">
      <div className="lists">
        {
          nallas.map(nalla => {
            return (
              <div className="card" key={nalla.admission_no}>

                <div className="photo-name-info">
                  <div className="name-info">
                    <div className="name">{nalla.name}</div>
                    <div className="id">{nalla.admission_no}</div>
                  </div>
                  <img src={nalla.photo} alt={nalla.name} className="avatar" />
                </div>

                <div className="info"><strong>Department:</strong> {nalla.dept}</div>
                <div className="info"><strong>State:</strong> {nalla.state}</div>

                <a href={nalla.linkedin_id} target="_blank" className="insta">
                  View LinkedIn
                </a>
                <br />
                <a href={nalla.insta_id} target="_blank" className="insta">
                  View Instagram
                </a>

                {nalla.isPlaced && 
                  <div className="placed">
                    Placed at {nalla.company} with <b>{nalla.package}</b> package.
                  </div>
                }

                {!nalla.isPlaced && (
                  <div className="not-placed">Not Placed Yet</div>
                )}
              </div>
            )
          })
        }
      </div>
      <div className="get-data">
        <h1>Add details</h1>
        <form action="">
          <label htmlFor="name">Name:   </label>
          <input onChange={handleChange} value={formData.name} type="text" name='name' id='name' required/>
          
          <label htmlFor="admission_no">Admission No</label>
          <input onChange={handleChange} value={formData.admission_no} type="text" name='admission_no' id='admission_no' required/>

          <label htmlFor="dept">Department</label>
          <select onChange={handleChange} value={formData.dept} type="text" name='dept' id='dept' required>
            <option value="">Select Department</option>
            <option value="Computer Science & Engineering">CSE</option>
            <option value="Electrical Engineering">EE</option>
            <option value="Electronic & Communication Engineering">ECE</option>
            <option value="Mechanical Engineering">ME</option>
            <option value="Civil Engineering">CE</option>
            <option value="MSC Mathematics">MSC Maths</option>
          </select>

          <label htmlFor="state">State</label>
          <select onChange={handleChange} value={formData.state} type="text" name='state' id='state' required>
            <option value="">Select State</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Rajasthan">Rajasthan</option>
          </select>

          <label htmlFor="linkedin_id">LinkedIn Username</label>
          <input onChange={handleChange} value={formData.linkedin_id} type="text" name='linkedin_id' id='linkedin_id' required/>

          <label htmlFor="insta_id">Instagram Username</label>
          <input onChange={handleChange} value={formData.insta_id} type="text" name='insta_id' id='insta_id'/>

          <div className="place-inp">
            <label>Is Placed: </label>
            <label>
              <input onChange={handleChange} type="radio" name="isPlaced" value="true" checked={formData.isPlaced === true}  />
              Yes
            </label>

            <label>
              <input onChange={handleChange} type="radio"  name="isPlaced"  value="false"  checked={formData.isPlaced === false} />
              No
            </label>
          </div>

          {formData.isPlaced && (
            <div className="place">
              <label htmlFor="company">Company</label>
              <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} />

              <label htmlFor="package">Package</label>
              <input type="text" name="package" id="package" value={formData.package} onChange={handleChange} />
            </div>
          )}

          <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Nalles
