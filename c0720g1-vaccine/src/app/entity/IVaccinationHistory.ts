import {IVaccination} from './IVaccination';
import {IPatient} from './IPatient';

export interface IVaccinationHistory {
  vaccinationHistoryId: number;
  status: boolean;
  dosage: number;
  preStatus: string;
  afterStatus: string;

  vaccination: IVaccination;
  patient: IPatient;
}
