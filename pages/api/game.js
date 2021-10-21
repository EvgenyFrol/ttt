var data = {
    playerWin: 0,
    oppWin: 0,
    lastWinner: 'Отсутствует'
};

export default async(req, res) => {
    const httpMethod = req.method

    console.log(req.body);

    switch (httpMethod) {
        case 'GET':
             return res.status(200).json(data);          
        case 'POST':
            return data = req.body;
    }
}