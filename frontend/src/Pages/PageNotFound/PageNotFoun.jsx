import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <>
            <Link to={"/"} style={{color: "white"}}>Вернуться</Link>
            <h1 style={{color: "white"}}>Page not found</h1>
        </>
    );
}
 
export default PageNotFound;