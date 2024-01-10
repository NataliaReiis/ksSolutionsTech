/* eslint-disable react/prop-types */

export default function ContentTeam(props){
    return(
        <> 
            <div className="section">
                        <div className="foto">
                         <img src={props.image} alt="" />
                        </div>
                        <div className="description-colabs">
                            <h3>{props.title}</h3>
                            <h4>{props.cargo}</h4>
                            <p>{props.description}</p>
                        </div>
                </div>
        </>
    )
}