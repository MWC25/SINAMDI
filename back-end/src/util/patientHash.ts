import bcrypt from 'bcryptjs';

export const patientHash = {
    async generateHash(name: string, cpf: string): Promise<string> {

        if (!name || !cpf) {
            throw new Error('Name and CPF are required to generate patient hash.');
        }

        if (cpf.length !== 11) {
            throw new Error('CPF must be exactly 11 digits long.');
        }

        const normalizedData=`${name.trim().toLowerCase()}|${cpf.trim()}`;
        const saltRounds = 10;
        const hash = await bcrypt.hash(normalizedData, saltRounds);
        return hash;
    },

    async verifyHash(name: string, cpf: string, hash: string): Promise<boolean> {

        if (!name || !cpf || !hash) {
            throw new Error('Name, CPF, and hash are required to verify patient hash.');
        }
        
        if (cpf.length !== 11) {
            throw new Error('CPF must be exactly 11 digits long.');
        }

        const normalizedData=`${name.trim().toLowerCase()}|${cpf.trim()}`;
        const isMatch = await bcrypt.compare(normalizedData, hash);
        return isMatch;
    }
}; 