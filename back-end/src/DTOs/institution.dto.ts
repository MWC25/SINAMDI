import { InstitutionType, State } from "../generated/prisma/enums";

export interface InstitutionDTOType {
    name: string;
    type: InstitutionType;
    address: {
        street: string;
        number: string;
        complement: string;
        neighborhood: string;
        city: string;
        state: string;
        zipCode: string;
    };
}

export const institutionDTO = {
    buildInstitutionDto(data: any): InstitutionDTOType {
        if (!data.name || !data.type || !data.address) {
            throw new Error("Invalid data: name, type and address are required.");
        }

        if(data.type.trim() !in InstitutionType){
            throw new Error("Invalid institution type.");
        }

        if (!data.address.street || !data.address.number || !data.address.neighborhood ||
            !data.address.city || !data.address.state || !data.address.zipCode) {
            throw new Error("Invalid address data: all address fields are required.");
        }

        if (data.address.complement === undefined) {
            data.address.complement = "";
        }

        if (isNaN(data.address.number)) {
            throw new Error("Invalid address number: must be a number.");
        }

        if (data.address.zipCode.toString().length > 8) {
            throw new Error("Invalid zip code: length exceeds limit.");
        }

        return {
            name: data.name.trim(),
            type: InstitutionType[data.type.trim() as keyof typeof InstitutionType],
            address: {
                street: data.address.street.trim(),
                number: String(data.address.number).trim(),
                complement: data.address.complement.trim(),
                neighborhood: data.address.neighborhood.trim(),
                city: data.address.city.trim(),
                state: State[data.address.state.trim() as keyof typeof State],
                zipCode: (data.address.zipCode.trim()).toString()
            }
        };
    }
}