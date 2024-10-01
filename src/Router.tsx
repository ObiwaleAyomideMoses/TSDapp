import './App.css';
import TownesquareConnect from './components/Tsloginmodal/TsloginComponent';
import { Route, Routes } from 'react-router-dom';
import StakingModal from './components/StakeLido/Staking';
import SuccessModal from './components/successModal/successmodal';
import TSLoginModalComponent from './components/Tsloginmodal/TSLoginModalComponent';
import StETHWithdraw from './components/successModal/MainWithdraw';
import InitialModal from './components/popup/initialpopup';


export const Router = () => {
  return (
    <div>
      <TownesquareConnect
        loginOption={['emailLogin']}
        displayErrorsOnModal={true}
        showModal={true}
        emailLoginFunction={() => console.log('Email login')}
        metaMaskLoginFunction={() => console.log('MetaMask login')}
        phantomLoginFunction={() => console.log('Phantom login')}
        onClose={() => console.log('Close modal')}
        companylogo="https://www.townesquare.xyz/assets/img/logo.svg"
        companytitle="Lido Finance"
        companyurl="https://lido.fi/"
      >
        <Routes>
          <Route
            path=":client_name/:exchange/:client_id"
            element={
              <TSLoginModalComponent
                loginOption={['emailLogin']}
                displayErrorsOnModal={true}
                showModal={true}
                emailLoginFunction={() => console.log('Email login')}
                metaMaskLoginFunction={() => console.log('MetaMask login')}
                phantomLoginFunction={() => console.log('Phantom login')}
                onClose={() => console.log('Close modal')}
              />
            }
          />

          <Route path="/stake/*" element={<StakingModal />} />
          <Route path="/successmodal/*" element={<SuccessModal />} />
          <Route
            path="/withdraw/*"
            element={
              <InitialModal
                onCancel={function (): void {}}
                ontext={''}
                progress={0}
              />
            }
          />
        </Routes>
      </TownesquareConnect>
    </div>
  );
};
