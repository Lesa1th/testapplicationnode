import './src/types.js'
import { describe, it } from 'node:test'
import { parseUser } from '../src/service.js'

describe('Service', () => {

    it('should parse user', () => {
        
        /**@type {IncomingUser}*/
        const user = {
            email: 'ana@ref.com',
            name: 'ana',
            password: '123456789'
        }

        parseUser();

    })

})