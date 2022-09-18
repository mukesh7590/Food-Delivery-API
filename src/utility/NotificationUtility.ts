export const GenerateOtp = () => {
   const otp = Math.floor(10000 + Math.random() * 900000);
   let expiry = new Date();
   expiry.setTime(new Date().getTime() + 30 * 60 * 1000);

   return { otp, expiry };
};

export const onRequestOTP = async (otp: number, toPhoneNumber: string) => {
   const accountSid = "AC05330bd82d89dfa4d9196a23aef353b4";
   const authToken = "102c640a865338c05991c867c2dc5405";
   const client = require("twilio")(accountSid, authToken);

   const response = await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: "+18159576423",
      to: `+91${toPhoneNumber}`, // recipient phone number // Add country before the number
   });

   return response;
};
