import React, {useState} from 'react';
import styles from './NavBar.module.css';
import searchicon from '../../images/search-259.svg';
import ham from '../../images/ham.svg';
import user from '../../images/user-560.svg';


function NavBar() {

    const [open, setOpen] = useState(false);
    const [menuPopUp, setmenuPopUp] = useState(false);

  return (
<div className={styles.container}>
    <div className={styles.subcontainer}>
        <div className={styles.logo}></div>
        <div className={styles.navMenu}>
            <div className={styles.menuList}>
                <button className= {styles.placeMenu} onClick={()=>{setmenuPopUp(!menuPopUp)}} > 어디든지 </button>
                <span className={styles.spaceBar}></span>
                <button className={styles.dateMenu}>언제든 일주일</button>
                <span className={styles.spaceBar}></span>
                <button className={styles.guestMenu}>게스트 추가
                    <div className={styles.searchBtn}>
                        <img src={searchicon} />
                    </div>
                </button>
            </div>
        </div>
        <div className={styles.myMenuContainer} onClick={()=>{setOpen(!open)}}>
            <div className={styles.myBtn}>
                <div className={styles.myHamBtn}>
                    <img className={styles.ham} src={ham} />
                </div>
                <div className={styles.myPageBtn}>
                    <img className={styles.user} src={user} />
                </div>
            </div>
        </div>
        {/* <div className={`${styles.container1} ${styles.container2}`}> */}
        <div className={`$styles.dropDownMenu ${open? styles.active : styles.inactive}`}>
                <ul>
                    <DropDownItem text = {"회원가입"}/>
                    <DropDownItem text = {"로그인"}/>
                    <hr />
                    <DropDownItem text = {"여행의 동반자"}/>
                    <DropDownItem text = {"패키지 호스팅하기"}/>
                    <DropDownItem text = {"고객센터"}/>
                </ul>
        </div>
    </div>
        {/* <div className={`$styles.popUpMenu ${open? styles.popUpActive : styles.popUpInactive}`}>
            <div className={`$styles.popUpMenu ${menuPopUp? styles.popUpActive : styles.popUpInActive}`}>
                    <PopUpItem text = {'hihi'} />
            </div>
        </div> */}
        {menuPopUp && (
            <div className={styles.card}>
                <div className={styles.subMenuList}>
                <div className= {styles.placeMenu} onClick={()=>{setmenuPopUp(!menuPopUp)}} > 여행지 <span className={styles.subTitle}>여행지 검색</span></div>
                <button className={styles.checkin}>체크인<span className={styles.subTitle}>날짜입력</span></button>
                <button className={styles.checkout}>체크아웃<span className={styles.subTitle}>날짜입력</span></button>
                <span className={styles.spaceBar}></span>
                <button className={styles.traveling}>게스트 추가
                    <div className={styles.searchBtn2}>
                        <img src={searchicon} />
                        <span className={styles.subTitle2}>검색</span>
                    </div>
                </button>
            </div>
            </div>
        )}
</div>

  );
}

function DropDownItem(props) {
    return (
        <li className = 'dropdownItem'>
            <a> {props.text} </a>
        </li>
    )
}

// function PopUpItem(props) {
//     return (
//         <div className={`styles.${props.text}`}>ㅎㅇㅎㅇㅎㅇ </div>
//     )
// }

export default NavBar;