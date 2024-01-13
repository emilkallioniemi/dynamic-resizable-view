import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
});
