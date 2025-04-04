import styles from './MainPage.module.scss';

import SvgPlanetClip from '../../components/SvgPlanetClip/SvgPlanetClip';
import Button from '../../ui/Button/Button';
import Benefits from '../../components/Benefits/Benefits';
import Title from '../../components/Title/Title';

const MainPage = () => {
  return (
    <main className={styles.mainPage}>
      <section className={styles.banner}>
        <div className={styles.clipPlanet}>
          <div className={styles.content}>
            <div className={styles.leftSide}>
              <Title />
              <div className={styles.buttonContainer}>
                <Button>Начать путешествие</Button>
                <div className={styles.line}></div>
              </div>
            </div>
            <div className={styles.rightSide}>
              <Benefits />
            </div>
          </div>
          <SvgPlanetClip id="planet-clip" />
        </div>
      </section>
      {/* other content */}
    </main>
  );
};

export default MainPage;
