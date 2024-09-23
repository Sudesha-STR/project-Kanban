import React from 'react'

import './Card.css'
import Low from '../../Assets/Images/No-priority.svg'
import Medium from '../../Assets/Images/Low.svg'
import High from '../../Assets/Images/Medium.svg'
import HighUrgent from '../../Assets/Images/High.svg'
import VHigh from '../../Assets/Images/VHighUrgent.svg'

export default function Card(props) {
  return (
    <>
        <div className="card-container">
            <div className="card-id-wrapper">
                <div className="card-id">{props.cardDetails.id}</div>
                <div className="card-profile">
                    <div className="card-profile-initial">{props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}</div>
                    <div className={props.cardDetails.userObj.available ?"card-profile-initial-available card-profile-initial-available-true" : "card-profile-initial-available"}></div>
                </div>
            </div>
            <div className="card-title">
                {props.cardDetails.title}
            </div>
            <div className="card-tag">
                {
                    {
                        0: <div className="card-tag-icon"><img src={Low} alt="low" width="22" height="22" viewBox="0 0 1024 1024" /></div>,
                        1: <div className="card-tag-icon"><img src={Medium} alt="medium" width="22" height="22" viewBox="0 0 1024 1024" /></div>,
                        2: <div className="card-tag-icon"><img src={High} alt="low" width="22" height="22" viewBox="0 0 1024 1024" /></div>,
                        3: <div className="card-tag-icon"><img src={HighUrgent} alt="low" width="22" height="22" viewBox="0 0 1024 1024" /></div>,
                        4: <div className="card-tag-icon"><img src={VHigh} alt="low" width="22" height="22" viewBox="0 0 1024 1024" /></div>
                    }[props.cardDetails.priority]
                }

                {
                    props.cardDetails.tag.map((tag) => {
                        return(
                            <div className="card-tag-box">
                                <div className="card-tag-title">{tag}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
