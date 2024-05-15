import styles from './main.module.css'
import userSvg from '../assets/user.svg'
import minusSvg from '../assets/minus.svg'
import logoSvg from '../assets/Logo.png'

function Main() {
    return (
      <div className={styles.card}>
        <div className={styles.card_Plan}>
            <div className={styles.smartvest_description}>
                <div className={styles.description}>امن</div>
                <div className={styles.smartvest}>اسمارت وست پلتفرمی</div>
            </div>
            <div className={styles.plan}>
                <div className={styles.shape}>
                    <img src={logoSvg} className={styles.logo} alt="logo" />
                </div>
                <div className={styles.icon_plan}></div>
            </div>
            <div className={styles.button_plan}>
                <div className={styles.button_text}>پشتیبانی</div>
                <div>
                    <img className={styles.button_icon} src={minusSvg}/>
                </div>
                <div className={styles.button_text}>قوانین و مقررات</div>
            </div>
        </div>
        <div className={styles.card_fill}>
            <div className={styles.card_text}>
                <div className={styles.text_title}>همین حالا ثبت نام کنید</div>
                <div className={styles.text_description}>اطلاعات شخصی فرم را وارد کنید</div>
            </div>
            <div className={styles.fill_box}>
                <div className={styles.fill}>
                    <div className={styles.text_fill}>نام</div>
                    <img className={styles.icon_fill} src={userSvg}/>
                </div>
                <div className={styles.fill}>
                    <div className={styles.text_fill}>نام</div>
                    <img className={styles.icon_fill} src={userSvg}/>
                </div>
                <div className={styles.fill}>
                    <div className={styles.text_fill}>نام</div>
                    <img className={styles.icon_fill} src={userSvg}/>
                </div>
                <div className={styles.fill}>
                    <div className={styles.text_fill}>نام</div>
                    <img className={styles.icon_fill} src={userSvg}/>
                </div>
                <div className={styles.fill}>
                    <div className={styles.text_fill}>نام</div>
                    <img className={styles.icon_fill} src={userSvg}/>
                </div>
                <div className={styles.fill}>
                    <div className={styles.text_fill}>نام</div>
                    <img className={styles.icon_fill} src={userSvg}/>
                </div>
            </div>
            <div className={styles.button}>
                <div className={styles.button_sign_up}>
                    <div className={styles.sign_up_text}>ثبت نام</div>
                </div>
                <div className={styles.button_login}>
                    <div className={styles.login_text}>ورود</div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Main;