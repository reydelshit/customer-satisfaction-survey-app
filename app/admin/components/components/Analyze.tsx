import {
  overallSatisfactionFeedback,
  foodQualityFeedback,
  serviceQualityFeedback,
} from '../../dataset';

export default function Analyze({
  name,
  rating,
}: {
  name: string;
  rating: number;
}) {
  return (
    <div>
      {overallSatisfactionFeedback
        .filter((feedback) => feedback.ratingRange === rating)
        .map((feedback, index) => {
          return (
            <div className="mt-3" key={index}>
              <div className="flex gap-3 font-semibold">
                <h1>{name} -</h1>
                <h1>{feedback.ratingRange}</h1>
              </div>

              <p className="pl-2">{feedback.suggestion}</p>
            </div>
          );
        })}
    </div>
  );
}
