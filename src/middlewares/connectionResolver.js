
import { createNamespace } from 'continuation-local-storage';

import { getConnectionBySlug } from '../connectionManager';

// Create a namespace for the application.
let nameSpace = createNamespace('unique context');

export function resolve(req, res, next) {
    const slug = req.query.slug;

    if (!slug) {
        res.json({ message: `Please provide tenant's slug to connect.` });
        return;
    }

    // Run the application in the defined namespace. It will contextualize every underlying function calls.
    nameSpace.run(() => {
        nameSpace.set('connection', getConnectionBySlug(slug)); // This will set the knex instance to the 'connection'
        next();
    });
}