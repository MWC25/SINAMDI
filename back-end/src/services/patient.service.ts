import { patientRepository } from '../repositories/patients.repository';
import { PatientDTOType } from '../DTOs/patient.dto';

export const patientService = {
    async create(data: PatientDTOType) {
        return await patientRepository.create(data);
    },

    async getAll() {
        return await patientRepository.findAll();
    },

    async getById(id: string) {
        const patient = await patientRepository.findById(id);
        if (!patient) {
            throw new Error('Patient not found');
        }
        return patient;
    },

    async update(id: string, data: Partial<PatientDTOType>) {
        // Check if patient exists
        await this.getById(id);
        return await patientRepository.update(id, data);
    },

    async delete(id: string) {
        // Check if patient exists
        await this.getById(id);
        return await patientRepository.delete(id);
    }
};
