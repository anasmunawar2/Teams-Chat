import { v } from "convex/values";
import { query } from "./_generated/server";
import { auth } from "./auth";

export const current = query({
  args: { workspaceId: v.id("workspaces") },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);

    if (!userId) {
      return null; // Return null if the user is not authenticated
    }

    const members = await ctx.db
      .query("members")
      .withIndex("by_workspace_id_user_id", (q) =>
        q.eq("workspaceId", args.workspaceId).eq("userId", userId)
      )
      .collect();

    if (!members || members.length === 0) {
      return null; // Return null if no members are found
    }

    return members; // Return the array of members if found
  },
});
