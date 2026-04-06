import Comp3_5 from "./Comp3_5"
// eslint-disable-next-line no-unused-vars
import { nallasContext } from '../context/nallasContext'

const nalles_details = [
  {
    admission_no: 'U22CS109',
    name: "Aasutosh Baraiya",
    state: "Gujarat",
    dept: "Computer Science & Engineering",
    linkedin_id: "https://www.linkedin.com/in/arb1465/",
    insta_id: "https://www.instagram.com/arb_1465/",
    isPlaced: true,
    company: "Accenture",
    package: "10.89 LPA",
  },
  {
    admission_no: 'U22CS023',
    name: "Param Pathak",
    state: "Gujarat",
    dept: "Computer Science & Engineering",
    linkedin_id: "https://www.linkedin.com/in/param-pathak/",
    insta_id: "https://www.instagram.com/param._.pathak/",
    isPlaced: true,
    company: "Visa",
    package: "32 LPA",
  },
  {
    admission_no: 'U22EE046',
    name: "Parth Tita",
    state: "Gujarat",
    dept: "Electrical Engineering",
    linkedin_id: "https://www.linkedin.com/in/parth-tita-58123b248/",
    insta_id: "https://www.instagram.com/tita.parth_/",
    isPlaced: false,
  },
  {
    admission_no: 'U22EE025',
    name: "Keval Hirapara",
    state: "Gujarat",
    dept: "Electrical Engineering",
    linkedin_id: "https://www.linkedin.com/in/keval-hirpara/",
    insta_id: "https://www.instagram.com/keval_._2003/",
    isPlaced: false,
  },
  {
    admission_no: 'U22EE106',
    name: "Ocean Jayant",
    state: "Uttar Pradesh",
    dept: "Electrical Engineering",
    linkedin_id: "https://www.linkedin.com/in/ocean-jayant-469943212/",
    insta_id: "https://www.instagram.com/oceannn_19/",
    isPlaced: false,
  },
  {
    admission_no: 'U22EC008',
    name: "Darhit Desai",
    state: "Gujarat",
    dept: "Electronic & Communication Engineering",
    linkedin_id: "https://www.linkedin.com/in/darshit-desai-70a345256/",
    insta_id: "https://www.instagram.com/darshit_333/",
    isPlaced: true,
    company: "Atlas Copco",
    package: "14 LPA",
  },
  {
    admission_no: 'U22CS034',
    name: "Akshat Sahu",
    state: "Uttar Pradesh",
    dept: "Computer Science & Engineering",
    linkedin_id: "https://www.linkedin.com/in/akshatsahu25/",
    insta_id: "https://www.instagram.com/_akshu.25_/",
    isPlaced: true,
    company: "Publicis Sapient",
    package: "20 LPA",
  },
  {
    admission_no: 'U22EE099',
    name: "Chahat Bedi",
    state: "Madhya Pradesh",
    dept: "Electrical Engineering",
    linkedin_id: "https://www.linkedin.com/in/chahatbedi099//",
    insta_id: "https://www.instagram.com/bediiiiiiiichahatttttt/",
    isPlaced: false,
  },
]


function Comp2_5() {
  return (
    <div>
      <nallasContext.Provider value={nalles_details}>
        <br />
        <h3>This is the comp-2.5</h3>
        <Comp3_5 />
      </nallasContext.Provider>
    </div>
  )
}

export default Comp2_5
