"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientDTO = void 0;
const error_1 = require("../util/error/error");
exports.patientDTO = {
    buildCreatePatientDto(data) {
        if (!data.name ||
            !data.cpf ||
            !data.phone ||
            !data.email ||
            !data.birthDate) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'Invalid data: name, cpf, phone, email and birthDate are required.');
        }
        if (!data.address ||
            !data.address.street ||
            !data.address.number ||
            !data.address.neighborhood ||
            !data.address.city ||
            !data.address.state ||
            !data.address.zipCode) {
            throw (0, error_1.createHttpError)(error_1.ErrorTypes.BAD_REQUEST, 'Invalid data: Address fields (street, number, neighborhood, city, state, zipCode) are required.');
        }
        return {
            name: String(data.name),
            cpf: String(data.cpf),
            phone: String(data.phone),
            email: String(data.email),
            birthDate: String(data.birthDate),
            address: {
                street: String(data.address.street),
                number: String(data.address.number),
                complement: String(data.address.complement || ''),
                neighborhood: String(data.address.neighborhood),
                city: String(data.address.city),
                state: data.address.state,
                zipCode: String(data.address.zipCode),
            },
            sleepQuality: Number(data.sleepQuality),
            isInsomnia: Boolean(data.isInsomnia),
            gender: data.gender,
            schooling: data.schooling,
            patientStatus: data.patientStatus,
        };
    },
    buildUpdatePatientDto(data) {
        const dto = {};
        if (data.name)
            dto.name = String(data.name);
        if (data.cpf)
            dto.cpf = String(data.cpf);
        if (data.phone)
            dto.phone = String(data.phone);
        if (data.email)
            dto.email = String(data.email);
        if (data.birthDate)
            dto.birthDate = String(data.birthDate);
        if (data.sleepQuality !== undefined)
            dto.sleepQuality = Number(data.sleepQuality);
        if (data.isInsomnia !== undefined)
            dto.isInsomnia = Boolean(data.isInsomnia);
        if (data.patientStatus)
            dto.patientStatus = data.patientStatus;
        if (data.gender)
            dto.gender = data.gender;
        if (data.schooling)
            dto.schooling = data.schooling;
        if (data.address) {
            const addressData = {};
            if (data.address.street)
                addressData.street = String(data.address.street);
            if (data.address.number)
                addressData.number = String(data.address.number);
            if (data.address.complement)
                addressData.complement = String(data.address.complement);
            if (data.address.neighborhood)
                addressData.neighborhood = String(data.address.neighborhood);
            if (data.address.city)
                addressData.city = String(data.address.city);
            if (data.address.state)
                addressData.state = data.address.state;
            if (data.address.zipCode)
                addressData.zipCode = String(data.address.zipCode);
            if (Object.keys(addressData).length > 0) {
                dto.address = addressData;
            }
        }
        return dto;
    },
};
//# sourceMappingURL=patient.dto.js.map