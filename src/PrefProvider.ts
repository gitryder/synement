import { AcademicYear } from './models/AcademicYear';
const PREF_ACADEMIC_YEAR = 'academicYearPreference';

export function getYearPref() {
    return localStorage.getItem(PREF_ACADEMIC_YEAR) as AcademicYear;
}

export function setYearPref(pref: AcademicYear) {
    localStorage.setItem(PREF_ACADEMIC_YEAR, pref);
}
