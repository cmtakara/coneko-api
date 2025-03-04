

const apiKey = process.env.API_KEY;


const validateApiKey = async (req, res, next) => {
 
    const providedApiKey = req.headers['x-api-key'];
    if (providedApiKey) {
        try {
            const key = await apiKey.findOne({ key: providedApiKey });
            if (key) {
                next();
            } else {
                res.status(403).send('Forbidden');
            }
        } catch (err) {
            res.status(500).send('Server error');
        }
    } else {
        res.status(400).send('API key is required');
    }
};

export default validateApiKey;