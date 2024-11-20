import { typoData } from "../../Utils/data";
import { Header } from "../Header";
import { Sns } from "../Sns";
import { Typo } from "../Typo";
import './style.scss';
  
export const MainContainer=() => {
    return(
    <div className="main_cont">
        <Header />
        <div className="contents">
            <div className="main_element">
                <span className="typo">
                    <p>FrontEnd</p>
                    <p>Developer ;</p>
                </span>
                <div className="circle"></div>
            </div>
            <div className="main_element_typo">
                <Typo typo={typoData} />
                <span className="typo">
                    <p>be better</p>
                </span>
            </div>
        </div>
        <Sns className={'sns_main'}/>
    </div>
    );
}