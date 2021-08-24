
export default async(req, res) => {
    const httpMethod = req.method
    const { playerWin, oppWin, lastWinner } = req.body
    let arr = []

    switch (httpMethod) {
        case 'GET':
            res.status(200).json(arr)
        case 'POST':
            res.status(200).json(arr)

    }
}