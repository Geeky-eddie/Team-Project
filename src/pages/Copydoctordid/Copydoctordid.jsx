// CopyDIDsButton.js
import React from 'react';

const CopyDIDsButton = () => {
  const copyToClipboard = () => {
    const doctorDIDs = [
      'did:ion:EiCMNo5Vr20eR7NLfKMn2vnGXKatl-Jk9dIGqlXSBTSVVQ:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoiUUZpUjRLYTBCcVBPUFN1aDZhSW1JSjJMYXQtZFhlN3E0Q2liZzNUZWxaVSJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJnYWN3U3lIQ2VaR3FGWmRlaWJ3bWpfd1R0V2RPNVdmeWZhMUxxTGwxS1YwIiwieSI6ImcwT3d5TFVSTnlrVXZ2MThpbFpaaUJwdDVmQUdFX250ZS1LT2VGYmI4UXMifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMCIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduNSJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlBRGpHSTJ6Rkw4bmF1U0t2Qm41ZEM4cUNaYjhsZEppR3BuSUlCcFBNYlNXQSJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpRFJzMUNuUVd5cjhiWnVVYlBsdE84WEt3ZF9QcFlmd0RNZzNZbWlaZ25IUEEiLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUFhRTR2ajYzWWZlTUYzdTRiXzIxZlJKdkNfeDhLR05maloxWGRMSUtQVVJRIn19' // Your doctor DIDs
    ];

    const clipboardText = doctorDIDs.join('\n');

    const textarea = document.createElement('textarea');
    textarea.value = clipboardText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Doctor DID copied to clipboard!');
  };

  return (
    <div>
      {/* <h1 className="text-2xl font-bold mb-4">Copy Doctor DIDs</h1> */}
      <button
        onClick={copyToClipboard}
        className=" default-btn d-block mx-auto  bg-amber-400 hover:bg-amber-500  text-black font-bold py-2 px-4 rounded-lg"
        // default-btn d-block mx-auto bg-amber-400 w-40 h-10 rounded-lg text-lg text-black
      >
        Copy Doctor DID
      </button>
    </div>
  );
};

export default CopyDIDsButton;
