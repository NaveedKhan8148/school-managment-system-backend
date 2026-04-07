import { Router } from "express";

const router = Router();

const jokes = [
    {
        id: 1,
        name: "funny",
        description: "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
        id: 2,
        name: "debugging", 
        description: "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings."
    },
    {
        id: 3,
        name: "recursion",
        description: "To understand recursion, you must first understand recursion."
    },
    {
        id: 4,
        name: "coffee",
        description: "Programmers don't die, they just lose their stack trace."
    },
    {
        id: 5,
        name: "variables",
        description: "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25!"
    },
        {
        id: 5,
        name: "variables",
        description: "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25!"
    }
];

router.get("/", (req, res) => {
    res.json(jokes);
});

export default router;