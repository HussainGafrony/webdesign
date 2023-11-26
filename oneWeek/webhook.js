const webhookUrl = "https://test.liekasse.net";
const webhookSecret = "61LFOTBjRm";

const xhr = new XMLHttpRequest();
xhr.open("POST", webhookUrl);
xhr.setRequestHeader("Content-Type", "application/json");

// Check the secret
const secretHeader = xhr.getResponseHeader("X-Hub-Signature");
const calculatedSignature = crypto.createHmac("sha256", webhookSecret).update(xhr.responseText).digest("base64");

if (secretHeader !== calculatedSignature) {
  // The signature is invalid
  throw new Error("Invalid signature");
}
