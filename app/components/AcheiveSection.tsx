import React from "react";
import AchievementCard from "./AcheiveCard";
import { supabase } from "../../lib/supabase";

type Achievement = {
  id: number;
  name: string;
  issue_org: string;
  date: string;
  cred_link: string;
};

// Fetch achievements from Supabase
export const fetchAchievements = async (): Promise<Achievement[]> => {
  const { data, error } = await supabase.from("achievments").select();

  if (error) {
    console.error("Error fetching achievements:", error.message);
    throw new Error("Failed to fetch achievements");
  }

  return data as Achievement[];
};

const AchievementSection = async () => {
  const achievements = await fetchAchievements();

  return (
    <section className="py-8 bg-gray-100" id="achievements">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-black mb-6">Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements && achievements.length > 0 ? (
            achievements.map((achievement) => {
              return (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                />
              );
            })
          ) : (
            <p className="text-gray-500">No achievements found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
