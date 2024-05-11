import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        if (
            !email || 
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid Input'})
            return; 
        }

        // Store it in a database
        const newMessage = {
            email,
            name,
            message
        };

        let client;

        try {
            client = await MongoClient.connect('mongodb+srv://nurionurkurtulus:Muckmuck41.@cluster0.byjdxtt.mongodb.net/my-site?retryWrites=true&w=majority&appName=Cluster0')
        } catch (error) {
            res.status(500).json({ message: "Could not connect to database"})
            return
        }

        const db = await client.db()

        try {
            const result = await db.collection('messages').insertOne(newMessage)
            newMessage.id = result.insertedId;
        } catch (error) {
            (await client).close();
            res.status(500).json({ message: 'Data could not insert to database'})
        }

        (await client).close()

        console.log(newMessage)
        res.status(200).json({ message: 'Succesfully stored database'});
    }
}

export default handler;