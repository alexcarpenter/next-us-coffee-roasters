import { paramCase } from "change-case";
import roasters from "@/data/roasters";

export default function handler(req, res) {
  const {
    query: { state },
  } = req;
  const roastersByState = roasters.filter((r) => {
    const slug = paramCase(r.state);
    return slug === state;
  });
  res.status(200).json(roastersByState);
}
