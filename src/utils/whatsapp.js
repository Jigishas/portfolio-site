/**
 * Generates a WhatsApp URL for the given phone number.
 * @param {string} phoneNumber - The phone number in international format (e.g., '+254743121169').
 * @returns {string} The WhatsApp URL.
 */
export const generateWhatsAppURL = (phoneNumber) => {
  // Remove the '+' sign and any spaces
  const cleanNumber = phoneNumber.replace(/^\+|\s/g, '');
  return `https://wa.me/${cleanNumber}`;
};
