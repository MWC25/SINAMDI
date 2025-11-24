// swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API SINAMDI',
            version: '1.0.0',
            description: 'A description of your API',
        },
        servers: [
            {
                url: 'http://localhost:8080',
                description: 'Development server',
            },
        ],
    },
    apis: ["./src/routes/**/*.ts", "./src/controllers/**/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
