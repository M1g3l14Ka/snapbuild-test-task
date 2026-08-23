export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface UseCaseItem {
  title: string;
  description: string;
  image: string;
}

export interface UseCaseCategory {
  id: string;
  label: string;
  items: UseCaseItem[];
}
