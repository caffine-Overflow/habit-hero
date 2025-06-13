import { useEffect, useState } from "react";
import TopicItem from "./TopicItem";

export default function TopicsList({ subjectId, onSelect }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    if (!subjectId) return;

    async function fetchTopics() {
      try {
        const res = await fetch(`/api/topics?subjectId=${subjectId}`);
        const data = await res.json();
        setTopics(data);
      } catch (err) {
        console.error("Failed to load topics:", err);
      }
    }

    fetchTopics();
  }, [subjectId]);

  return (
    <div>
      {topics.map((topic) => (
        <TopicItem key={topic._id} task={topic} onSelect={onSelect} />
      ))}
      <TopicItem isCustom={true} onSelect={onSelect} />
    </div>
  );
}
