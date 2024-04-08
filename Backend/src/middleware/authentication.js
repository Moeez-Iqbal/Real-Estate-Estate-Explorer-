import jwt from "jsonwebtoken";

const authenticateMiddleware = async (req, res, next) => {
    const headers = req.headers;
    let token = headers.authorization;

    
    if (token && token.startsWith("Bearer ")) {
        token = token.split(" ")[1];

        try {
            const userData = jwt.verify(token, process.env.JWT_SIGNATURE);
            req.user = userData;
            return next();
        } catch (error) {
            console.error("JWT verification failed:", error);
            return res.status(401).json({ message: "Invalid token - please login again" });
        }
    }

    
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ message: "Unauthorized - please log in" });
    }

    next();
};


authenticateMiddleware.signOut = (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                console.error("Error destroying session:", err);
                return res.status(500).json({ message: "Internal Server Error" });
            }
            res.clearCookie('connect.sid'); 
            return res.json({ success: true, message: "User signed out successfully" });
        });
    } else {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

export default authenticateMiddleware;
