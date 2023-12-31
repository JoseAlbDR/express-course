import express, { Request, Response } from "express";
import productsRouter from "./src/routes/products";
// import homeRouter from "./src/routes/home";
import notFoundRouter from "./src/routes/notFound";
import queryRouter from "./src/routes/query";
import { logger } from "./logger";
import { authorize } from "./authorize";
import { people } from "./src/data/data";
import {
  TypedRequest,
  TypedRequestBody,
  TypedRequestParams,
} from "./src/types/types";
import { People } from "./src/interfaces/types";
// import morgan from "morgan";

const app = express();

const PORT = 3000;

// app.use("/", homeRouter);

app.use("/api/products", productsRouter);
app.use("/api/query", queryRouter);
app.use("/api/items", authorize, logger);
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
// app.use(morgan("tiny"));

// static assets
app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.post("/login", (req: TypedRequestBody<{ name: string }>, res: Response) => {
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Welcome! ${name}`);
  }

  return res.status(401).send("Please provide a credential");
});

app.get("/api/people", (_req, res) => {
  res.status(200).send({ data: people });
});

app.post("/api/people", (req: TypedRequestBody<{ name: string }>, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .send({ success: false, msg: "Please provide a name." });
  }

  const person = {
    name,
    id: Math.max(...people.map((d) => d.id)) + 1,
  };

  people.push(person);

  return res.status(201).json({ success: true, person: name });
});

app.put(
  "/api/people/:id",
  (req: TypedRequest<{ name: string }, { id: string }>, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person: People | undefined = people.find((p) => p.id === +id);

    if (!person) {
      return res.status(404).send({ success: false, msg: "Person not found" });
    }

    const newPeople = people.map((p) => {
      if (p.id === +id) {
        p.name = name;
      }
      return p;
    });
    return res.status(200).send({ success: true, data: { newPeople } });
  }
);

app.delete(
  "/api/people/:id",
  (req: TypedRequestParams<{ id: string }>, res) => {
    const { id } = req.params;
    console.log(id);

    const person: People | undefined = people.find((p) => p.id === +id);
    if (!person) {
      return res.status(404).send({ success: false, msg: "Person not found" });
    }

    const newPeople = people.filter((p) => p.id !== +id);
    return res.status(200).send({ success: true, data: { newPeople } });
  }
);

app.get("/", (_req: Request, res: Response) => {
  res.send("Home");
});

app.get("/about", (_req: Request, res: Response) => {
  res.send("About");
});

app.get("/api/items", (_req: Request, res: Response) => {
  res.send("Items");
});
app.use("*", notFoundRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
