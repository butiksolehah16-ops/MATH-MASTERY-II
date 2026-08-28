// Portal induk: satu Form = satu app tersendiri, kongsi SATU engine yang sama.
// Form 1 dibina dahulu sebagai gold template (spec ms. 2 & 17).
export const FORMS = [
  {
    id: "form1",
    label: "Tingkatan 1",
    shortLabel: "T1",
    tagline: "Nombor Nisbah hingga Teorem Pythagoras",
    status: "available",
  },
  {
    id: "form2",
    label: "Tingkatan 2",
    shortLabel: "T2",
    tagline: "Sistem Koordinat hingga Kebarangkalian Mudah",
    status: "available",
  },
  {
    id: "form3",
    label: "Tingkatan 3",
    shortLabel: "T3",
    tagline: "Indeks hingga Garis Lurus",
    status: "available",
  },
];

export function getForm(formId) {
  return FORMS.find((f) => f.id === formId);
}
