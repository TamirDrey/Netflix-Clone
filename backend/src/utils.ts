import jwt from "jsonwebtoken";

interface User {
    _id: string;
    name: string;
    email: string;
}

const generateToken = ({ _id, name, email }: User): string => {
    return jwt.sign({ _id, name, email }, process.env.JWT_PW as string, { expiresIn: "7d" }); 
};

const isAuth = async (req: any, res: any, next: any): Promise<void> => {
    const auth: string | undefined = req.headers.authorization;
    if (auth) {
        const token: string = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_PW as string, (err, decode) => {
            if (err) res.status(401).send({ message: "Welcome to the jungle" });
            else {
                req.user = decode;
                next();
            }
        });

    } else {
        res.status(401).send({ message: "Not authorized, no token" });
    }
};

export { generateToken, isAuth };
