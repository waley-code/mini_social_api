const express = require('express');
const format = require("date-format");
const app = express();

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res)=>{
    res.send("Hello user");
});

app.get("/api/vi/instagram", (req, res)=>{
    const UserProfile = {
        username: "wale-code",
        followers: 100,
        follows: 40,
        date: format.asString("dd[MM] - hh:mm:ss", new Date()),
    };
    res.status(200).json({UserProfile});
});

app.get("/api/vi/facebook", (req, res)=>{
    const UserProfile = {
        username: "wale-code",
        followers: 300,
        follows: 80,
        date: format.asString("dd[MM] - hh:mm:ss", new Date()),
    };
    res.status(200).json({UserProfile});
});

app.get("/api/vi/linkedin", (req, res)=>{
    const UserProfile = {
        username: "wale-code",
        followers: 600,
        follows: 100,
        date: format.asString("dd:MM:yy - hh:mm:ss", new Date()),
    };
    res.status(200).json({UserProfile});
});

app.get("/api/vi/:token", (req, res)=>{
    console.log(req.params.token);
    res.status(201).json({param: req.params.token});
});
app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`);
});