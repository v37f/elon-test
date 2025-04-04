import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import Header from '../Header/Header';
import styles from './App.module.scss';
import { MAIN_PAGE_ROUTE } from '../../utils/constants';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route index path={MAIN_PAGE_ROUTE} element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
