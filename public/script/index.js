import cars from "./cars.js";

const carCard = document.getElementById("car-card");

async function getCars() {
  const carsData = await cars.getCarsData();
  console.log(carsData);
  let carsDataInCards = "";
  carsData.map((car) => {
    carsDataInCards += `<div class="col-md-4 mx-2">
              <div class="card mx-0 my-3 rounded"  style="width: 18rem; ">
                  <img src="${car.image}" class="card-img-top img-fluid" alt="${car.manufacture}" style="height: 195px; border-radius: 3px; object-fit: cover;" />
                  <div class="card-body" style="font-size: 14px">
                      <p class="card-title">${car.manufacture} / ${car.type}</p>
                      <p class="fw-bold">Rp. ${car.rentPerDay} / hari</p>
                      <p class="card-text">${car.description}</p>
                      <div class="my-2"><span><img class="me-2" src="./assets/icons/icon_users.png" /></span>${car.capacity} Orang</div>
                      <div class="my-2"><span><img class="me-2" src="./assets/icons/icon_settings.png" /></span>${car.transmission}</div>
                      <div class="my-2"><span><img class="me-2" src="./assets/icons/icon_calendar.png" /></span>Tahun ${car.year}</div>
                      <a href="#" class="btn btn-success w-100 mt-2 fw-bold mt-4 " style="font-size: 14px">Pilih Mobil</a>
                  </div>
              </div>
          </div>
    `;
  });
  carCard.innerHTML = carsDataInCards;
}

getCars();
