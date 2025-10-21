export interface NavItem {
  id: string;
  name: string;
  src: string;
  category: string;
  status?: string;
}

export function categorizeItems(items: NavItem[]) {
  const categories = Array.from(
    new Set(items.map((item) => item.category))
  ).sort((a, b) => {
    if (a === "Intro") {
      return -1;
    }
    if (b === "Intro") {
      return 1;
    }
    return a.localeCompare(b);
  });

  return categories.reduce(
    (acc, category) => {
      acc[category] = items.filter((item) => item.category === category);
      return acc;
    },
    {} as Record<string, NavItem[]>
  );
}
