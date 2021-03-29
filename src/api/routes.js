import { Router } from "express";

import MarketRouter from './resources/Market/MarketRouter';

export default app => {
    app.use(
        '/api/v1',
        Router()
        .use('/markets', MarketRouter)
    );
}
