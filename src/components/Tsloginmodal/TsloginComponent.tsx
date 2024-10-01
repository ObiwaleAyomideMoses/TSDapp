import '../../components/Tsloginmodal/Tsconnect.css';

import React from 'react';
import TsConnectionRequest from '../TsConnection/TsconnectionModal';
import TSConnectProvider from './context/ConnectContextProvider';
import ExampleComponent from '../TsTransactionAuth/Examplefile';
import StETHWithdraw from '../successModal/MainWithdraw';

interface TownesquareConnectProps {
  children: React.ReactNode;
  loginOption?: Array<'externalwalletLogin' | 'emailLogin'>;
  displayErrorsOnModal?: boolean;
  showModal: boolean;
  emailLoginFunction: () => void;
  metaMaskLoginFunction: () => void;
  phantomLoginFunction: () => void;
  onClose: () => void;
  companylogo?: string;
  companytitle?: string;
  companyurl?: string;
  tokenlogo?: string;
}

const TownesquareConnect: React.FC<TownesquareConnectProps> = ({
  children,
}) => {
  return (
    <TSConnectProvider>
      
      {children}
      

      <TsConnectionRequest />
      <ExampleComponent />
     
    </TSConnectProvider>
    
  );
};

export default TownesquareConnect;
