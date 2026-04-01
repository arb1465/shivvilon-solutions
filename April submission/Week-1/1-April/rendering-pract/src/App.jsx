import './App.css'

const nalles_details = [
  {
    admission_no : 'U22CS109',
    name: "Aasutosh Baraiya",
    state: "Gujarat",
    dept: "Computer Science & Engineering",
    insta_id: "https://www.instagram.com/arb_1465/",
    isPlaced: true,
    company: "Accenture",
    package: "10.89 LPA",
  },
  {
    admission_no : 'U22CS023',
    name: "Param Pathak",
    state: "Gujarat",
    dept: "Computer Science & Engineering",
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
    insta_id: "https://www.instagram.com/tita.parth_/",
    isPlaced: false,
  },
  {
    admission_no : 'U22EE025',
    name: "Keval Hirapara",
    state: "Gujarat",
    dept: "Electrical Engineering",
    insta_id: "https://www.instagram.com/keval_._2003/",
    isPlaced: false,
  },
  {
    admission_no : 'U22EE106',
    name: "Ocean Jayant",
    state: "Uttar Pradesh",
    dept: "Electrical Engineering",
    insta_id: "https://www.instagram.com/oceannn_19/",
    isPlaced: false,
  },
  {
    admission_no : 'U22EC008',
    name: "Darhit Desai",
    state: "Gujarat",
    dept: "Electronic & Communication Engineering",
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
    insta_id: "https://www.instagram.com/bediiiiiiiichahatttttt/",
    isPlaced: false,
  },
]

function App() {

  return (
    <>
    <div className="container">
      <h1>Nalles details</h1>
      <div className="lists">
        {
          nalles_details.map(nalla => {
            return (
              <div className="card" key={nalla.admission_no}>
                <div className="name">{nalla.name}</div>
                <div className="id">{nalla.admission_no}</div>

                <div className="info"><strong>Department:</strong> {nalla.dept}</div>
                <div className="info"><strong>State:</strong> {nalla.state}</div>

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
    </div>
    </>
  )
}

export default App
