import React from "react";

const Matches = () => {
  return (
    <div className="p-6 rounded-lg bg-gray-100 mx-44 mt-20 shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Matches</h1>
      <ul>
        <li>
          Personalized Recommendations: Our platform analyzes user profiles,
          including skills, experience, and job preferences, to deliver highly
          relevant job matches. Each recommendation is carefully curated to
          maximize the likelihood of a successful match.
        </li>
        <li>
          Real-Time Updates: The Matches page is constantly updated with new job
          listings and opportunities, ensuring that users have access to the
          latest openings in their desired fields.
        </li>
        <li>
          Filtering and Sorting Options: Users can refine their matches based on
          various criteria such as location, job type, industry, and salary
          range. Flexible sorting options allow users to prioritize matches
          based on relevance, application deadline, or other preferences.
        </li>
        <li>
          Saved Matches: Users can save their favorite job matches for future
          reference or comparison, making it easy to track and revisit potential
          opportunities.
        </li>
      </ul>
    </div>
  );
};

export default Matches;
