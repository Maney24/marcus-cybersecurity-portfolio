// Utility functions for the Marcus Cybersecurity Portfolio

/**
 * Generates a formatted timestamp.
 * @returns {string} Current Date and Time in UTC format: YYYY-MM-DD HH:MM:SS
 */
export function getCurrentTimestamp(): string {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
}

/**
 * Logs a message with a timestamp.
 * @param message {string} The message to log.
 */
export function logWithTimestamp(message: string): void {
    console.log(`[${getCurrentTimestamp()}] ${message}`);
}