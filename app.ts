import Coinpayments from "coinpayments";

const { parsed } = require("dotenv").config({ path: ".env" });

(async function () {
  const { PUBLIC_KEY: key, PRIVATE_KEY: secret } = parsed;

  try {
    const client = new Coinpayments({
      key,
      secret,
    });

    /**
     * User Info
     */

    const userInfo = await client.getBasicInfo();

    console.log("==> Account Information  <==");

    console.log(userInfo);

    /**
     * Transaction
     */

    const transaction = await client.createTransaction({
      currency1: "USD",
      currency2: "BNB",
      amount: 1,
      buyer_email: "migueldossantosrj45@gmail.com",
    });

    console.log("==> Transaction  <==");

    console.log(transaction);

    /**
     * Transaction Info
     */

    //CPFL2YCBL68Y3ECWFSDSPSTLCJ

    console.log("==> Transaction Info  <==");

    const transactionInfo = await client.getTx({
      txid: transaction.txn_id,
    });

    console.log(transactionInfo)

  } catch (error) {
    console.log(error?.extra?.data);
  }
})();
