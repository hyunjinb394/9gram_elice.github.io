import Back from '@assets/Back';
import Drawer from '@assets/Drawer';
import Qicon from '@assets/Qicon';
import Toast from '@components/UI/Toast';
import ToastText from '@components/UI/ToastText';
import styles from '@components/layout/layout.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopBarPropsType } from 'typings/propTypes';

const TopBar = ({ home, title, back, qIcon, icon }: TopBarPropsType) => {
  const [showToast, setShowToast] = useState(false);
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };

  const onClickQicon = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowToast(true);
    setPosition((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
  };

  //onClick에 record/날짜일때

  return (
    <div className={styles.top}>
      {!home && (
        <div
          className={`${styles.back} ${back ? '' : styles['non-visible']}`}
          onClick={onClickBack}
        >
          <Back />
        </div>
      )}

      <div className={styles.title_wrapper}>
        <p className={home ? styles['name'] : styles.title}>{title}</p>
        <div className={qIcon ? styles.icon : styles['non-visible']}>
          <Qicon onClick={onClickQicon} />
        </div>
      </div>
      <Toast show={showToast} position={position} setShow={setShowToast}>
        <ToastText>안뇽</ToastText>
      </Toast>

      <div
        className={`${styles.icon_wrapper} ${icon ? '' : styles['non-visible']}`}
      >
        <Drawer />
      </div>
    </div>
  );
};

export default TopBar;
