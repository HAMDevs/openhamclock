import bandPlan from './bandplan.json';

/**
 * Band Plan Utilities
 * Determines default mode based on frequency using bandplan.json
 */

/**
 * Get recommended mode from frequency (Hz)
 * @param {number} hz - Frequency in Hz
 * @returns {string} - 'LSB', 'USB', 'CW', 'FM', 'AM'
 */
export const getModeFromFreq = (hz) => {
    if (!hz) return 'USB'; // Default safe fallback

    const khz = hz / 1000;
    const mhz = hz / 1000000;

    // Check specific ranges from JSON
    for (const range of bandPlan) {
        if (khz >= range.min && khz <= range.max) {
            return range.mode;
        }
    }

    // Generic Rules if outside specific ham bands
    // < 10 MHz -> LSB
    // >= 10 MHz -> USB
    if (mhz < 10) return 'LSB';
    return 'USB';
};

