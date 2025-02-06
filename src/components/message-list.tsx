import { GetMessagesReturnType } from "@/features/messages/api/use-get-messages";

interface MessageListProps {
  memberName?: string;
  memberImage?: string;
  channelName?: string;
  channelCreationTime?: number;
  variant?: "channel" | "thread" | "conversation";
  data: GetMessagesReturnType | undefined;
  loadMore: () => void;
  isLoadingMore: () => boolean;
  canLoadMore: () => boolean;
}

const MessageList = ({
  memberName,
  channelName,
  channelCreationTime,
  variant = "channel",
  data,
  loadMore,
  isLoadingMore,
  canLoadMore,
}: MessageListProps) => {
  return (
    <div className="flex-1 flex flex-col-reverse pb-4 overflow-y-auto messages-scrollbar">
      {data?.map((message) => <div>{JSON.stringify(message)}</div>)}
    </div>
  );
};

export default MessageList;
