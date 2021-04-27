import PaynowQR from "paynowqr";
import QRCode from "qrcode.react";

export const QR = () => {
  const qrcode = new PaynowQR({
    uen: "200302053W", //Required: UEN of company
    amount: 0.1, //Specify amount of money to pay.
    editable: true, //Whether or not to allow editing of payment amount. Defaults to false if amount is specified
    // expiry: "20201231", //Set an expiry date for the Paynow QR code (YYYYMMDD). If omitted, defaults to 5 years from current time.
    refNumber: "TQINV-10001", //Reference number for Paynow Transaction. Useful if you need to track payments for recouncilation.
    // company: "ACME Pte Ltd.", //Company name to embed in the QR code. Optional.
  });
  const QRstring = qrcode.output();

  return <QRCode value={QRstring} size={256} />;
};
