// normalises sms/email to a consistent format
export function normalise(destination: string, deliveryMethod: String): string {
    if (deliveryMethod === "sms") {
        return destination.replace(/[^\d+]/g, "");
    }
  
    return destination.trim().toLowerCase();
}

// checks if sms/email is in a valid format
export function isValid(destination: string, deliveryMethod: string): boolean {
  const patterns: RegExp[] = [];

  if (deliveryMethod === "sms") {
    patterns.push(
      /^\+61\d{9}$/,
      /^\+?\d{9,15}$/
    );
  } else {
    patterns.push(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    );
  }

  return patterns.some((pattern) => pattern.test(destination));
}
