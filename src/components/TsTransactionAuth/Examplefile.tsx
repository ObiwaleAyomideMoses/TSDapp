// ExampleComponent.tsx
import React from 'react';
import TransactionModal from './MainTranComp';
import { useNavigate } from 'react-router-dom';

const ExampleComponent = () => {
  const navigate = useNavigate();
  console.log('Props received:');
  // const transactionDetails = {
  //   sendingAsset: 'USDC',
  //   sendingAmount: '-50 USDC',
  //   receivingAsset: 'ETH',
  //   receivingAmount: '+ ETH',
  //   swapPlatform: 'Uniswap',
  //   stakePlatform: 'Lido',
  // };

  // const networkInfo = {
  //   fee: '-0.00123 ETH',
  //   network: 'Ethereum',
  //   address: '0x1998efc2f6a...97f1b1403c5a8f8b',
  // };

  const handleContinue = () => {
    navigate('/withdraw')
  };

  // const handleCancel = () => {
  //   // Handle cancel action here
  // };

  return (
    <TransactionModal
      companylogo="https://www.townesquare.xyz/assets/img/logo.svg"
      companyname="Lido Dapp"
      companyurl="https://lido.io"
      // flow="swap"
      // transactionDetails={transactionDetails}
      // networkInfo={networkInfo}
      // pubAddress="WETUWTERU743T73T4GUGSDUG73T4734"
      // onContinue={handleContinue}
      // onCancel={handleCancel}
    >
      {/* Custom content can be inserted here if needed */}
    </TransactionModal>
  );
};

export default ExampleComponent;
