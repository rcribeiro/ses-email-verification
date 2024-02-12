"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_ses_1 = require("@aws-sdk/client-ses");
const sesClient = new client_ses_1.SESClient({ region: "us-east-1" });
function verifyEmailAddress(emailAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        const command = new client_ses_1.VerifyEmailAddressCommand({
            EmailAddress: emailAddress,
        });
        try {
            const response = yield sesClient.send(command);
            console.log("Verification email sent to:", emailAddress);
            return response;
        }
        catch (error) {
            console.error("Error sending verification email:", error);
            throw error;
        }
    });
}
// Replace with the email address you want to verify
verifyEmailAddress("rcribeiro@me.com").catch((error) => console.error(error));
