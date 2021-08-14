import faker from "faker";
import CommentDetail from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you Sure you want?</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today is 6:00 PM"
          content="Nice Blog Post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today is 6:00 PM"
          content="Nice Blog Post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today is 6:00 PM"
          content="Nice Blog Post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
