let web3, account;

document.getElementById('connectBtn').onclick = async () => {
  if (!window.ethereum) {
    alert('MetaMask install karo pehle!');
    return;
  }
  try {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    account = accounts[0];
    web3 = new Web3(window.ethereum);

    document.getElementById('address').innerText = account;

    const balWei = await web3.eth.getBalance(account);
    document.getElementById('balance').innerText = 
      parseFloat(web3.utils.fromWei(balWei, 'ether')).toFixed(4);

    document.getElementById('connectBtn').innerText = '✅ Connected';
  } catch (err) {
    document.getElementById('status').innerText = 'Error: ' + err.message;
  }
};

document.getElementById('sendBtn').onclick = async () => {
  if (!account) {
    alert('Pehle MetaMask connect karo!');
    return;
  }
  const to = document.getElementById('toAddress').value;
  const amount = document.getElementById('amount').value;
  const status = document.getElementById('status');

  if (!to || !amount) {
    status.innerText = '⚠️ Address aur amount dono bharо';
    return;
  }
  try {
    status.innerText = '⏳ Transaction bheji ja rahi hai...';
    const tx = await web3.eth.sendTransaction({
      from: account,
      to: to,
      value: web3.utils.toWei(amount, 'ether')
    });
    status.innerText = '✅ Sent! TX Hash: ' + tx.transactionHash;
  } catch (err) {
    status.innerText = '❌ Error: ' + err.message;
  }
};