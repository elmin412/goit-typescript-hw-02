import { ThreeCircles } from 'react-loader-spinner';
import style from "../Loader/Loader.module.css"


export default function Loader() {

    return (
        <>
            <b className={style.loader}  >
                <ThreeCircles
                    visible={true}
                    height="50"
                    width="50"
                    color="#4fa94d"
                    ariaLabel="three-circles-loading"
                    /></b>
        </>
        
    )
}