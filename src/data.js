export const records = [
  { place: "Riverside Garden", type: "Outdoor", cost: "Free", access: "Step-free paths", note: "Open space with seating near the main entrance" },
  { place: "City Museum", type: "Indoor", cost: "Free", access: "Lift and quiet hour", note: "Allow time for the interactive gallery" },
  { place: "Neighbourhood Library", type: "Indoor", cost: "Free", access: "Step-free entrance", note: "Seating, toilets, and a community noticeboard" },
  { place: "Market Square", type: "Outdoor", cost: "Varies", access: "Busy at lunchtime", note: "Food stalls and frequent bus connections" }
];

export function answerLocally(question, rows) {
  const q = question.toLowerCase();
  if (q.includes("free") || q.includes("cost")) {
    const free = rows.filter((row) => row.cost === "Free");
    return free.length ? `There are ${free.length} free options in this sample: ${free.map((row) => row.place).join(", ")}. Check current details before you go.` : "This sample has no entries marked free. You could add a cost filter or look for another source.";
  }
  if (q.includes("access") || q.includes("step")) {
    return rows.map((row) => `${row.place}: ${row.access}`).join(" ");
  }
  return `This sample contains ${rows.length} places. You could compare cost, indoor or outdoor setting, and access notes. The records are example data, so verify details before making plans.`;
}
