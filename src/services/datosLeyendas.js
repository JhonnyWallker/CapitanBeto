const url = "https://whippo-eq6x.onrender.com/api/leyendas";

export async function getAllDatosLeyendas() {
  try {
    const response = await fetch(`${url}`);
    const data = await response.json();
    console.log(data.results);
    return data.results.reverse();
  } catch (error) {
    console.log(error);
  }
}
