import React from 'react';
import '../TsConnection/Tsconnection.css';
import { useTSConnect } from '../Tsloginmodal/context/ConnectContextProvider';
import { useNavigate } from 'react-router-dom';
import EtherLogo from '../../assets/svg/etherlogo.svg';
import Mark from '../../assets/svg/mark.svg';
import LidoFinace from '../../assets/svg/ludomain.svg'
interface TsConnectionRequestProps {
  companylogo?: string;
  companytitle?: string;
  companyurl?: string;
  tokenlogo?: string;
  // onContinue: () => void;
  // onCancel?: () => void;
  // children?: React.ReactNode;
}

const TsConnectionRequest: React.FC<TsConnectionRequestProps> = ({
  companylogo = 'src/assets/svg/ludomain.svg',
  companytitle = 'Lido Finance',
  companyurl = 'https://lido.fi/',
  // tokenlogo,
  // onContinue,
  // onCancel,
  // children,
}) => {
  const {
    address,
    setShowConnectRequestModal,
    showConnectRequestModal,
    setConnected,
  } = useTSConnect();
  const pubAddress = address.toString();
  const navigate = useNavigate();
  // console.log('======== wallet address here ========');
  // const handleCancel = () => {
  //   if (onCancel) {
  //     onCancel();
  //   } else {
  //     //   window.location.href = "https://metamask.io";
  //   }
  // };

  // const handleContinue = () => {
  //   onContinue();
  //   window.location.href = 'https://phantom.app/';
  // };

  return (
    <div
      className={`modal-overlay2 ${showConnectRequestModal ? 'visible' : ''}`}
    >
      <div className="connect-container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="https://www.townesquare.xyz/assets/img/logo.svg"
            alt="Townesquare Logo"
            className="app-logo"
          />
          <p
            style={{
              fontSize: '18px',
              fontWeight: '700',
              lineHeight: '22px',
              paddingLeft: 2,
            }}
          >
            townesquare
            <br />
            connect
          </p>
        </div>

        <div className="connection-request">
          <h2 className="request-text">Connection request</h2>
          <img src={LidoFinace} alt={companytitle} className="icon" />
          <h3 className="app-name">{companytitle}</h3>
          {companyurl && <p className="url">{companyurl}</p>}
        </div>

        <h4 className="approve-text">Approve with</h4>
        <div className="account-box">
          {/* {tokenlogo && (
            <img src='src/assets/svg/etherlogo.svg' alt="Token Logo" />
          )} */}
          <img src={EtherLogo} alt="Token Logo" />
          <div className="address">
            <p className="account-text">
              Main account
              <br />
              {pubAddress}
            </p>
          </div>
        </div>

        <p className="permission-text">This app would like to</p>
        <div className="permissions">
          <ul>
            <li className="permission-item">
              <img src={Mark} alt="check" className="check-icon" />
              <span>View your balance and activity</span>
            </li>
            <li className="permission-item">
              <img src={Mark} alt="check" className="check-icon" />
              <span>Request approval for transactions</span>
            </li>
          </ul>
        </div>

        {/* {children && <div className="custom-children">{children}</div>} */}

        <div className="footer">
          <button
            className="cancel-button"
            onClick={() => {
              setShowConnectRequestModal(false);
            }}
          >
            Cancel
          </button>
          <button
            className="continue-button"
            onClick={() => {
              setShowConnectRequestModal(false);
              setConnected(true);
              navigate('/stake');
            }}
          >
            Continue
          </button>
        </div>

        <p className="agreement-text">
          By signing up, you agree to the{' '}
          <a href="#" className="link">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="link">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TsConnectionRequest;
