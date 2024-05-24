/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth Module and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          Signup:
 *              type: object
 *              required:
 *                  -   username
 *                  -   password
 *                  -   email
 *              properties:
 *                  username:
 *                      type: string
 *                  password:
 *                      type: string
 *                  email:
 *                      type: string
 */

/**
 * @swagger
 * 
 * /auth/signup:
 *  post:
 *      summary: login with OTP in this end-point
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/Signup'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Signup'
 *      responses:
 *          200:
 *              description: success
 */