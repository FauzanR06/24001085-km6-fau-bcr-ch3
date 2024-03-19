const getCarsData = async () => {
  const res = await fetch("/cars?");
  const { data, message } = await res.json();
  console.log(data);
  return data;
};

export default { getCarsData };
