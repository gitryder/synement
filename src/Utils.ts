export const getAbbreviation = (str: string): string => {
    if (!str) {
        return '';
    } else {
        const abbr = str.match(/[A-Z0-9]/g);
        return abbr ? abbr.join('') : '';
    }
};
