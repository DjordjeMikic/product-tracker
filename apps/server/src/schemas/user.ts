/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - password
 *        - passwordConfirmation
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        name:
 *          type: string
 *          default: Jane Doe
 *        password:
 *          type: string
 *          default: stringPassword123
 *        passwordConfirmation:
 *          type: string
 *          default: stringPassword123
 *    UsersResponse:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        fullName:
 *          type: string
 *        email:
 *          type: string
 *        password:
 *          type: string
 *        verified:
 *          type: boolean
 *        __v:
 *          type: number
 *        products: string[]
 */
