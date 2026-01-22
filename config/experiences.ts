import type { ExperienceItemType } from '@/components/work-experience';

import { profile } from './profile';

// Convert profile experience data to WorkExperience component format
export const experiences: ExperienceItemType[] = profile.experience.map(
  (exp, index) => ({
    id: exp.id,
    companyName: exp.company,
    companyLogo: exp.companyLogo,
    isCurrentEmployer: exp.isCurrentEmployer,
    positions: [
      {
        id: `${exp.id}-position`,
        title: exp.position,
        employmentPeriod: `${exp.startDate} – ${exp.endDate}`,
        employmentType: exp.type,
        icon: 'code' as const,
        isExpanded: index === 0,
        description: exp.highlights.map((h) => `- ${h}`).join('\n'),
        skills: exp.skills,
      },
    ],
  }),
);
