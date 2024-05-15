import styles from './footer.module.css';
import mySvg from '../assets/send-2.svg';
import instagramSvg from '../assets/instagram.svg';
import youtubeSvg from '../assets/youtube.svg';


function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_box}>
      <img className={styles.Footer_svg} src={mySvg}/>
      <div>SmartVest.org</div>
      </div>
      <div className={styles.footer_box}>
      <img className={styles.Footer_svg} src={instagramSvg}/>
      <div>SmartVest.org</div>
      </div>
      <div className={styles.footer_box}>
      <img className={styles.Footer_svg} src={youtubeSvg}/>
      <div>SmartVest.org</div>
      </div>
    </div>
  );
}

export default Footer;