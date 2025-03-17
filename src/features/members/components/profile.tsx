import React from "react";
import { Id } from "../../../../convex/_generated/dataModel";

interface ProfileProps {
  memberId: Id<"members">;
  onClose: () => void;
}
const Profile = ({ memberId, onClose }: ProfileProps) => {
  return (
    <div>
      <div className="">Profile</div>
    </div>
  );
};

export default Profile;
