import roasters from "@/data/roasters";
const getStates = () => [...new Set(roasters.map((item) => item.state))].sort();
export default getStates;
