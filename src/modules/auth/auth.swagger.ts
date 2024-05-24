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
  *          Login:
 *              type: object
 *              required:
 *                  -   username
 *                  -   password
 *              properties:
 *                  username:
 *                      type: string
 *                  password:
 *                      type: string
 */

/**
 * @swagger
 * 
 * /auth/signup:
 *  post:
 *      summary: signup with username, email and password
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

/**
 * @swagger
 * 
 * /auth/login:
 *  post:
 *      summary: login with username and password
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/Login'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Login'
 *      responses:
 *          200:
 *              description: success
 */