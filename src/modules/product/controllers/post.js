import postData from "../services/post.js";

const postController = async (req, res) => {
    try {
        const data = await postData(req.body)
        res.status(200).send({ status: 200, data: data });
    } catch (err) {
        console.log(err)
        res.status(500).send({ status: 500, message: INTERNAL_SERVER_MESSAGE })
    }
}

export default postController;