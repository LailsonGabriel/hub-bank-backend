import App from "./app";
import UsersRoute from "./routes/user.route";
import TransfersRoute from "./routes/transfer.route";

const app = new App([new UsersRoute(), new TransfersRoute()]);

app.listen();
