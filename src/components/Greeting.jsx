import React ,{Fragment} from "react"
function Greeting(props) {
    return (
    <Fragment>
     <h1>Hello, {props.name} {props.surname}!</h1>
     <h2>This text was not there originally</h2>
     </Fragment>
    )
}
export default Greeting
