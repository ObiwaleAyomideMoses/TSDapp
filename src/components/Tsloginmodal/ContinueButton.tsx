import React from 'react';
import '../../components/Tsloginmodal/Tsconnect.css';
import { useTSConnect } from './context/ConnectContextProvider';
interface LoginButtonProps {
  title: string;
  logo: string;
  client_id: string | undefined;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  title,
  logo,
  client_id,
}) => {
  const { connect } = useTSConnect();

  return (
    <button
      // disabled={client_id === undefined}
      onClick={() => connect('google', '12345')}
      className="login-button"
    >
      <div>
        <img src={logo} alt={title} className="button-logo" />
        {title}
      </div>
      <div>
        <img
          src="https://cdn.icon-icons.com/icons2/1102/PNG/512/1485969917-3-right_78909.png"
          alt={title}
          className="button-logo"
        />
      </div>
    </button>
  );
};

export default LoginButton;
