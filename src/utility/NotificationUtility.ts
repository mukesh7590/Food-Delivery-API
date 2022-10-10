export const GenerateOtp = () => {
   const otp = Math.floor(10000 + Math.random() * 900000);
   let expiry = new Date();
   expiry.setTime(new Date().getTime() + 30 * 60 * 1000);

   return { otp, expiry };
};

export const onRequestOTP = async (otp: number, toPhoneNumber: string) => {
   const accountSid = "AC05330bd82d89dfa4d9196a23aef353b4";
   const authToken = "94d999aed9c697ebc42922fbbee68db9";
   const client = require("twilio")(accountSid, authToken, {
      lazyLoading: true,
   });
   // console.log("client aya hai ", client);

   const response = await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: "+18159576423",
      to: `+91${toPhoneNumber}`, // recipient phone number // Add country before the number
   });

   // console.log("response => ", response);
   return response;
};

// GUbxXNSLASQMZsas-NVYnJj-X8w9XEPVBWjSDtwM
