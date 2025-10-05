import LearningPathBadge from '../LearningPathBadge';

export default function LearningPathBadgeExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <LearningPathBadge type="dsa" label="DSA Focus" />
      <LearningPathBadge type="fullstack" label="Full-Stack Development" />
    </div>
  );
}
