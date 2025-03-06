

const apiKey = process.env.API_KEY;


const validateApiKey = async (req, res, next) => {
    const providedApiKey = req.headers['x-api-key'];
    if (!providedApiKey) {
        return res.status(400).send('API key is required');
      }

    if (providedApiKey) {
        try {
            if (providedApiKey === apiKey)  {
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