import { Data } from '../../helpers/data';
const data = new Data();

export default async(req, res) => {
    if (req.method === 'GET') {
        try {
            res.status(200).json(data.getData()); 
        } catch (err) {
            res.json(err);
            res.status(405).end();
        }
    }
    
    if (req.method === 'POST') {
        try {       
            data.winLength = req.body.winLength
            data.oppWinLength = req.body.oppWinLength
            data.lastWinner = req.body.lastWinner
            res.status(200).json(data.getData());             
        } catch (err) {
            res.status(err).json({});
        }
    }
}