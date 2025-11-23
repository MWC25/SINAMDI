import { Request, Response } from 'express';
import { patientService } from '../services/patient.service';
import { patientDTO } from '../DTOs/patient.dto';
import { logger } from '../config/logger';

export const patientController = {
    async create(req: Request, res: Response) {
        try {
            const data = patientDTO.buildCreatePatientDto(req.body);
            const newPatient = await patientService.create(data);

            return res.status(201).json({
                message: 'Patient created successfully',
                patient: newPatient
            });
        } catch (error) {
            logger.error(`Error creating patient: ${(error as Error).message}`);
            return res.status(400).json({
                message: 'Error creating patient: ' + (error as Error).message,
                error: true
            });
        }
    },

    async getAll(req: Request, res: Response) {
        try {
            const patients = await patientService.getAll();
            return res.status(200).json({
                message: 'Patients retrieved successfully',
                patients
            });
        } catch (error) {
            logger.error(`Error retrieving patients: ${(error as Error).message}`);
            return res.status(500).json({
                message: 'Error retrieving patients: ' + (error as Error).message,
                error: true
            });
        }
    },

    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'ID is required', error: true });
            }
            const patient = await patientService.getById(id);
            return res.status(200).json({
                message: 'Patient retrieved successfully',
                patient
            });
        } catch (error) {
            logger.error(`Error retrieving patient: ${(error as Error).message}`);
            return res.status(404).json({
                message: 'Error retrieving patient: ' + (error as Error).message,
                error: true
            });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'ID is required', error: true });
            }
            const data = patientDTO.buildUpdatePatientDto(req.body);
            const updatedPatient = await patientService.update(id, data);
            return res.status(200).json({
                message: 'Patient updated successfully',
                patient: updatedPatient
            });
        } catch (error) {
            logger.error(`Error updating patient: ${(error as Error).message}`);
            return res.status(400).json({
                message: 'Error updating patient: ' + (error as Error).message,
                error: true
            });
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'ID is required', error: true });
            }
            await patientService.delete(id);
            return res.status(200).json({
                message: 'Patient deleted successfully'
            });
        } catch (error) {
            logger.error(`Error deleting patient: ${(error as Error).message}`);
            return res.status(400).json({
                message: 'Error deleting patient: ' + (error as Error).message,
                error: true
            });
        }
    }
};
