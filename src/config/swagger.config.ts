import {Express} from 'express'
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
const SwaggerConfig = (app:Express) => {
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition: {
            openapi: '3.0.1',
            info: {
                title: 'wikipedia',
                description: 'wikipedia nodejs app',
                version: '1.0.0',
            },
        },
        apis: [process.cwd() + '/src/modules/**/*.swagger.js'],
    });
    const swagger = swaggerUi.setup(swaggerDocument, {});
    app.use('/swagger', swaggerUi.serve, swagger);
}


export default SwaggerConfig
