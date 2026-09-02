export interface SoftSkillsTraining {
  title: string;
  date: string;
  location: string;
  type: string;
  duration?: string;
  coTrainer?: string;
  coTrainerUrl?: string;
  description?: string;
  goal?: string;
  learningObjectives?: string[];
  url?: string;
  image?: string;
}

export const softSkillsTrainings: SoftSkillsTraining[] = [
  {
    title: "Group Dynamics",
    date: "",
    location: "Online",
    type: "Training",
    duration: "2hrs",
    coTrainer: "Georgia Saranti",
    goal: "🎯 By the end of the session, we want participants to improve how they are working inside the team.",
    learningObjectives: [
      "⚔️ Participants during the session are going to recall previous experiences.",
      "⚔️ Participants during the session will understand that each member of the team has a different working style and personality.",
      "⚔️ Participants during the session we want participants to understand that having different personalities inside the team can be an advantage.",
    ],
    url: "https://www.youtube.com/watch?v=EWqBpyk65tg",
  },
  {
    title: "Public speaking/Presentational skills",
    date: "",
    location: "EESTEC LC Skopje Motivational Weekend",
    type: "Training",
    duration: "4hs",
    goal: "🎯 By the end of the session, participants will improve their presentation skills through proper preparation, confident posture, and effective delivery techniques.",
    learningObjectives: [
      "⚔️ Participants will learn how to properly prepare for presentations, including content organization and structure.",
      "⚔️ Participants will understand the importance of body posture and non-verbal communication in presentations.",
      "⚔️ Participants will practice and apply presentation skills including pitch projection and pauses.",
    ],
  },
  {
    title: "Creativity",
    date: "",
    location: "Soft Skills Skopje",
    type: "Training",
    duration: "4hrs",
    coTrainer: "Nevena Kimova",
    coTrainerUrl: "https://www.linkedin.com/in/nevena-kimova-579a98206/",
    goal: "🎯 After the session, the participants will have gained practical strategies to overcome creative blocks and procrastination by cultivating a consistent creative practice.",
    learningObjectives: [
      "⚔️ [Analyze] During the session, participants will recognize their own creative processes and identify specific moments when they experience Resistance.",
      "⚔️ [Apply] During the session, participants will apply practical techniques, such as taking breaks and changing environments, to overcome creative obstacles.",
      "⚔️ [Remember] During the session participants will remember to use techniques for maintaining their healthy creative practice.",
    ],
    url: "https://www.finki.ukim.mk/mk/content/soft-skills-academy-skopje",
  },
  {
    title: "Fun Productivity",
    date: "",
    location: "Online",
    type: "Training",
    duration: "4hrs",
    coTrainer: "Žiga Agostini",
    coTrainerUrl: "https://www.linkedin.com/in/zigaagostini/",
    goal: "🎯 After the session PAX will include enjoyment and ownership in everyday activities.",
    learningObjectives: [
      "⚔️ [Evaluate] By the end of the session participants will assess how different moods affect their work.",
      "⚔️ [Apply] By the end of the session participants will apply sincerity and play in a specific everyday task.",
      "⚔️ [Apply] By the end of the session participants apply their inner motivation to build confidence.",
      "⚔️ [Understand] By the end of the session participants will share examples of involving other people in their work.",
      "⚔️ [Remember] By the end of the session participants will recognise techniques to keep their energy levels in check.",
    ],
  },
  {
    title: "Conflict Management",
    date: "",
    location: "EESTEC LC Sarajevo",
    type: "Training",
    duration: "4hrs",
    goal: "🎯 After the session, participants will have gained the skills to effectively identify, understand, and apply different conflict-handling styles to manage and resolve conflicts constructively in both their personal and professional lives.",
    learningObjectives: [
      "⚔️ [Understand] By the end of the session, participants will understand conflict can beneficial to decision making, if handled and resolved properly.",
      "⚔️ [Remember] By the end of the session, participants will remember the core difference between healthy or useful conflict versus dysfunctional conflict.",
      "⚔️ [Apply] By the end of the session, participants will apply techniques to maintain a healthy conflict in team that needs to make a decision.",
      "⚔️ [Analyze] By the end of the session participants will analyze conflict modes that people can take up and give ideas to approach the same.",
    ],
  },
  {
    title: "Leadership",
    date: "",
    location: "EESTEC LC Xanthi",
    type: "Training",
    duration: "4hrs",
    coTrainer: "Giannis Tambakis",
    coTrainerUrl: "https://www.linkedin.com/in/giannis-tambakis-7805a7209/",
    goal: "🎯 Participants by the end of the session will be more equipped to effectively lead a team.",
    learningObjectives: [
      "⚔️ [Remembering] Participants will recall situations of bad leadership.",
      "⚔️ [Understanding] Participants will identify the role of a leader inside a team.",
      "⚔️ [Applying] Participants will examine case studies of good and bad leadership.",
      "⚔️ [Understanding] Participants will discuss the importance of adapting to each member's needs.",
      "⚔️ [Understanding] Participants will identify different types of members a leader might face.",
      "⚔️ [Applying] Participants will practise adapting to, and leading their team.",
    ],
  },
];

