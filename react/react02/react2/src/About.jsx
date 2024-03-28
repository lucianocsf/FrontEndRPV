import {Link} from "react-router-dom"
export function About(){
    return(


        <div>
                    <h1>Sobre nos</h1>
            <ul>
                {/* <li><a href="./History">Nossa História</a></li> */}
                <li><Link to ='./History'>Nossa Historia</Link>/</li>
            </ul>
        </div>
    )
}
