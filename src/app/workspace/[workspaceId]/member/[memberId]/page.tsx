"use client";

import { useMemberId } from "@/hooks/use-member-id";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

const MemberIdpage = () => {
  const memeberId = useMemberId();
  const workspaceId = useWorkspaceId();
  return <div className="">{JSON.stringify({ memeberId, workspaceId })}</div>;
};

export default MemberIdpage;
