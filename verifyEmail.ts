import { SESClient, VerifyEmailAddressCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({ region: "us-east-1" });

async function verifyEmailAddress(emailAddress: string) {
  const command = new VerifyEmailAddressCommand({
    EmailAddress: emailAddress,
  });

  try {
    const response = await sesClient.send(command);
    console.log("Verification email sent to:", emailAddress);
    return response;
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
}

// Replace with the email address you want to verify
verifyEmailAddress("rcribeiro@me.com").catch((error) => console.error(error));

