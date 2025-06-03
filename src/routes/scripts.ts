
import { Hono } from "hono"
import { getFilteredEntries } from "../services/scripts";

const scriptsRouter = new Hono()

scriptsRouter.get('/', async (c) => {
	const page = Number(c.req.query("page")) || 1;
	const limit = Number(c.req.query("limit")) || 10;

	const tags = c.req.query("tags");
	const orderType = c.req.query("order_type");
	const order = c.req.query("order");

    const query = c.req.query("q")

	const filters = {
		tags,
		orderType,
		order,
	};

	const entries = await getFilteredEntries(page, limit, c, filters, query);

	if (entries?.status && entries.status >= 400) {
		return c.json(
			{
				message: entries.message,
			},
			400,
		);
	}

	if (!entries.data) {
		return c.json(
			{
				message: "No results found.",
			},
			404,
		);
	}

	return c.json(entries?.data || [], 200);
})

export default scriptsRouter
