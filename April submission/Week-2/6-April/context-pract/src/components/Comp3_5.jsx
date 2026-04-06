import React, { useContext } from 'react'
import { nallasContext } from '../context/nallasContext'
import './Comp3_5.css'

function Comp3_5() {
  const details = useContext(nallasContext)

  return (
    <div>
      <h4>This is comp-3.5</h4>
      here is the details of Nalles from comp-2.5   :
      <br />
      <div className="lists">
        {
          details.map(nalla => {
            return (
              <div className="card" key={nalla.admission_no}>

                <div className="name">{nalla.name}</div>
                <div className="id">{nalla.admission_no}</div>

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
    </div>
  )
}

export default Comp3_5
