import { NextFunction, Request, Response } from 'express';
import { patientService } from '../services/patient.service';
import { patientDTO } from '../DTOs/patient.dto';
import { createHttpError, ErrorTypes } from '../util/error/error';

export const patientController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data = patientDTO.buildCreatePatientDto(req.body);
            const newPatient = await patientService.create(data);

            return res.status(201).json({
                message: 'Patient created successfully',
                patient: newPatient
            });
        } catch (error) {
            return next(error);
        }
    },

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const patients = await patientService.getAll();
            return res.status(200).json({
                message: 'Patients retrieved successfully',
                patients,
            });
        } catch (error) {
            return next(error);
        }
    },

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(createHttpError(ErrorTypes.BAD_REQUEST, 'ID is required'));
            }
            const patient = await patientService.getById(id);
            return res.status(200).json({
                message: 'Patient retrieved successfully',
                patient,
            });
        } catch (error) {
            return next(error);
        }
    },

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(createHttpError(ErrorTypes.BAD_REQUEST, 'ID is required'));
            }
            const data = patientDTO.buildUpdatePatientDto(req.body);
            const updatedPatient = await patientService.update(id, data);
            return res.status(200).json({
                message: 'Patient updated successfully',
                patient: updatedPatient,
            });
        } catch (error) {
            return next(error);
        }
    },

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(createHttpError(ErrorTypes.BAD_REQUEST, 'ID is required'));
            }
            await patientService.delete(id);
            return res.status(200).json({
                message: 'Patient deleted successfully',
            });
        } catch (error) {
            return next(error);
        }
    }
};
