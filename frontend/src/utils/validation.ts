// normalises sms/email to a consistent format
export function normalise(destination: string, deliveryMethod: String): string {
    if (deliveryMethod === "sms") {
        return destination.replace(/[^\d+]/g, "");
    }
  
    return destination.trim().toLowerCase();
}

export function isValid(destination: string, deliveryMethod: String): boolean {
    if (deliveryMethod === "sms") {
        if (/^\+61\d{9}$/.test(destination)) return true;
        if (/^\+?\d{9,15}$/.test(destination)) return true;
    }
  
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(destination);}