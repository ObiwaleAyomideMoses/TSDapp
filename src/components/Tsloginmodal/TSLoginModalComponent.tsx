import React from 'react';
import LoginButton from './ContinueButton';
import './Tsconnect.css';
import { useTSConnect } from './context/ConnectContextProvider';
import { useParams } from 'react-router-dom';
interface TownesquareConnectProps {
  loginOption?: Array<'externalwalletLogin' | 'emailLogin'>;
  displayErrorsOnModal?: boolean;
  showModal: boolean;
  emailLoginFunction: () => void;
  metaMaskLoginFunction: () => void;
  phantomLoginFunction: () => void;
  onClose: () => void;
}

const TSLoginModalComponent: React.FC<TownesquareConnectProps> = ({
  loginOption = [], // Defaults to an empty array to show both options
  displayErrorsOnModal = false,
  showModal,
}) => {
  const { showConnectModal } = useTSConnect();
  const { client_id } = useParams();

  console.log(`client_id:${client_id}`);
  if (!showModal) return null;

  // const handleGoogleLogin = () => {
  //   emailLoginFunction();
  //   window.location.href = 'https://townesquare.xyz';
  // };

  // const handleMetaMaskLogin = () => {
  //   metaMaskLoginFunction();
  //   window.location.href = 'https://metamask.io';
  // };

  // const handlePhantomLogin = () => {
  //   phantomLoginFunction();
  //   window.location.href = 'https://phantom.app/';
  // };

  const showEmailLogin =
    loginOption.length === 0 ||
    loginOption.some((option) => option === 'emailLogin');
  const showExternalWalletLogin =
    loginOption.length === 0 ||
    loginOption.some((option) => option === 'externalwalletLogin');

  return (
    <div className={`modal-overlay2 ${showConnectModal ? 'visible' : ''}`}>
      <div className="login-container">
        <p
          style={{
            fontSize: '29px',
            fontWeight: 500,
            lineHeight: '36.54px',
            textAlign: 'center',
            marginBottom: '10px',
          }}
        >
          Login or Sign up
        </p>

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

        {/* Email Login */}
        {showEmailLogin && (
          <LoginButton
            title="Continue with Google"
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
            client_id={client_id}
          />
        )}

        {/* Terms and Privacy Policy */}
        {showEmailLogin && (
          <div className="terms">
            <p>
              By continuing, you agree to the{' '}
              <a
                href="https://townsquare.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </p>
            <p>
              Learn more about <a href="#">TowneSquare Connect Auth</a>.
            </p>
          </div>
        )}

        {/* Error Display */}
        {displayErrorsOnModal && (
          <p className="error-message">{/* console.log */}</p>
        )}

        {/* OR Divider */}
        {showEmailLogin && showExternalWalletLogin && (
          <div className="divider">
            <span>OR</span>
          </div>
        )}

        {/* Wallet Login */}
        {showExternalWalletLogin && (
          <>
            <h3 className="wallet-title">Connect wallet</h3>
            <LoginButton
              title="MetaMask"
              logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1024px-MetaMask_Fox.svg.png?20220831120339"
              client_id=""
            />
            <LoginButton
              title="Phantom"
              logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRao5_flTfyHE-w4r-hTrS9ftF6uJ9vhrOghA&s"
              client_id=""
            />
          </>
        )}
        {/* Footer */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p className="terms">Powered by </p>
          <img
            src="https://www.townesquare.xyz/assets/img/logo.svg"
            alt="Townesquare Logo"
            className="app-logo2"
          />
          <p
            style={{
              fontSize: '9px',
              fontWeight: '700',
            }}
          >
            townesquare
            <br />
            connect
          </p>
        </div>
      </div>
    </div>
  );
};

export default TSLoginModalComponent;
