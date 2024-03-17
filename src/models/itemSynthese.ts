export interface ItemGroupSynthese {
  title: string,
  children: ItemSynthese[]
}

export interface ItemSynthese {
  title: string,
  date: string,
  description: string,
  link?: { title: string, link: string }[],
  image?: { src: string, alt: string }[],
}
