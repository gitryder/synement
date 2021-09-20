const PREF_ACADEMIC_YEAR = 'academicYearPreference';

export function getYearPref() {
    return localStorage.getItem(PREF_ACADEMIC_YEAR);
}

export function setYearPref(pref) {
    localStorage.setItem(PREF_ACADEMIC_YEAR, pref);
}