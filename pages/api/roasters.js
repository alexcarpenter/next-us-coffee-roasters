import roasters from '@/data/roasters';
export default (req, res) => {
  res.status(200).json(roasters);
};
